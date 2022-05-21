import React, { useEffect, useState } from 'react'
import axious from 'axios'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaSort } from 'react-icons/fa'

const PetsList = props => {
  const [allPets, setAllPets] = useState([])

  // for the sorting
  const [toggleSort, setToggleSort] = useState({
    sort: false,
    sortBy: 'none'
  })

  // for the sorting
  const runToggleSort = () => {
    // console.log('running toggle sort')
    if (toggleSort.sort) {
      // console.log('toggle sort is true')
      if (toggleSort.sortBy === 'sortedAsc') {
        setToggleSort({ sortBy: 'sortedDesc' })
      }
    } else {
      // console.log('toggle sort is false')
      setToggleSort({ sort: true, sortBy: 'sortedAsc' })
    }
    // console.log(toggleSort.sortBy)
    // console.log(toggleSort.sort)
  }

  // getting all the pets
  useEffect(() => {
    axious
      .get(`http://localhost:8000/api/pets/${toggleSort.sortBy}`)
      .then(res => {
        console.log('ALL PETS: response from server: ', res)
        setAllPets(res.data.results)
      })
      .catch(err => {
        console.log('ALL PETS: error from server: ', err)
      })
  }, [props.newAuthorToggle, toggleSort])

  return (
    <>
      <div className='container'>
        <h3 className='text-start text-info'>
          These Pets are looking for a good home!
        </h3>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>
              Type
              <FaSort className='ms-2' onClick={runToggleSort} />
            </th>

            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* here is the line item set up for each author */}
          {allPets.map(pet => (
            <tr key={pet._id}>
              <th>{pet.name}</th>
              <td>{pet.type}</td>
              <td>
                <Link className='m-2' to={`/pets/${pet._id}`}>
                  <Button color='black' textColor='green' text='details' />
                </Link>
                <Link className='m-2' to={`/pets/${pet._id}/edit`}>
                  <Button color='black' textColor='blue' text='edit' />
                </Link>

                {/* <button
                  // onClick={deleteAuthor(author._id)}
                  onClick={e => {
                    deleteAuthor(author._id)
                  }}
                  className='btn btn-outline-danger'
                  text='Delete'
                >
                  Delete Author{' '}
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default PetsList
