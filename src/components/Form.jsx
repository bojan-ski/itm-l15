import { useForm } from "react-hook-form"
import { validCities } from "../dataCityNames"
import fetchData from "../utils/fetchData"

const Form = () => {
  const getCurrentLocation = (location) =>{
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    // console.log(latitude, longitude);

    fetchData(latitude, longitude)
  }

  const forbiddenAddress = () =>{
    console.log('Forbidden Address');
  }

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getCurrentLocation, forbiddenAddress)
  }else{
    console.log('User has not provided location access');
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