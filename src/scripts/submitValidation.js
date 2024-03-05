import {valuesForm} from './formValidation';


export const submitValidation =async (formValues) =>{
  if(formValues.name !== "" && formValues.email !== "" && formValues.tel !== "" && formValues.message !== ""){
    let response = await fetch('http://localhost:9090/api/registration', {
      method: 'POST',
      body: JSON.stringify(valuesForm)
    });
    if( response.ok){
     let json = await response.json();
     alert(json.message);
     window.location.reload()
   }else {
     alert('Error HTTP' + response.status)
   }
  }else {
    alert("Please fill a form");
  }
}
