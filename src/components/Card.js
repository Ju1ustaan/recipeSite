import React from 'react'
const Card = ({item, action}) => {
    const defaultImage = 'https://alppetro.co.id/dist/assets/images/default.jpg'

    const moveToFavorites = () => {
      let items = JSON.parse(localStorage.getItem('item')) || []
      const someItem = items.some(el => el.id === item.id);
      if(!someItem){
        localStorage.setItem('item', JSON.stringify([...items, item]))
      }
    }

  return (
    <div className='card'>
        <div className='card__img'>
            <img src={defaultImage} alt='pankakes'/>
        </div>
        <div className='card__info'>
            <p className='card__title'>{item.title}</p>
            <p className='card__desc'>{item.body} {item.id}</p>
            {
              action && <button className='accent__btn card__btn' onClick={moveToFavorites}>В избранное</button>
            }
        </div>
    </div>
  )
}

export default Card