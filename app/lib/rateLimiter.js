class RateLimiter {
    constructor() {
        this.requests = new Map();
        this.windowMs = 15 * 60 * 1000; // 15 minutos
        this.maxRequests = 3; // máximo 3 emails por ventana de tiempo
        this.cleanupInterval = 5 * 60 * 1000; // limpiar cada 5 minutos

        // Limpiar registros antiguos periódicamente
        setInterval(() => {
            this.cleanup();
        }, this.cleanupInterval);
    }

    getClientKey(ip, email) {
        // Combinar IP y email para mejor control
        return `${ip}:${email}`;
    }

    isAllowed(ip, email = '') {
        const now = Date.now();
        const windowStart = now - this.windowMs;

        // Verificar por IP
        const ipKey = ip;
        if (!this.requests.has(ipKey)) {
            this.requests.set(ipKey, []);
        }

        // Verificar por combinación IP + Email si se proporciona
        let combinedKey = null;
        if (email) {
            combinedKey = this.getClientKey(ip, email);
            if (!this.requests.has(combinedKey)) {
                this.requests.set(combinedKey, []);
            }
        }

        // Limpiar requests antiguos para IP
        const ipRequests = this.requests.get(ipKey);
        const validIpRequests = ipRequests.filter(time => time > windowStart);
        this.requests.set(ipKey, validIpRequests);

        // Verificar límite por IP (más estricto)
        if (validIpRequests.length >= this.maxRequests) {
            return { allowed: false, reason: 'ip_limit' };
        }

        // Si hay email, verificar también por combinación
        if (combinedKey) {
            const combinedRequests = this.requests.get(combinedKey);
            const validCombinedRequests = combinedRequests.filter(time => time > windowStart);
            this.requests.set(combinedKey, validCombinedRequests);

            if (validCombinedRequests.length >= this.maxRequests) {
                return { allowed: false, reason: 'email_limit' };
            }

            // Registrar el intento en ambos
            validCombinedRequests.push(now);
        }

        validIpRequests.push(now);
        return { allowed: true };
    }

    cleanup() {
        const now = Date.now();
        const windowStart = now - this.windowMs;

        for (const [key, requests] of this.requests) {
            const validRequests = requests.filter(time => time > windowStart);
            if (validRequests.length === 0) {
                this.requests.delete(key);
            } else {
                this.requests.set(key, validRequests);
            }
        }
    }

    // Método para obtener estadísticas (opcional)
    getStats(ip, email = '') {
        const now = Date.now();
        const windowStart = now - this.windowMs;

        const ipRequests = this.requests.get(ip) || [];
        const validIpRequests = ipRequests.filter(time => time > windowStart);

        let emailRequests = 0;
        if (email) {
            const combinedKey = this.getClientKey(ip, email);
            const combined = this.requests.get(combinedKey) || [];
            emailRequests = combined.filter(time => time > windowStart).length;
        }

        return {
            ipRequests: validIpRequests.length,
            emailRequests,
            maxRequests: this.maxRequests,
            windowMinutes: this.windowMs / (60 * 1000)
        };
    }
}

export const rateLimiter = new RateLimiter();