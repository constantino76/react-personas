import { useEffect, useState } from 'react';
import { Person } from './Person';
import PersonList from './PersonList';
const Persona =()=>{
    const[arraypers,SetPersona]=useState([])
    const[newperson,InicializarPersona]=useState(new Person("","",""));
   const[showlista,setlista]=useState(false);

//funcion obtenemos cada valor digitado por el usuario, asi cargamos la variables, [nombre,edad, puesto]
const handleInput = (event) => {
  const { name, value } = event.target;
  InicializarPersona({...newperson,[name]: value });
};
const AgregarPerson=(event)=>{
event.preventDefault();

addPerson(newperson);
InicializarPersona(new Person("","",""))
    
    

}
const addPerson=(newperson)=>{
   



        const updateperson=[...arraypers,newperson]




SetPersona(updateperson);
}

const ListarPersonas=()=>{
  //negamos la condicion 
 setlista(!showlista);


}
return (
<div className='row'>

<form  className='form' onSubmit={AgregarPerson}>

<div className='mt-2  col-md-12'>

<input  id="nombre" type="text" name="nombre" value={newperson.nombre}onChange={handleInput} placeholder="Nombre"></input>
</div>
<div className='mt-2 col-md-12'>

<input id="edad"type="text" name="edad"value={newperson.edad}onChange={handleInput} placeholder="edad"></input>
</div>
<div  className='mt-2  col-md-12'>

<input  id="puesto" type="text" name="puesto" value={newperson.puesto}onChange={handleInput} placeholder="puesto"></input>
</div>
<div className='mt-2'>
<input  className='btn btn-success' id='btnregistro' type='submit'  value="Registrar"/>
</div>

</form>
  <button type='button'  className="btn-sm mt-2 btn btn-success "onClick={ListarPersonas}>{!showlista?("Listar personas"):("Ocultar lista")}</button>
  {arraypers.length>0 &&showlista && ( // Conditionally render the list based on showPersons state
        <PersonList personas={arraypers} />
      )}
</div>
)
// <PersonList personas={arraypers}/>

}
export default Persona;