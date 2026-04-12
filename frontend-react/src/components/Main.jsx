import React from 'react'
import Button from './Button'

const Main = () => {
  return (
<>
  
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light'>This stock prediction application uses machine learning technologies like Keras, TensorFlow, and LSTM to analyze stock data and predict future prices. It focuses on key indicators such as 100-day and 200-day moving averages to help users make better investment decisions.</p>
            <Button text='Login' class="btn-outline-info" />
        </div>
    

    </div>
   
</> 
  )
}

export default Main