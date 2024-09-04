// src/FeaturesSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ShieldLock, Bug, CloudCheckFill} from 'react-bootstrap-icons'; 
import "../css/FeatureSection.css";

const featuresData = [
  {
    icon: <ShieldLock size={48} className="text-primary mb-3" />,
    title: 'Advanced Threat Protection',
    description: 'Safeguard your digital assets with cutting-edge threat protection mechanisms designed to neutralize potential risks.',
  },
  {
    icon: <Bug size={48} className="text-primary mb-3" />,
    title: 'Vulnerability Assessment',
    description: 'Identify and remediate system vulnerabilities before they can be exploited by malicious actors.',
  },
  {
    icon: <CloudCheckFill size={48} className="text-primary mb-3" />,
    title: 'Secure Cloud Solutions',
    description: 'Ensure your cloud-based services are fortified against unauthorized access and data breaches.',
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <Col md={4} className="mb-4">
    <Card className="h-100 shadow-sm border-0 position-relative">
      <div className="position-absolute w-25 h-25 bg-light top-0 start-0" />
      <Card.Body className="position-relative">
        <div className="mb-3">{icon}</div>
        <Card.Title className="text-dark fw-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const FeaturesSection = () => {
  return (
    <Container className="py-5">
      <Row>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </Row>
    </Container>
  );
};

export default FeaturesSection;
