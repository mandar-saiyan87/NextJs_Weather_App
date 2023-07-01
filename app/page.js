'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import WeatherDetails from '@components/weatherDetails';
import Loading from '@components/loding';

const Home = () => {

  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

  /* For location string by name*/
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_KEY}&units=metric`

  /* If searched by pin code */
  const url2 = `https://api.openweathermap.org/data/2.5/weather?zip=${location}&appid=${process.env.NEXT_PUBLIC_KEY}&units=metric`

  /* Function to fetch data from API */
  const getWeather = async (e) => {
    const isnum = /^\d+$/.test(location);
    e.preventDefault() // to prevent page reload
    setLoading(true)
    /* if pin code is entered there are few pin codes for which 
      url is working and for few it is generating wrong results
      Hence using url2 as well to search by pin codes
      Below code checks if location string has only number and
      try to get results from both urls.
    */
    if (!isnum) {
      const response = await fetch(url)
      const weatherData = await response.json()
      setWeather(weatherData)
      setLocation('')
    } else {
      const response = await fetch(url2)
      const weatherData = await response.json()
      console.log(weatherData)
      if (weatherData.cod === '404') {
        const response = await fetch(url)
        const weatherData = await response.json()
        console.log(weatherData)
        setWeather(weatherData)
        setLocation('')
      } else {
        setWeather(weatherData)
        setLocation('')
      }
    }
    setLoading(false)
  }

  return (
    <>

      {/* BG Image */}
      <Image src='https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80'
        fill={true}
        className='object-cover'
        alt='bg-image'
      />
      <div className='relative w-full flex flex-col items-center justify-center m-auto'>

        {/* Search Bar */}
        <div className='w-full max-w-[600px] px-7 flex items-center justify-center mt-8'>
          <div className='w-full flex items-center justify-between m-auto border-[1px] rounded-lg py-2 px-3 md:border-2'>
            <input type="text" className='w-4/5 bg-transparent border-none focus:outline-none text-white' placeholder='Enter Location' onChange={(e) => setLocation(e.target.value)} value={location} />
            <BsSearch color='white' className='cursor-pointer' onClick={getWeather} />
          </div>
        </div>

        {/* Weather Details */}

        {loading ? <Loading /> : <>
          {Object.keys(weather).length != 0 && <WeatherDetails weatherData={weather} />}
        </>}



      </div>




    </>
  )
}

export default Home;


