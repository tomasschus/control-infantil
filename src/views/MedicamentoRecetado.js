import React from 'react'

const MedicamentoRecetado = () => {
    return (
        <>
            <div class="row">
                <div class="col">
                    <label type="text" for="exampleFormControlTextarea1">Nombre medicamento</label>
                    <input type="text" id="name-medicamento" class="form-control" />
                </div>
                <div class="col">
                    <label type="text" for="exampleFormControlTextarea1">Dosis en gs</label>
                    <input type="number" id="dosis" class="form-control" />
                </div>
                <div class="col">
                    <label type="text" for="exampleFormControlTextarea1">Período</label>
                    <input type="text" id="periodo" class="form-control" />
                </div>
            </div>
            <div class="form-group"> <br/>
                <label for="exampleFormControlFile1">Receta</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
        </>
    )
}

export default MedicamentoRecetado
