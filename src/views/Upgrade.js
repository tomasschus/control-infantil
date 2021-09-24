import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


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
  const [MedicamentosRecetados, setMedicamentosRecetados] = useState([])

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="11">
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
              </div> <br />
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Observaciones</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div> <hr />
              <br />
              <button class="btn btn-primary py-2" onClick={(e) => { e.preventDefault(); setMedicamentosRecetados([...MedicamentosRecetados, { "id": MedicamentosRecetados.length, "nombreMedicamento": "", "dosis": "", "periodo": "", "receta": "" }]) }} > agregar medicamento </button>
              {MedicamentosRecetados.map((MedicamentoRecetado) => (
                <div class="border border-dark px-2">
                  <h3 class="text-center"> Receta {MedicamentoRecetado.id+1}</h3>
                  <div class="row py-4 " id={MedicamentoRecetado.id}>
                    <div class="col">
                      <label type="text" for="exampleFormControlTextarea1">Nombre medicamento</label>
                      <input type="text" id={ `name-medicamento-${MedicamentoRecetado.id}` }  class="form-control" />
                    </div>
                    <div class="col">
                      <label type="text" for="exampleFormControlTextarea1">Dosis en gs</label>
                      <input type="number" id={ `dosis-${MedicamentoRecetado.id}` } class="form-control" />
                    </div>
                    <div class="col">
                      <label type="text" for="exampleFormControlTextarea1">Período</label>
                      <input type="text" id={ `periodo-${MedicamentoRecetado.id}` } class="form-control" />
                    </div>
                  </div>
                  <div class="form-group"> 
                    <label for="exampleFormControlFile1">Receta</label>
                    <input type="file" class="form-control-file" id={ `file-${MedicamentoRecetado.id}` } />
                  </div>
                  <hr class="py-2"/> <br/>
                </div>))}
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
