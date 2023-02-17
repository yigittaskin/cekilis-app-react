import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='d-flex align-items-center' style={{ height: '85vh' }}>
      <Link className='btn btn-info w-50 h-50 d-flex align-items-center justify-content-center' to="/kisiselcekilis"><h1>ÇEKİLİŞ YAP!</h1></Link>
      <Link className='btn btn-danger w-50 h-50 d-flex align-items-center justify-content-center' to="/genelcekilis"><h1>GENEL ÇEKİLİŞE KATIL!</h1></Link>
    </div>
  )
}

export default Home
