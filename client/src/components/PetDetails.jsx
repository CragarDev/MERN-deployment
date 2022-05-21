import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const PetDetails = () => {
  const { _id } = useParams()
  const [onePet, setOnePet] = useState({})

  const history = useHistory()

  const [adoptToggle, setAdoptToggle] = useState(false)

  const { name, type, description, skill1, skill2, skill3 } = onePet

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${_id}`)
      .then(res => {
        console.log('One Pet: Response', res.data.results)
        setOnePet(res.data.results)
      })
      .catch(err => console.log('One Pet: Error', err))
  }, [_id])

  const adoptPetNoConfirm = _id => {
    console.log('ADOPT PET NO CONFIRM: id', _id)
    axios
      .delete(`http://localhost:8000/api/pets/${_id}`)
      .then(res => {
        console.log('ADOPT PET NO CONFIRM: Response', res.data)
        setAdoptToggle(!adoptToggle)
        history.push('/')
      })
      .catch(err => console.log('ADOPT PET NO CONFIRM: Error', err))
  }
  return (
    <>
      <h5>
        Details about: <br />
        <span className='text-danger h1'>{name}</span>
      </h5>
      <h5>
        pet type:
        <br />
        <span className='text-warning h3'>{type}</span>
      </h5>
      <h5>
        pet description:
        <br />
        <span className='text-primary h3'>{description}</span>
      </h5>
      <h5>
        Skills:
        <br />
        <span className='text-info h3'> {skill1}</span>
        <br />
        <span className='text-info h3'> {skill2}</span>
        <br />
        <span className='text-info h3'> {skill3}</span>
      </h5>
      <p>
        <Link
          to={`/pets/${_id}/edit`}
          className='btn btn-outline-warning btn-sm m-3'
        >
          Update {name}
        </Link>

        <button
          onClick={e => {
            adoptPetNoConfirm(_id)
          }}
          className='btn btn-outline-danger btn-sm'
        >
          Adopt Pet {name}
        </button>
      </p>
    </>
  )
}

export default PetDetails
