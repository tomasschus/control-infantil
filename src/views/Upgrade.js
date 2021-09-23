import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import MedicamentoRecetado from "./MedicamentoRecetado";

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
} from "react-bootstrap";

function Upgrade() {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="11">
            <div>
              REGISTRO DE CONTROL PEDIATRICO
              Los usuarios podrán registrar un nuevo control pediátrico a cada niño de su perfil. Un control pediátrico registra para un niño: fecha, peso, altura, diámetro cabeza (se mide hasta el año), observaciones, medicamentos recetados (medicamento, dosis, periodo), estudios médicos a realizar y sus resultados.

            </div>
            <form>
              <div class="form-group">
                <label for="datepicker">Fecha</label>
                <DatePicker id="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div class="row">
                <div class="col">
                  <label type="text" for="exampleFormControlTextarea1">Peso en Kg</label>
                  <input type="number" id="typeNumber" class="form-control" />
                </div>
                <div class="col">
                 <label type="text" for="exampleFormControlTextarea1">Diametro de cabeza en cm</label>
                  <input type="number" id="typeNumber" class="form-control" />
                </div>
              </div> <br/>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Observaciones</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div> <hr/> 
              <br/>
              <MedicamentoRecetado/> <hr/>
              <MedicamentoRecetado/> <hr/>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
