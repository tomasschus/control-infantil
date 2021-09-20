import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import fakeData from "../data"

function History() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Historial de consultas médicas</Card.Title>
                <p className="card-category">
                  Toda la información pertinente de los turnos a los que asistió al menor acompañado por el tutor reponsable.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Fecha</th>
                      <th className="border-0">Lugar</th>
                      <th className="border-0">Vacunas</th>
                      <th className="border-0">Notas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fakeData.history.map((item,index) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.date}</td>
                        <td>{item.site}</td>
                        <td>

                          {item.vaccines !== 0 && 
                              <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  COD.111 - EDAS
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="link"
                              >
                                <i className="nc-icon nc-favourite-28"></i>
                              </Button>
                            </OverlayTrigger>
                          }
                        </td>
                        <td>
                          {item.notes !== 0 && 
                              <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  {item.notes}
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

export default History;
