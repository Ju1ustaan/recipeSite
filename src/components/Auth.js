import React from 'react'

const Auth = ({setAuth}) => {
    return (
        <div className='modal'>
            <div className="auth w-full max-w-xl">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h3 className='text-center mb-5'>Регистрация</h3>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2" for="username">
                            Логин
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Введите логин или адресс электронной почты"/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm mb-2" for="password">
                            Пароль
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={() => setAuth(false)} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Регистрация
                        </button>
                        <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800" href="#">
                            Есть профиль?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth