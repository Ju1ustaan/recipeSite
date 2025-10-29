import React, { useState } from 'react'
import Image from '../assets/images/shareImg.png'
import NewPost1 from '../assets/images/newPost1.png'
import NewPost2 from '../assets/images/newPost2.png'
import PostForm from '../components/PostForm'

const Share = () => {
  const [auth, setAuth] = useState(false)
  return (
    <div className='share'>
      <div className='my__container'>
        <div className='share__wrapper'>
          <div className='share__img'>
            <img src={Image} alt='image' />
          </div>
          <div className='share__info'>
            <p className='share__text'>
              Давайте погрузимся в мир ароматных и невероятно вкусных деликатесов, среди которых скрыт мой уникальный рецепт, призванный покорить сердца всех любителей выпечки. Нежные ноты ванили, танцующие на кончиках ваших языков, будут сливаться с мягкостью теста, словно волшебный балет, а карамельные капли, стекающие с поверхности, создадут непередаваемое впечатление. Этот рецепт – это настоящее чудо, способное пробудить детские воспоминания и в то же время подарить взрослому гурману незабываемое удовольствие. Готовы ли вы погрузиться в это волшебство?
              <br /> Поделись и ты со своим уникальным рецептом!
            </p>
            <button onClick={() => setAuth(!auth)} className='accent__btn'>Зарегистрироваться</button>
          </div>
        </div>

        {
          auth ?
            <div>
              <p className='manual'>Давайте представим что вы зарегистрировались ;)</p>
              <div className='flex'>
              <PostForm />
              <div className='manual__grid'>
              <div className='manual__img1'><img src={NewPost1}/></div>
              <div className='manual__img2'><img src={NewPost2}/></div>
              </div>
              </div>
            </div>

            : null
        }
      </div>
    </div>
  )
}

export default Share