import React from "react";
import fakeData from "../data"
import NotificationAlert from "react-notification-alert";

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



function Child() {
  const [children, setChildren] = React.useState(fakeData.children)


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
        

      <button type="button" class="btn btn-primary py-2" onClick={() => {
          setChildren([...children, {
            id: children.length,
            nombre: 'Nombre',
            apellido: 'Apellido',
            edad: 1,
            img: '/user.png'
          } ]);
        }} >Agregar

      </button>

      <hr />
      <Row>

        {children.map((child) => (
          <Col md="3">

            <Card key="child.id" className="card-child">
              <div className="card-image">
                <img alt="..." src={require("assets/img/background.jpg").default}></img>
              </div>

              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img alt="..." className="avatar border-gray" src={require("assets/img/faces" + child.img).default}
                    ></img>
                    <h5 className="title">{child.nombre} {child.apellido}</h5>
                  </a>
                  <p className="description">{child.edad} años</p>
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
                    onClick={() => setShowModal(true)}> <i className="fa fa-edit"></i>
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
              </div>
            </Card>

          </Col>
        ))}
      </Row>

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
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Nombre</label>
                  <Form.Control placeholder="Nombre" type="text" defaultValue="Juan"></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pl-1" md="6">
                <Form.Group>
                  <label>Apellido</label>
                  <Form.Control placeholder="Apellido" type="text" defaultValue="Suarez"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group>
                  <label>Address</label>
                  <Form.Control placeholder="Home Address" type="text"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Form.Group>
                  <label>Observaciones:</label>
                  <Form.Control cols="80" defaultValue="Alérgia al polvo y al pelo de perro" placeholder="Escriba una observación del menor" rows="4" as="textarea"></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Button className="btn-fill pull-right" variant="info" onClick={() => setShowModal(false)}> {/* type="submit" */}
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
            Back
          </Button>
          <Button
            className="btn-simple"
            type="button"
            variant="link"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </div>
      </Modal>
      {/* End Modal */}

    </Container>
    </>
  );
}

export default Child;
