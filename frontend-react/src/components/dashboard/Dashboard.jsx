import React, { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
  // const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    const fetchProtectedData = async () => {
      
      try{
        const response = await axiosInstance.get('/protected-view', {

        })
      }catch(error){
        console.error('Error fetching data:', error)
      }
    }
      fetchProtectedData();
  },[])
  
  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard