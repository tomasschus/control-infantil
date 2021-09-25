import React from "react";
import ChartistGraph from "react-chartist";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import fakeData from "../data"

function Percentiles() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Percentiles de crecimiento del niño por PESO</Card.Title>
                <p className="card-category">Control del crecimiento del niño según su clasificación adecuada.</p>
              </Card.Header>
              <Card.Body>

                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "0", "3M", "6M", "9M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
                      series: [
                        [3.47, 6.26, 8.02, 9.24, 10.15, 12.7, 14.84, 16.9, 19.06, 21.4, 23.26, 25.64, 28.6, 32.22, 36.51, 41.38, 46.68, 52.15, 57.49, 62.27, 66.03, 68.19],
                        [null, null, null, null, null, null, null, null, null, null, null, 28.7, null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null, null, 23.1, null, null, null, null, null, null, null, null, null, null]
                      ]
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 80,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 10,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 680px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>Percentil NORMAL entre el 3 y el 97
                  <i className="fas fa-circle text-danger"></i>Por encima del rango
                  <i className="fas fa-circle text-warning"></i>Por debajo del rango
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <div class="col">
              <select class="custom-select  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Seleccione hijo</option>
                {
                  fakeData.children.map((child) => (
                    <option value="1">{child.nombre} </option>
                  ))
                }
              </select>
            </div>
            <Card className="card-stats">
              <Card.Header>
                <Card.Title as="h4">Estadísticas de crecimiento</Card.Title>
                <p className="card-category">Desde el último control</p>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="5">

                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Actualizar
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Percentiles de crecimiento del niño por ALTURA</Card.Title>
                <p className="card-category">Control del crecimiento del niño según su clasificación adecuada.</p>
              </Card.Header>
              <Card.Body>

                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "0", "3M", "6M", "9M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
                      series: [
                        [60.06, 60.44, 66.81, 71.1, 75.08, 86.68, 94.62, 102.11, 109.11, 115.4, 120.4, 126.18, 131.71, 136.53, 141.53, 146.23, 156.05, 160.92, 168.21, 171.4, 173.23, 174.1],
                        [null, null, null, null, null, null, null, null, null, null, null, 129.7, null, null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null, null, null, 121.1, null, null, null, null, null, null, null, null, null, null]
                      ]
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 180,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: true,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 10,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 680px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>Percentil NORMAL entre el 3 y el 97
                  <i className="fas fa-circle text-danger"></i>Por encima del rango
                  <i className="fas fa-circle text-warning"></i>Por debajo del rango
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Percentiles;
