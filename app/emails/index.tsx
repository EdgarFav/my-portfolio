import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface WelcomeEmailProps {
    userFirstname: string;
  }
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const WelcomeEmail = ({
    userFirstname,
  }: WelcomeEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src="https://res.cloudinary.com/ds1hq1nwi/image/upload/v1727111680/logo_p8jhxe.png"
            width="100"
            height="100"
            alt="Logo"
            style={{...logo,borderRadius: "50%"}}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Welcome to nahucodes
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href="https://google.com">
              Get started
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            nahucodes
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            470 Noor Ave STE B #1148, South San Francisco, CA 94080
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
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
  };
  