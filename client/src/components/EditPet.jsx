import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import Button from './Button'
import axios from 'axios'

const EditPet = props => {
  const { _id } = useParams()
  const [petInfo, setPetInfo] = useState({})
  const [errors, setErrors] = useState({})
  const history = useHistory()
  const { name, type, description, skill1, skill2, skill3 } = petInfo

  // this gets the pet from the database
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${_id}`)
      .then(res => {
        console.log('EditPet: Response from GET', res.data.results)
        setPetInfo(res.data.results)
      })
      .catch(err => {
        console.log('EditPet: Error from GET', err)
      })
  }, [_id])

  // set up a change handler
  const handleChange = e => {
    setPetInfo({ ...petInfo, [e.target.name]: e.target.value })
  }

  // set up a submit handler
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/pets/${_id}/edit`, petInfo)
      .then(res => {
        console.log('EditPet: Response from PUT', res.data)
        if (res.data.error) {
          console.log('EditPet: Error from PUT', res.data.error)
          setErrors(res.data.error.errors)
        } else {
          setPetInfo(petInfo)
          setErrors({})
          setPetInfo({})
          history.push(`/`)
        }
      })
      .catch(err => {
        console.log('EditPet: Error from PUT', err)
      })
  }

  return (
    <>
      <div>
        <h1>
          Edit Pet: <span className='text-info h2'>{name}</span>
        </h1>
      </div>
      <form onSubmit={handleSubmit} className='text-start'>
        {/* Pet Name */}
        <div className='mb-3 text-start'>
          <label htmlFor='name'>Pet Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='pet name'
            value={name}
            onChange={handleChange}
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
            name='type'
            placeholder='pet type'
            value={type}
            onChange={handleChange}
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
            name='description'
            placeholder='pet description'
            value={description}
            onChange={handleChange}
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
            name='skill1'
            placeholder='pet skill 1'
            value={skill1}
            onChange={handleChange}
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
            name='skill2'
            placeholder='pet skill 2'
            value={skill2}
            onChange={handleChange}
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
            name='skill3'
            placeholder='pet skill 3'
            value={skill3}
            onChange={handleChange}
          />
          <p className='text-danger'>{errors.skill3?.message}</p>
        </div>

        <Button color='blue' text='Submit  Pet Edits' type='submit' />

        <Link className='m-2' to='/'>
          <Button color='grey' text='Cancel' />
        </Link>
      </form>
    </>
  )
}

export default EditPet
