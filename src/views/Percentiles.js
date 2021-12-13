import React from "react";
import axios from "axios";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const url = process.env.REACT_APP_BACKEND_URL

const rangoEdad = ["0M", "3M", "6M", "9M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"]

//Percentil niño
const percentilAlturaNiña = [50.06, 60.44, 66.81, 71.1, 75.08, 86.68, 94.62, 102.11, 109.11, 115.4, 120.4, 126.18, 131.71, 136.53, 141.53, 146.23, 156.05, 160.92, 168.21, 171.4, 173.23, 174.1]
const percentilPesoNiña = [3.47, 6.26, 8.02, 9.24, 10.15, 12.7, 14.84, 16.9, 19.06, 21.4, 23.26, 25.64, 28.6, 32.22, 36.51, 41.38, 46.68, 52.15, 57.49, 62.27, 66.03, 68.19]

//Percentil niña
const percentilAlturaNiño = [49.34, 59.18, 65.33, 59.52, 73.55, 85.4, 93.93, 101.33, 108.07, 114.41, 120.54, 126.52, 132.40, 138.11, 142.98, 149.03, 154.14, 157.88, 160.01, 160.68, 160.72, 160.78]
const percentilPesoNiño = [3.34, 5.79, 7.44, 8.03, 9.60, 12.15, 14.10, 15.15, 17.55, 20.14, 23.27, 26.80, 30.62, 34.61, 38.65, 42.63, 46.43, 49.92, 53, 55.54, 57.43, 58.55]

var seriesAltura = []
var seriesPeso = []

function calcularEdad(fecha) {
  try{
    var hoy = new Date();
    var cumpleanos = (fecha).split("-");
    var edad = hoy.getFullYear() - parseInt(cumpleanos[0]);
    // Si no ha llegado su cumpleaños le restamos el año por cumplir
    if (cumpleanos[0] > (hoy.getMonth()) || cumpleanos[2] > hoy.getDay()){edad--}
    if(edad === 0){
      return (hoy.getMonth() - parseInt(cumpleanos[1])) + "M";
    }else {
      return edad;
    }
  }catch{
    return ""
  }
}

function getListadoChildren(setChildren, dataCargada){
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
    setChildren(x)
    dataCargada = true;
  })
  .catch(
      (error) => { 
        alert(error);
      }
  )
}

var childrenSelected = "";
var ultimoControlLoaded = false

function Percentiles() {

  const [children, setChildren] = React.useState([])
  const [control, setControl] = React.useState([])

  const [peso, setPeso] = React.useState({})
  const [altura, setAltura] = React.useState({})

  if(childrenSelected.gender === 'Femenino'){
    seriesAltura = percentilAlturaNiña
    seriesPeso = percentilPesoNiña
  }else{
    seriesAltura = percentilAlturaNiño
    seriesPeso = percentilPesoNiño
  }
  
  var posicionAltura = [seriesAltura.length]
  var posicionPeso = [seriesPeso.length]

  function fillSerie(){
    var serie = [seriesAltura.length]
    for (let i = 0; i <= seriesAltura.length-1; i++){
      serie[i] = null
    }
    return serie
  }
  function getControls(setControl,setPeso,setAltura){
    var header = {
      headers: {
        'Content-Type': 'application/json',
        "x-access-token": sessionStorage.getItem("token")
      }
    }
    var body = {
      id:childrenSelected._id
    }
    axios.post(url+"api/controls/find", body , header)
    .then((response) => {
      var x = (response["data"]["data"])
      setControl(x)

      if (x.length === 0) { alert('Historial sin cargar'); return;}
      
      ultimoControlLoaded = true

      const altura = x[x.length-1].height;
      const peso = x[x.length-1].weight;

      posicionAltura = fillSerie()
      posicionPeso = fillSerie()

      const edad = calcularEdad(childrenSelected.birthday)

      var edadChild;
      for (let i = 0; i <= rangoEdad.length-1; i++){
        var rango = parseInt(rangoEdad[i])
        if(rango === 0){
          var mes = parseInt(rangoEdad[i].replace('M',''))
          if(mes >= 0 && mes <= 3){
            edadChild = 0
          }else if(mes > 4 && mes <= 6){
            edadChild = 3
          }else if(mes > 5 && mes <= 9){
            edadChild = 6
          }
        }else{
          if(parseInt(rangoEdad[i]) >= edad && edad < parseInt(rangoEdad[i+1])){
            edadChild = parseInt(rangoEdad[i])
            break;
          }
        }
      }

      var rango = parseInt(edadChild)
      if(rango === undefined){//meses
        const mes = parseInt(edadChild.replace('M',''))//rangoEdad[i]
        if(mes >= 0 && mes <= 3){
          posicionAltura[0]=altura
          posicionPeso[0]=peso
        }else if(mes > 4 && mes <= 6){
          posicionAltura[1]=altura
          posicionPeso[1]=peso
        }else if(mes > 5 && mes <= 9){
          posicionAltura[2]=altura
          posicionPeso[2]=peso
        }
      }else{
        posicionAltura[rango+3]=altura
        posicionPeso[rango+3]=peso

        setAltura({...setAltura, data: {
          labels: ["0", "3M", "6M", "9M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
          series: [seriesAltura, posicionAltura]
        }})

        setPeso({...setPeso, data: {
          labels: ["0", "3M", "6M", "9M", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
          series: [seriesPeso, posicionPeso]
        }})
      }

    })
    .catch(
        (error) => { 
          alert(error);
        }
    )
  }

  var dataCargada = false

  if(!dataCargada){
    getListadoChildren(setChildren, dataCargada);
  }

  return (
    <>
      <Container fluid>
        <Row>

          {peso.data !== []? (
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Percentiles de crecimiento de{childrenSelected.gender === 'Femenino' ? ' la niña' : 'l niño'} por PESO</Card.Title>
                <p className="card-category">Control del crecimiento del menor según su clasificación adecuada.</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={peso.data}
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
                  <i className="fas fa-circle text-danger"></i>Por fuera del rango
                </div>
                <hr></hr>
              
              </Card.Footer>
            </Card>
          </Col> ):(<>{ }</>)}

          <Col md="4">
            <div className="col">
              <select onChange={ (e)=> { childrenSelected = children[e.target.value]
                     getControls(setControl,setPeso,setAltura); }}
                     className="custom-select  form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option defaultValue>Seleccione hijo</option>
                {
                  children.map( (child, index)=>(
                    <option key={index} value={index}>{child.name} </option>
                    ) )
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

      {altura.data !== []? (
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Percentiles de crecimiento de{childrenSelected.gender === 'Femenino' ? ' la niña' : 'l niño'} por ALTURA</Card.Title>
                <p className="card-category">Control del crecimiento del menor según su clasificación adecuada.</p>
              </Card.Header>
              <Card.Body>

                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={altura.data}
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
                  <i className="fas fa-circle text-danger"></i>Por fuera del rango
                </div>
                <hr></hr>
                
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container> ):null}
    </>
  );
}

export default Percentiles;
