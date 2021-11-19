import React from "react";
import fakeData from "../data"
import NotificationAlert from "react-notification-alert";
import axios from "axios";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Modal,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

const url = process.env.REACT_APP_BACKEND_URL

function calcularEdad(fecha) {
  try{
    var hoy = new Date();
    var cumpleanos = (fecha).split("-");
    var edad = hoy.getFullYear() - parseInt(cumpleanos[0]);
    var m = hoy.getMonth() - parseInt(cumpleanos[1]);

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
  }catch{
    return ""
  }
}

function deleteChildren( child,setChildren ){
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token":sessionStorage.getItem("token")
    }
  }
  
  axios.delete(url+"api/children/"+child._id , header)
  .then((response) => {
    alert("Niño eliminado satisfactoriamente")
    console.log(response)
    getListadoChildren(setChildren)
  })
  .catch(
      (error) => { 
        alert(error);
      }
  )
}

function actualizarChildren(childrenToEdit, setChildrenToEdit, setChildren){
  console.log(childrenToEdit)
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token":sessionStorage.getItem("token")
    }
  }
  
  axios.put(url+"api/children", childrenToEdit , header)
  .then((response) => {
    alert("Datos actualizados")
    console.log(response)
    getListadoChildren(setChildren)
  })
  .catch(
      (error) => { 
        alert(error);
      }
  )
}

function createChildren(setChildren){
  var body = {
    email: sessionStorage.getItem("email"),
    name: "",
    surname: "",
    img: "",
    gender: "",
    birthday: "",
    bloodType: "",
    notes: ""
  }
  var header = {
    headers: {
      'Content-Type': 'application/json',
      "x-access-token":sessionStorage.getItem("token")
    }
  }
  axios.post(url+"api/children", body , header)
  .then((response) => {
    getListadoChildren(setChildren)
    alert("Se creo un nuevo niño, por favor edite los datos.")

  })
  .catch(
      (error) => { 
        alert("Ocurrio un error. Intente mas tarde.");
      }
  )
}

var dataCargada=false;
function getListadoChildren(setChildren){
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
    setChildren(x);
    dataCargada=true;
  })
  .catch(
      (error) => { 
        alert(error);
      }
  )
}

function Child() {
  const [children, setChildren] = React.useState([])
  if(!dataCargada){getListadoChildren(setChildren)}
  const [childrenToEdit, setChildrenToEdit] = React.useState({})

  const [showModal, setShowModal] = React.useState(false);
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Light Bootstrap Dashboard React</b> - a beautiful
            freebie for every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };

  return (
    <>
      <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
      
      <div class="d-flex justify-content-between align-items-center">
      <button type="button" className="btn btn-primary py-2"
      onClick={() => { createChildren(setChildren); }} 
      > Agregar </button>

      <button type="button" 
      className="btn btn-warning py-2 ml-auto" 
      onClick={() => { dataCargada=false; console.log(children); getListadoChildren(setChildren);}}
      > Actualizar</button>

      {!dataCargada?(
        <div class="spinner-border text-warning" role="status"
        >
         <span class="sr-only">Loading...</span>
       </div>
      
      ):(<></>)}
      </div>
      <hr />
      { children.length!==0? (
      <Row >
        {children.map((child) => (
          <Col md="3">

            <Card key="child._id" className="card-child">
              <div className="card-image">
                <img alt="..." src={require("assets/img/background.jpg").default}></img>
              </div>

              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {child.gender=="Masculino"? (<img alt="..." className="avatar border-gray" src={require("assets/img/nino.png").default}></img>):
                    (<img alt="..." className="avatar border-gray" src={require("assets/img/nina.png").default}></img>)}
                    
                    <h5 className="title">{child.name} {child.surname}</h5>
                  </a>
                  <p className="description">{calcularEdad(child.birthday)} años</p>
                </div>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                {/* Open modal - New control */}
                <OverlayTrigger overlay={
                  <Tooltip id="tooltip-488980961"> Nuevo control </Tooltip>
                }
                >
                  <Button className="btn-simple btn-icon" variant="link"
                    onClick={(e) => e.preventDefault()}> <i className="fa fa-file"></i>
                  </Button>
                </OverlayTrigger>

                {/* Open modal - History child */}
                <OverlayTrigger overlay={
                  <Tooltip id="tooltip-488980961"> Ver historial </Tooltip>
                }
                >
                  <Button className="btn-simple btn-icon" href="/control/create"
                    onClick={(e) => e.preventDefault()} variant="link"
                  > <i className="fa fa-history"></i>
                  </Button>
                </OverlayTrigger>

                {/* Open modal - Edit data */}
                <OverlayTrigger overlay={
                  <Tooltip id="tooltip-488980961"> Editar datos </Tooltip>
                }
                >
                  <Button className="btn-simple btn-icon" variant="link"
                    onClick={() => 
                    {setShowModal(true); 
                    setChildrenToEdit( child )
                    console.log(childrenToEdit);
                  }
                    }                    
                    > <i className="fa fa-edit"></i>
                  </Button>
                </OverlayTrigger>

                {/* Open modal - View stadistics */}
                <OverlayTrigger overlay={
                  <Tooltip id="tooltip-488980961"> Ver percentiles </Tooltip>
                }
                >
                  <Button className="btn-simple btn-icon" href="/control/charts"
                    onClick={(e) => e.preventDefault()} variant="link"
                  > <i className="nc-icon nc-chart-bar-32"></i>
                  </Button>
                </OverlayTrigger>

                {/* Open modal - Edit data */}
                <OverlayTrigger overlay={
                  <Tooltip id="tooltip-488980968"> Eliminar </Tooltip>
                }
                >
                <Button className="btn-simple btn-icon" variant="link"
                    onClick={() => 
                    {
                    deleteChildren( child, setChildren )
                    }
                    }                    
                    > <i className="fas fa-user-slash"></i>
                  </Button>
                </OverlayTrigger>
              </div>
            </Card>

          </Col>
        ))}
      </Row> ):(<>{getListadoChildren(setChildren)}</>)}

      {/* Mini Modal */}
      <Modal
        className="modal-primary"
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header className="justify-content-center">
          <Card.Title as="h4">Editar datos</Card.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Form>
            <Row>
              <Col className="pr-1" md="12">
                <Form.Group>
                  <label>Foto de perfil </label> <br/>
                  <input type="file" />
                </Form.Group>
              </Col>
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Nombre</label>
                  <Form.Control placeholder="Nombre"
                   onChange={ (e)=> { setChildrenToEdit({
                      ...childrenToEdit,
                      name: e.target.value
                    }) }} 
                  type="text" value={childrenToEdit.name}></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pl-1" md="6">
                <Form.Group>
                  <label>Apellido</label>
                  <Form.Control placeholder="Apellido" type="text" value={childrenToEdit.surname}
                  onChange={ (e)=> { setChildrenToEdit({
                    ...childrenToEdit,
                    surname: e.target.value
                  }) }} 
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="py-4" md="6">
                <Form.Group>
                  <label className="px-2">Sexo:</label> <br/>
                  <select class="custom-select form-select form-select-lg mb-3"
                  onChange={ (e)=> { setChildrenToEdit({
                    ...childrenToEdit,
                    gender: e.target.value
                  }); }} 
                   value={childrenToEdit.gender} aria-label=".form-select-lg example">
                    <option selected>Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                </Form.Group>
              </Col>
              <Col className="py-4" md="6">
                <Form.Group>
                  <label className="px-2">Fecha de nacimiento:</label>
                  <input type="date" 
                  onChange={ (e)=> { setChildrenToEdit({
                    ...childrenToEdit,
                    birthday: e.target.value
                  }) }} 
                  value={childrenToEdit.birthday} ></input>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group>
                  <label>Grupo Sanguineo</label>
                  <Form.Control placeholder="Grupo Sanguineo" type="text"
                  onChange={ (e)=> { setChildrenToEdit({
                    ...childrenToEdit,
                    bloodType: e.target.value
                  }) }} 
                   value={childrenToEdit.bloodType}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group>
                  <label>Observaciones:</label>
                  <Form.Control cols="80" value={childrenToEdit.notes} 
                  onChange={ (e)=> { setChildrenToEdit({
                    ...childrenToEdit,
                    notes: e.target.value
                  }) }} 
                  placeholder="Escriba una observación del menor" rows="4" as="textarea"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button className="btn-fill pull-right" variant="info" onClick={() =>{
              actualizarChildren(childrenToEdit,setChildrenToEdit,setChildren); setShowModal(false); }}> {/* type="submit" */}
              Actualizar 
            </Button>
            <div className="clearfix"></div>
          </Form>
        </Modal.Body>
        <div className="modal-footer">
          <Button
            className="btn-simple"
            type="button"
            variant="link"
            onClick={() => setShowModal(false)}
          >
            Atras
          </Button>
          <Button
            className="btn-simple"
            type="button"
            variant="link"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </Button>
        </div>
      </Modal>
      {/* End Modal */}

    </Container>
    </>
  );
}

export default Child;
