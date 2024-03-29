import { useForm } from "react-hook-form"
import { validCities } from "../dataCityNames"

const Form = () => {
  const getCurrentLocation = (location) =>{
    console.log(location);
  }

  const forbiddenAddress = () =>{
    console.log('Forbidden Address');
  }

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getCurrentLocation, forbiddenAddress)
  }else{
    console.log('sipak');
  }


  const { register, handleSubmit, formState: {errors} } = useForm()

  const isValidCityName = (cityName) => {
    // console.log(cityName);
    validCities.includes(cityName)
  }

  const onFormSubmit = (data) => {
    console.log(data);    
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      
      <input type="text" {...register('cityName', {validate: isValidCityName})} placeholder="Please enter city name"/>
    </form>
  )
}

export default Form