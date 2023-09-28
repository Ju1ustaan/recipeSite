import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const PostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const postNewRecipes = async () => {    
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            data: JSON.stringify({
                title: title,
                body: desc,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        dispatch({type: 'NEW_RECIPES', data});
    }
    return (
        <div className='share__form'>
            <p className='share__title'>Как называеться шедевр вашего кондитерского искусства?</p>
            <input className='share__inp' type='text' onInput={(e) =>  setTitle(e.target.value)}/>
            <p className='share__title'>Уже не терпиться узнать ваш секрет...</p>
            <textarea rows='6' className='share__inp' onInput={(e) => setDesc(e.target.value)}/>
            <button className='accent__btn' onClick={() => postNewRecipes()}>Опубликовать</button>
        </div>
    )
}

export default PostForm