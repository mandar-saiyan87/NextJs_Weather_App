import React from 'react'
import Image from 'next/image'


const WeatherDetails = ({ weatherData }) => {

  const windSpeed = weatherData.wind.speed * 1.609

  return (
    <div className='w-full flex justify-center text-white px-5'>
      <div className='w-full max-w-[550px] bg-slate-600/70 px-5 py-7 mt-14 rounded-lg'>
        <div>Weather in {weatherData.name}</div>
        <div className='w-full flex flex-col item-center mt-5 sm:flex-row sm:gap-3'>
          <div className='flex items-center justify-center sm:w-[70%]'>
            <div className='flex flex-col items-center'>
              <Image src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} width={90} height={90} />
              <p>{weatherData.weather[0].main}</p>
            </div>

            <div className='flex'>
              <p className='text-[50px]'>{weatherData.main.temp.toFixed(0)}</p>
              <span className='text-[20px]'> °C</span>
            </div>
          </div>

          <div className='w-full mt-10 flex md:justify-center md:mt-0'>
            <div className='w-full flex flex-row justify-center gap-7 md:flex-col '>
              <div className='text-center'>
                <p className='text-red-400 font-medium tracking-wide text-sm md:text-base'>Feels Like</p>
                <p className='text-sm font-semibold md:text-base'>{weatherData.main.feels_like.toFixed(0)} °C</p>
              </div>
              <div className='text-center'>
                <p className='text-red-400 font-medium tracking-wide text-sm md:text-base'>Humidity</p>
                <p className='text-sm font-semibold md:text-base'>{weatherData.main.humidity}%</p>
              </div>
              <div className='text-center'>
                <p className='text-red-400 font-medium tracking-wide text-sm md:text-base'>Wind</p>
                <p className='text-sm font-semibold md:text-base'>{windSpeed.toFixed(0)} km/h</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default WeatherDetails;