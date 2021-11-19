import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import fakeData from "../data"
import axios from "axios";
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

const url = process.env.REACT_APP_BACKEND_URL

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
    dataCargada=true
  })
  .catch(
      (error) => { 
        alert(error);
      }
  )
}



function prepararChildren(newControl,setNewControl,children, MedicamentosRecetados){
  if(newControl.nameChild!=null){for( var i in children ) {
    if(children[i].name+" "+children[i].surname === newControl.nameChild){
      setNewControl({...newControl, childId:children[i]._id, prescription:MedicamentosRecetados})
    }
  }}
}
var dataCargada = false

function Upgrade() {
  const [children, setChildren] = React.useState([])
  if(!dataCargada){getListadoChildren(setChildren)}
  const [newControl, setNewControl] = React.useState({})
  const [startDate, setStartDate] = useState(new Date());
  const [MedicamentosRecetados, setMedicamentosRecetados] = useState([])

  const updateFieldChanged = (event, name, index) => {
    var newArr = [...MedicamentosRecetados]
    console.log("function:")
    console.log(newArr)
    newArr[index] = { ...newArr[index], [name]: event.target.value };
    
    setMedicamentosRecetados( newArr);
  };

 

  function guardar(e){
    e.preventDefault()
    
    if(
      newControl.date!=null&&
      newControl.place!=null&&
      newControl.weight!=null&&
      newControl.height!=null&&
      newControl.diameter!=null&&
      newControl.notes!=null&&
      newControl.childId!=null    
    ){
      newControl.prescription = MedicamentosRecetados

     // falta guardar en BD datos
      var header = {
        headers: {
          'Content-Type': 'application/json',
          "x-access-token":sessionStorage.getItem("token")
        }
      } 
      axios.post(url+"api/controls", newControl , header)
      .then((response) => {
        alert("Control guardado")
      })
      .catch(
          (error) => { 
            alert(error);
          }
      )
        console.log(newControl)
      }
    else{
      alert("debes completar los campos requeridos")
    }
    
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="11">
            <form>
              <div className="d-flex">
                 <button 
                 className="btn btn-success m-auto"
                 onClick={(e)=>{
                   prepararChildren(newControl,setNewControl,children,MedicamentosRecetados);
                   guardar(e);
                   }}> Guardar </button>
              </div>
              <hr/> 
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="datepicker">Fecha</label>
                    <input type="date" 
                  onChange={ (e)=> { setNewControl({
                    ...newControl,
                    date: e.target.value
                  }) }} 
                  ></input>
                  </div>
                </div>
                <div class="col">
                  <select class="form-select form-select-lg mb-3" 
                   onChange={ (e)=> { 
                     setNewControl({
                    ...newControl,
                    childId: e.target.value
                  }) }} 
                   aria-label=".form-select-lg example">
                    <option selected>Seleccione hijo</option>
                    {
                      children.map( (child)=>(
                        <option value={child._id}>{child.name +" "+ child.surname} </option>
                       ) )
                    }
                  </select>
                </div>
              </div> <br />
              <div class="row">
                <div class="col">
                  <label type="text" for="exampleFormControlTextarea1">Hospital</label>
                  <input type="text" id="typeNumber" class="form-control" 
                  onChange={ (e)=> { 
                    setNewControl({
                   ...newControl,
                   place: e.target.value
                 }) }} />
                </div>
              </div> <br/>
              <div class="row">
                <div class="col">
                  <input type="number" id="typeNumber" placeholder="Peso (kg)" class="form-control" 
                  onChange={ (e)=> { 
                    setNewControl({
                   ...newControl,
                   weight: e.target.value
                 }) }} />
                </div>
                <div class="col">
                  <input type="number"  id="typeNumber" placeholder="Diametro cabeza (cm)" class="form-control" 
                  onChange={ (e)=> { 
                    setNewControl({
                   ...newControl,
                   diameter: e.target.value
                 }) }} />
                </div>
                <div class="col">
                  <input type="number" id="typeNumber" placeholder="Altura (cm)" class="form-control" 
                  onChange={ (e)=> { 
                    setNewControl({
                   ...newControl,
                   height: e.target.value
                 }) }} />
                </div>
              </div> <br/>
              
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Observaciones</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                onChange={ (e)=> { 
                  setNewControl({
                 ...newControl,
                 notes: e.target.value
               }) }} ></textarea>
              </div> <hr />
              <br />
              <button class="btn btn-primary py-2" onClick={(e) => { e.preventDefault(); setMedicamentosRecetados([...MedicamentosRecetados, { "id": MedicamentosRecetados.length, name: "", dosis: "", periodo: "", receta: "" }]) }} > Agregar receta </button>
              {MedicamentosRecetados.map((MedicamentoRecetado,index) => (
                <div class="border border-dark px-2">
                  <h3 class="text-center"> Receta {MedicamentoRecetado.id + 1}</h3>
                  <div class="row py-4 " id={MedicamentoRecetado.id}>
                    <div class="col">
                      <label type="text" for="exampleFormControlTextarea1">Nombre medicamento</label>
                      <input type="text" onChange={ (e) => {
                        updateFieldChanged(e,"name",MedicamentoRecetado.id)
                      }} id={`name-${MedicamentoRecetado.id}`} class="form-control" 
                      />
                    </div>
                    <div class="col">
                      <label type="text" for="exampleFormControlTextarea1">Dosis en gs</label>
                      <input type="number" onChange={ (e) => {
                        updateFieldChanged(e,"dosis",MedicamentoRecetado.id) }} id={`dosis-${MedicamentoRecetado.id}`} class="form-control" />
                    </div>
                    <div class="col">
                      <label type="text" for="exampleFormControlTextarea1">Período</label>
                      <input type="text" onChange={ (e) => {
                        updateFieldChanged(e,"periodo",MedicamentoRecetado.id) }} id={`periodo-${MedicamentoRecetado.id}`} class="form-control" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlFile1">Receta</label>
                    <input type="file" class="form-control-file" id={`file-${MedicamentoRecetado.id}`} />
                  </div>
                  <hr class="py-2" /> <br />
                </div>))}
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
