import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import fakeData from "../data"

function VaccineCalendar() {
  return (
    <>
      <Container fluid>
        <Row>

          <Col md="3">
          
          {fakeData.childrenSelected.map((child) => (
            <Card key="child.id" className="card-child-selected">
              <div className="card-image">
                <img alt="..." src={ require("assets/img/background.jpg") .default }></img>
              </div>

              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img alt="..." className="avatar border-gray" src={ require("assets/img/faces" + child.img) .default }
                    ></img>
                    <h5 className="title">{child.nombre} {child.apellido}</h5>
                  </a>
                  <p className="description">{child.edad} años</p>
                </div>
              </Card.Body>

            </Card>
          ))}

          </Col>

          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tu estado al día de HOY</Card.Title>
                <p className="card-category">
                  Todo lo que tenes que saber del control de tus vacunas aquí.
                </p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row>
                  <Col className="font-icon-list" lg="4" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="nc-icon nc-favourite-28"></i>
                      <p>Estado: {'OK' ? 'OK' : 'Demorado'}</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="4" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="nc-icon nc-zoom-split"></i>
                      <p>Pendiente/s: 1 dosis</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="4" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="nc-icon nc-notification-70"></i>
                      <p>Próxima/s: 2 dosis</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Calendario nacional de vacuación</Card.Title>
                <p className="card-category">
                Todas las vacunas del Calendario Nacional son obligatorias, gratuitas y se aplican en los vacunatorios, centros de salud y hospitales públicos del país.
                Nuestro calendario incluye vacunas para todas las etapas de la vida, situaciones especiales o para grupos específicos.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" border="1">
                  <thead>
                    <tr>
                      {fakeData.calendar.columns.map((col,index) => (
                        <th className="border-0" width={index === 0 ? '15%' : '8%'}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fakeData.calendar.positions.map((pos,index) => (
                      <tr>
                        {pos.map((item) => (
                          <td>
                            {item}
                            {item !== '' && 
                              <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  {item}
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="link"
                              >
                                <i className="fas fa-info-circle"></i>
                              </Button>
                            </OverlayTrigger>
                            }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VaccineCalendar;
