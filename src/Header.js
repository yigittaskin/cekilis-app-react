import React from 'react'
import { auth } from './firebase';

const Header = (props) => {
  return (
    <div>
      <header className='d-flex text-center align-items-center justify-content-around'>
        <img className="img-fluid rounded-circle" src={`${props.userPhotoURL}`} width="60px" alt="You should use chrome" />
        <div className='text-center ml-1 mr-1'>
          <span className='rounded' style={{ backgroundColor: 'white', color: 'red', padding: '5px' }}>Çekilişe Hoşgeldin!</span>
          <span className='rounded' style={{ backgroundColor: '#2e9599', color: 'white', padding: '5px', marginLeft: '5px' }}>{props.username} ({props.usermail})</span>
        </div>
        <a id='cikisYap' href='/' style={{ backgroundColor: '#031a3d' }} className='btn btn-sm text-white' onClick={() => auth.signOut()}>Çıkış Yap</a>
      </header>
      <hr />
    </div>
  )
}

export default Header
