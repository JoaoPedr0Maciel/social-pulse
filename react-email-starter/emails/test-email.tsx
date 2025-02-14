import type * as React from "react"
import { Html, Head, Body, Container, Section, Row, Column, Heading, Text, Button, Img } from "@react-email/components"

interface EmailProps {
  email: string
  name: string
  whatsApp: string
}

const baseUrl = "https://your-cdn-url.com"

export function Email({ email, name, whatsApp }: EmailProps) {
  return (
    <Html>
      <Head>
        <title>New Lead Information</title>
        <style>
          {`
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #f4f4f7;
            }
          `}
        </style>
      </Head>
      <Body style={{ backgroundColor: "#f4f4f7", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: "600px", margin: "auto" }}>
          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              marginTop: "40px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Row>
              <Column>
                <Text style={{ textAlign: "center", color: "#64748b", fontSize: "16px", margin: "0 0 30px" }}>
                  Logo aqui
                </Text>
              </Column>
            </Row>
            <Row>
              <Column>
                <Heading
                  as="h1"
                  style={{
                    textAlign: "center",
                    color: "#1e293b",
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "30px 0 10px",
                  }}
                >
                  New Lead Information
                </Heading>
                <Text style={{ textAlign: "center", color: "#64748b", fontSize: "16px", margin: "0 0 30px" }}>
                  A new potential client has shown interest!
                </Text>
              </Column>
            </Row>
            <Row style={{ padding: "10px" }}>
              <Column style={{ backgroundColor: "#f8fafc", padding: "20px", borderRadius: "8px", width: "100%" }}>
                <Text style={{ fontSize: "16px", color: "#334155", marginBottom: "10px" }}>
                  <strong>Name:</strong> {name}
                </Text>
                <Text style={{ fontSize: "16px", color: "#334155", marginBottom: "10px" }}>
                  <strong>Email:</strong> {email}
                </Text>
                <Text style={{ fontSize: "16px", color: "#334155", marginBottom: "10px" }}>
                  <strong>WhatsApp:</strong> {whatsApp}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column style={{ textAlign: "center", padding: "30px 0" }}>
                <Button
                  href={`https://wa.me/55${whatsApp}`}
                  style={{
                    backgroundColor: "#22c55e",
                    color: "#ffffff",
                    padding: "12px 30px",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 4px 6px rgba(34, 197, 94, 0.25)",
                  }}
                >
                  Contact via WhatsApp
                </Button>
              </Column>
            </Row>
          </Section>
          <Section>
            <Text style={{ textAlign: "center", color: "#64748b", fontSize: "12px", margin: "20px 0" }}>
              © 2025 Company. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default Email

