import React from "react";
import axios from "axios";
// react-bootstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import fakeData from "../data"
const url = process.env.REACT_APP_BACKEND_URL

function calcularEdad (fecha) {
  try{var cumpleanos = (fecha).split("-");
  var birthDate = new Date(cumpleanos[1]+'/'+cumpleanos[2]+'/'+cumpleanos[0]);
  var otherDate = new Date();
  
  var years = (otherDate.getFullYear() - birthDate.getFullYear());
  
  if (otherDate.getMonth() < birthDate.getMonth() || 
    otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
    years--;
  }
  
  if(years===0){
    return (otherDate.getMonth()-birthDate.getMonth()) + " meses";
  }
    return years + " años";
  }catch{
    return "años"
  }
}
  
var hasGetListadoChildrenfunction=false;
const getListadoChildrenfunction = (setChildren, dataCargada) => {
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token": sessionStorage.getItem("token")
    }
  }
  var body = {
    "email": sessionStorage.getItem("email")
  }
  axios.post(url + "api/children/find", body, header)
    .then((response) => {
      var x = (response["data"]["data"])
      dataCargada = true
      setChildren(x);
      hasGetListadoChildrenfunction = true
    })
    .catch(
      (error) => {
        alert(error);
      }
    )
}

function searchChild(childrenSelected, children, setChild){
  children.forEach(element => {
    if(element._id == childrenSelected){
      setChild(element)
    }
  });
}

var hasgetAllVacines = false;
const getAllVacines = (setAllVaccines) => {
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token": sessionStorage.getItem("token")
    }
  }
  
  axios.get(url + "api/vaccines", header)
    .then((response) => {
      hasgetAllVacines = true
      setAllVaccines(response.data.vaccine)      
    })
    .catch(
      (error) => {
        alert(error);
      }
    )
}

function aplicarVacuna(vacunaSelected,child,childId,positions,allVaccines,positionsState, setPositionsState){
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token": sessionStorage.getItem("token")
    }
  }

  var body = {
    "childId":child._id,
    "vaccineId":vacunaSelected
    }
  
  axios.put(url + "api/vaccines/child",body , header)
    .then((response) => {
      console.log(body)
      console.log(response.data.estado)
      if(response.data.estado){
        alert("Vacuna aplicada con éxito")
        llenarCalendario(childId,positions,allVaccines,positionsState, setPositionsState)
      }else{
        alert("Esta vacuna ya esta aplicada")
      }
    })
    .catch(
      (error) => {
        alert(error);
      }
    )
}

function llenarCalendario(childId,positions,allVaccines,positionsState, setPositionsState, ){
  console.log("llenando data de "+childId)
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token": sessionStorage.getItem("token")
    }
  }

  var body = {
    "childId":childId
  }
  
  axios.post(url + "api/vaccines/child",body , header)
    .then((response) => {
      var positionsCopy = positions.slice();
      response.data.data.forEach(vacXchild => {
        
        allVaccines.forEach(vacuna => {
          if(vacXchild.childId!=""&&vacXchild.vaccineId!=""){
            if(vacuna._id == vacXchild.vaccineId){
              positionsCopy[vacuna.x][vacuna.y] = vacuna.dosis 
              
            }
          }
        });
      });
      setPositionsState(positionsCopy)
    })
    .catch(
      (error) => {
        alert(error);
      }
    )
}

function VaccineCalendar() {
  const [children, setChildren] = React.useState([])
  const [child, setChild] = React.useState({})
  var childrenSelected;
  const [childrenSelected2, setchildrenSelected2] = React.useState()
  var dataCargada = false;
  const [hijoSeleccionado, setHijoSeleccionado] = React.useState(false)
  
  const [allVaccines, setAllVaccines] = React.useState([])

  if (!hasGetListadoChildrenfunction) {getListadoChildrenfunction(setChildren, dataCargada);}
  if(!hasgetAllVacines){ getAllVacines(setAllVaccines);}

  const [vacunaSelected, setVacunaSelected] = React.useState("")


  const [vacunasDisponibles, setVacunasDisponibles] = React.useState([])

  var header = ['','','','','','','','','','','','','','','','','']

  var positions =  [
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','',''],
  ]
  const [positionsState, setPositionsState] = React.useState(positions)

  // cargo header
  allVaccines.forEach(element => {
    header[element["y"]] = element.name
  });

  return (
    <>
      <Container fluid>
      <Row>
          <Col md="3">
            <div class="pt-4">
              <select onChange={(e) => {
                childrenSelected = e.target.value;
                searchChild(childrenSelected, children, setChild);
                setHijoSeleccionado(true);
                setchildrenSelected2(childrenSelected)
                var vacunasaux = []
                allVaccines.forEach(element => {
                  if(element.y!=0){ vacunasaux.push(element)}
                  else{positions[element["x"]][element["y"]] = element.dosis}
                 });
                setVacunasDisponibles(vacunasaux.slice())
                llenarCalendario(childrenSelected,positions,allVaccines,positionsState, setPositionsState)
                
              }}
                class="custom-select  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Seleccione hijo</option>
                {
                  children.map((child) => (
                    <option value={child._id}>{child.name} {child.surname}</option>
                  ))
                }
              </select>
            </div> <br/>
          </Col>
        </Row>
        <Row>
          {
          hijoSeleccionado ? (
            <>
              <Col md="3">

              <Card key="child._id" className="card-child">
              <div className="card-image">
                <img alt="..." src={require("assets/img/background.jpg").default}></img>
              </div>

              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {child.imageName!==null ?
                    (<img alt="..." className="avatar border-gray" src={child.imageName}></img>):
                    (child.gender=="Masculino" ?
                    (<img alt="..." className="avatar border-gray" src={require("assets/img/nino.png").default}></img>) :
                    (<img alt="..." className="avatar border-gray" src="https://memegenerator.net/img/images/300x300/11311151.jpg"></img>))}
                    
                    <h5 className="title">{child.name} {child.surname}</h5>
                  </a>
                  <p className="description">{calcularEdad(child.birthday)}</p>
                </div>
              </Card.Body>

                </Card>



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
              <Col md="3">
              <select onChange={(e) => {
                setVacunaSelected(e.target.value);
              }}
                class="custom-select  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>Aplicar vacuna</option>
                {
                  vacunasDisponibles.map((vacuna) => (
                    <option value={vacuna._id}>{vacuna.name + " | " + vacuna.dosis}</option>
                  ))
                }
              </select>
              <button onClick={(e) =>{
                
                  aplicarVacuna(vacunaSelected,child,childrenSelected2,positions,allVaccines,positionsState, setPositionsState, vacunasDisponibles, setVacunasDisponibles)                
                  allVaccines.forEach(element => {
                    if(element.y==0){positions[element["x"]][element["y"]] = element.dosis}
                   });
                }
                } className="btn btn-primary">Aplicar</button>
              </Col>
            </>
          ) : (<> </>)}




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
                      {header.map(( i, index) => (
                        <th className="border-0" width={index === 0 ? '15%' : '8%'}>{i}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {positionsState.map((pos, index) => (
                      <tr>
                        {pos.map((item,index2) => (
                          <td>
                            {item}   
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
