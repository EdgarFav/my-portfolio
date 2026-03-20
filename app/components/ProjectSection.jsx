'use client'
import React, { useState, useRef } from 'react'
import { PROJECTS_DATA } from '../constants'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const ProjectSection = () => {
    const [tag, setTag] = useState("Todos")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = PROJECTS_DATA.filter((project) =>
        project.tags.includes(tag))

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 }
    }

    return (
        <section id='proyectos' className='py-12'>
            {/* Section header */}
            <div className='text-center mb-10'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-4xl md:text-5xl font-bold text-white mb-4'
                >
                    Mis{' '}
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>
                        Proyectos
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='text-[#9ca3af] text-base md:text-lg max-w-2xl mx-auto'
                >
                    Una selección de mis proyectos más destacados, desde aplicaciones web fullstack hasta apps móviles.
                </motion.p>
            </div>

            {/* Filter tags */}
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Todos"
                    isSelected={tag === "Todos"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Movil"
                    isSelected={tag === "Movil"}
                />
            </div>

            {/* Project grid */}
            <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-10'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        key={project.id}
                        transition={{ duration: 0.4, delay: index * 0.15 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            stack={project.stack}
                            highlights={project.highlights}
                            imgUrl={project.image}
                            githubUrl={project.githubUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection