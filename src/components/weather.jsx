
import image from "../assests/images/icon3.png"
import axios from "axios"
import { useState } from "react"
import { FaSearch } from "react-icons/fa";


function Weather() {

  const [city, setcity] = useState("City")
  const [weather, setwether] = useState("Weather")
  const [temperature, settemprature] = useState("Tempreature")
  const [deg, setdeg] = useState("Description")


  const getdata = (event) => {
    setcity(event.target.value)
  }
  const getweather = () => {
    const wetherapp = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ac57e5b54cc85144b06669d5a0e55fc`)
    wetherapp.then(function (success) {
      console.log(success.data)
      setwether(success.data.weather[0].main)
      setdeg(success.data.weather[0].description)
      settemprature(success.data.main.temp)

    }).catch(function (error) {
      alert("Enter your correct city name", error)
    })


  }

  return (
    <>
      <div className='backdrop-blur bg-blue/60 ... brightness-150 gap-10  w-auto p-8 h-auto border   border-white mt-16  flex-col flex justify-center items-center sm:'>

        <div className="sm:flex flex-nowrap" >
          <input type="text" placeholder='enter city' className=' border  p-1 gap-2    rounded-2xl outline-none  ' onChange={getdata} />
          <button className=' border-black bg-black text-white p-2 ml-1 rounded-2xl hover:bg-green-700' onClick={getweather}> <FaSearch /></button>
        </div>
        <div className="font-bold  gap-6 flex flex-col items-center  leading-10 text-black">
          <p className="font-bold text-2xl mt-4 ">{city}</p>
          <h1 className="">{deg}</h1>
          <img src={image} alt="" className="w-44 animate-pulse " />
          <h1>{weather}</h1>
          <h1 >{temperature}</h1>






        </div>



      </div>
    </>

  )
}

export default Weather
