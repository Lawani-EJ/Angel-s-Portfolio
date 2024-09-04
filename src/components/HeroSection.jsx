import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { IconCheck } from '@tabler/icons-react'; 

const HeroSection = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-4 fw-bold mb-4">
            Providing <span className="text-primary">Security</span> Solutions <br /> in Network Traffic.
          </h1>
          <p className="text-muted mb-4">
            As a Cyber Security Analyst, I am responsible for preventing theft, loss, or unauthorized access to your company’s hardware, software, and networks. I am capable of performing a variety of cybersecurity tasks for a company or an organization.
          </p>

          <ListGroup className="mb-4">
            <ListGroup.Item className="border-0 p-0 mb-3">
              <IconCheck className="me-2 text-primary" size={24} /> 
              <strong>Breach Prevention</strong> – Using the best resources available in the market, I stop breaches in an organization’s network.
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 mb-3">
              <IconCheck className="me-2 text-primary" size={24} /> 
              <strong>Incident Response</strong> – As a cybersecurity analyst, I work diligently to identify the breach’s cause and ensure it won’t happen again.
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">
              <IconCheck className="me-2 text-primary" size={24} /> 
              <strong>Compliance</strong> – I ensure your organization complies with government and industry security standards.
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={6} className="text-center">
          <img 
            src="https://media.licdn.com/dms/image/D4D12AQEn7iaT75cWSw/article-cover_image-shrink_600_2000/0/1662465946904?e=2147483647&v=beta&t=rB49pwFfArb1YzjQj74s-yLJ5o_adI8Ea8Iy2jGh2tg" 
            alt="Cybersecurity" 
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '450px', objectFit: 'cover' }} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
