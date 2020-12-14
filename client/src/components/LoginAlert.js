import React,{useEffect, useState} from 'react';
import Alert from 'reactstrap/lib/Alert';

const LoginAlert=(prosp)=>{
    const [show, setShow] = useState(true)

    // On componentDidMount set the timer
    useEffect(() => {
      const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
      }, 3000)
  
      return () => {
        clearTimeout(timeId)
      }
    }, [])

   return ( 
       <>
        {show ? 
         ( <div>
      <Alert className="text-center" color="success">{prosp.header}</Alert>
          </div>):null }
   
    </>
   )
}

export default LoginAlert;