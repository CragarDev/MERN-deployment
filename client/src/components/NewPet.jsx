import React, { useState } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
import Button from './Button'

const NewPet = props => {
  // create the state variables
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [skill1, setSkill1] = useState('')
  const [skill2, setSkill2] = useState('')
  const [skill3, setSkill3] = useState('')
  const [errors, setErrors] = useState({})

  // create the history object
  const history = useHistory()

  // create the handleSubmit function
  const handleSubmit = e => {
    e.preventDefault()
    console.log('handleSubmit', name, type, description, skill1, skill2, skill3)

    // create the pet object
    const pet = {
      name,
      type,
      description,
      skill1,
      skill2,
      skill3
    }

    // use axios to post the pet object
    axios
      .post('http://Localhost:8000/api/pets/new', pet)
      .then(res => {
        console.log('New Pet Form: Response after posting the form', res.data)

        if (res.data.error) {
          console.log('New Pet Form: Error', res.data.error)
          setErrors(res.data.error.errors)
        } else {
          // clear the form
          setName('')
          setType('')
          setDescription('')
          setSkill1('')
          setSkill2('')
          setSkill3('')
          setErrors({})
          props.setNewPetToggle(!props.newPetToggle)
          history.push(`/`)
        }
      })
      .catch(err => {
        console.log('New Pet Form: Error', err)
      })
    console.log('New Pet Submitted')
  }

  return (
    <>
      <div>
        <h1>Know about a pet needing a home?</h1>
      </div>
      <form onSubmit={handleSubmit} className='text-start'>
        {/* Pet Name */}
        <div className='mb-3 text-start'>
          <label htmlFor='name'>Pet Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='pet name'
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.name?.message}</p>
        </div>
        {/* Pet Type */}
        <div className='mb-3 text-start'>
          <label htmlFor='type'>Pet Type</label>
          <input
            type='text'
            className='form-control'
            id='type'
            placeholder='pet type'
            value={type}
            onChange={e => {
              setType(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.type?.message}</p>
        </div>
        {/* Pet Description */}
        <div className='mb-3 text-start'>
          <label htmlFor='description'>Pet Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='pet description'
            value={description}
            onChange={e => {
              setDescription(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.description?.message}</p>
        </div>
        <h5>Skills (optional)</h5>
        {/* Skill 1 */}
        <div className='mb-3 text-start'>
          <label htmlFor='skill1'>Skill 1</label>
          <input
            type='text'
            className='form-control'
            id='skill1'
            placeholder='pet skill 1'
            value={skill1}
            onChange={e => {
              setSkill1(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.skill1?.message}</p>
        </div>
        {/* Skill 2 */}
        <div className='mb-3 text-start'>
          <label htmlFor='skill2'>Skill 2</label>
          <input
            type='text'
            className='form-control'
            id='skill2'
            placeholder='pet skill 2'
            value={skill2}
            onChange={e => {
              setSkill2(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.skill2?.message}</p>
        </div>
        {/* Skill 3 */}
        <div className='mb-3 text-start'>
          <label htmlFor='skill3'>Skill 3</label>
          <input
            type='text'
            className='form-control'
            id='skill3'
            placeholder='pet skill 3'
            value={skill3}
            onChange={e => {
              setSkill3(e.target.value)
            }}
          />
          <p className='text-danger'>{errors.skill3?.message}</p>
        </div>

        <Button color='blue' text='Add Pet' type='submit' />

        <Link className='m-2' to='/'>
          <Button color='grey' text='Cancel' />
        </Link>
      </form>
    </>
  )
}

export default NewPet
