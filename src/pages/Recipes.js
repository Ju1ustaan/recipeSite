import React from 'react'
import Card from '../components/Card'
import {  useSelector } from 'react-redux'

const Recipes = () => {
  const result = useSelector(state => state.list)

  return (
    <div className='recipes'>
      <div className='my__container'>
        <div className='recipes__header'>
        <h2 className='recipes__title'>Рецепты</h2>
        <input className='recipes__input' type='text' placeholder='Поиск'></input>
        </div>
        <div className='recipes__wrapper'>
          {
            result.map(el => <Card key={el.id} item={el} action={true}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Recipes