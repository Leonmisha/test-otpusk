
import React, { useEffect, useState } from 'react'
import s from './Main.module.css'
import { useSelector } from 'react-redux'
import Header from './Header';
import { getFlights } from '../../utils/sdk';
import Card from './Card';
import { Form } from 'react-bootstrap';

const Main = () => {
  const token = useSelector( state => state.token)
  const email = useSelector( state => state.email)
  const [flights, setFlights] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [search, setSearch] = useState('')

  let filteredFlights = flights.filter( flight => {
    if (!search) {
      return flight
    }
    let cond1 = flight.company.name.indexOf(search) !== -1
    let cond2 = flight.company.alternativeNames.some( n => n.indexOf(search) !== -1)
    return (cond1 || cond2)
  })

  useEffect( () => {
    getFlights(token).then(response => response.json())
      .then(data => {
        let flights = []
        for (let id in data.data) {
          flights.push({id, ...data.data[id]})
        }
        flights = flights.sort( (a, b) => {
          return new Date(a.date) - new Date(b.date)
        })
        setFlights(flights)
        setIsLoaded(true)
      })
  }, [token])

  function handleChangeSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div className={s.Main}>
      <Header email={email}/>
      <Form.Group controlId="search" className={s.search}>
          <Form.Label>Поиск</Form.Label>
          <Form.Control type="search" placeholder="Введите название компании" value={search} onChange={handleChangeSearch}/>
      </Form.Group>
      { isLoaded &&
        <div className={s.cardsContainer}>
          <div className={s.cards}>
            {
              filteredFlights.map( flight => {
                return  (
                  <Card companyName={flight.company.name} date={flight.date} key={flight.id}/>
                )
              })
            }
          </div>
        </div>
      }
    </div>
)}

export default Main