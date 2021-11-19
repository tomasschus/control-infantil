import React from "react";
import axios from "axios";

// react-bootstrap components
import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const url = process.env.REACT_APP_BACKEND_URL

var dataHistorial = false

const getListadoChildrenfunction = (setChildren, dataCargada) => {
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token":sessionStorage.getItem("token")
    }
  }
  var body = {
    "email":sessionStorage.getItem("email")
  }
  axios.post(url+"api/children/find", body , header)
  .then((response) => {
    var x = (response["data"]["data"])
    dataCargada = true
    setChildren(x);
  })
  .catch(
      (error) => { 
        alert(error);
      }
  )
}

function History() {
  const [children, setChildren] = React.useState([])
  const [controls, setControls] = React.useState([])

  var childrenSelected = "";
  var dataCargada = false;
  
  if(!dataCargada){
    getListadoChildrenfunction(setChildren, dataCargada);
  }

  function getControls(){
    var header = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token":sessionStorage.getItem("token")
      }
    }
    var body = {
      id:childrenSelected
    }
    axios.post(url+"api/controls/find", body , header)
    .then((response) => {
      const x = response["data"]["data"]
      dataHistorial=true
      setControls(x)
      if(x.length === 0){
        alert("Sin historial")
      }
    })
    .catch(
        (error) => { 
          alert(error);
        }
    )
  }

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
                <div class="pt-4">
                  <select onChange={ (e)=> { 
                     childrenSelected = e.target.value; getControls(); }} 
                  class="custom-select  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Seleccione hijo</option>
                    {
                      children.map( (child)=>(
                        <option value={child._id}>{child.name} </option>
                       ) )
                    }
                  </select>
                </div>

                {dataHistorial? (

                  <Card.Body className="table-full-width table-responsive px-0">
                    <p>Controles registrados:</p>
                    <Table className="table-hover">
                      <thead>
                        <tr>
                          <th className="border-0">Fecha</th>
                          <th className="border-0">Lugar</th>
                          <th className="border-0">Peso (kg)</th>
                          <th className="border-0">Diámetro <br/> Cabeza (cm)</th>
                          <th className="border-0">Altura (cm)</th>
                          <th className="border-0">Observaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {controls.map((item) => (
                          <tr>
                            <td>{item.date.split("T")[0]}</td>
                            <td>{item.place}</td>
                            <td>{item.weight}</td>
                            <td>
                              {item.diameter}
                            </td>
                            <td>
                              {item.height}
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
                
                ):(<></>)}
                
              <br/>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default History;
