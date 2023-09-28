import React, {useEffect} from 'react'
import axios from 'axios'
import ImageMain from '../assets/images/mainImg.png'
import BigImageMain from '../assets/images/tarlaImg.png'
import Img1 from '../assets/images/forCarusel1.png'
import Img2 from '../assets/images/forCarusel2.png'
import Img3 from '../assets/images/forCarusel3.png'
import Img4 from '../assets/images/forCarusel4.png'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getList = async () => {
      let { data } = await axios('https://jsonplaceholder.typicode.com/posts?_limit=9')
      dispatch({type: 'FETCH_RECIPES', data})
    }
    getList()
  }, [])
  return (
    <div className='home'>
        <div className='my__container'>
            <div className='home__wrapper'>
              <div className='home__info'>
                  <h1 className='home__title'>Найди свой рецепт счастья!</h1>
                  <p className='home__desc'>Принесите запахи и вкусы любимой выпечки в ваш дом. В нашем сайте есть лучшие рецепты, чтобы каждый раз легко готовить потрясающую выпечку. Мы уже сделали все сложные моменты, поэтому все, что вам нужно сделать, это найти, выпечку и испечь!</p>
                  <NavLink to={'/recipes'}><button className='home__btn accent__btn md:transition-all'>Начать поиск вкусняшек</button></NavLink>
              </div>
              <div className='home__img'>
                <img src={ImageMain} alt='cruassan'/>
              </div>
            </div>
            <div className='home__big-img'>
              <img alt='tarla img' src={BigImageMain}/>
            </div>
            <div className='home__images flex justify-between '>
              <div >
                <img src={Img1} alt='image'/>
              </div>
              <div>
                <img src={Img2} alt='image'/>
              </div>
              <div>
                <img src={Img3} alt='image'/>
              </div>
              <div>
                <img src={Img4} alt='image'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home