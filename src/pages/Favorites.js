import React from 'react'
import Card from '../components/Card'

const Favorites = () => {
  let items = JSON.parse(localStorage.getItem('item')) || []
  return (
    <div className='favorites'>
    <div className='my__container'>
      <div className='favorites__wrapper'>
        {
          items.map(el => <Card key={el.id} item={el} />)
        }
      </div>
    </div>
  </div>
  )
}

export default Favorites