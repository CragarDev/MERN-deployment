import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Nav = () => {
  return (
    <>
      <div>
        {/* <h1>Nav</h1> */}
        <Link className='m-2' to='/'>
          <Button color='black' text='Home' />
        </Link>
        <Link className='m-2' to='/pets/new'>
          <Button
            color='blue'
            textColor='white'
            text='Add a pet to the shelter'
          />
        </Link>
        {/* <Link className='m-2' to='/1'>
          <Button color='blue' textColor='white' text='Button 1' />
        </Link>
        <Link className='m-2' to='2'>
          <Button color='green' text='Button 2' />
        </Link>
        <Link className='m-2' to='3'>
          <Button color='purple' text='Button 3' />
        </Link> */}
      </div>
    </>
  )
}

export default Nav
