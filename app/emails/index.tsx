import {
    Body,
    Section,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface WelcomeEmailProps {
    userFirstname: string;
    message: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const WelcomeEmail = ({
    userFirstname,
    message,
  }: WelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
      Tu mensaje ha sido recibido. Te responderé en breve.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://nahucodes.dev/logo.png"
            width="100"
            height="100"
            alt="Logo"
            style={{...logo,borderRadius: "50%"}}
          />
          <Text style={heading}>Hola {userFirstname},</Text>
          <Text style={paragraph}>
          Gracias por ponerse en contacto conmigo. He recibido su mensaje y me pondré en contacto con usted lo antes posible.
          </Text>
          <Text style={subheading}>Copia de su mensaje:</Text>
          <Section style={messageContainer}>
          <Text style={recruiterMessage}>
            {message}
          </Text>
        </Section>
        <Text style={footer}>
          Si tiene alguna consulta adicional, no dude en responder a este correo.  
          <br></br>
          Saludos, 
          <br></br> 
          Nahu Favela
        </Text>
        </Container>
      </Body>
    </Html>
  );
  
  WelcomeEmail.PreviewProps = {
    userFirstname: "",
  } as WelcomeEmailProps;
  
  export default WelcomeEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const logo = {
    margin: "0 auto",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const footer = {
    fontSize: '14px',
    marginTop: '20px',
  };
  
  const heading = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subheading = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const messageContainer = {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  const recruiterMessage = {
    fontSize: '14px',
    color: '#555',
  };