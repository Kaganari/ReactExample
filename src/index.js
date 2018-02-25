import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import InputForm from './components/InputForm/InputForm';
import RadioButton from './components/radioButton/RadioButton';
import Button from './components/button/Button';

import './index.scss';


ReactDOM.render(
    <div>
    <header className="form__header">
        <h2 className="form__heading">Давайте начнем! </h2>
    </header>
    <InputForm
        label = 'Имя'
        type = 'text'
        name = 'firstName'
        placeholder = 'Your first name'
    />
    <InputForm
        label = 'Фамилия'
        type = 'text'
        name = 'secondName'
        placeholder = 'Your second name'
    />
    <div className="sex-choice">
    <label className='input-form__label'>Ваш пол</label>
    <RadioButton
        label = 'Женский'
        name = 'sex'
        value = 'female'
    />
    <RadioButton
        label = 'Мужской'
        name = 'sex'
        value = 'male'
    />
    </div>
    <InputForm
        label = 'Введите электронный адрес'
        type = 'text'
        name = 'email'
        placeholder = 'email@gmail.com'
    />
    <InputForm
        label = 'Придумайте пароль'
        type = 'password'
        name = 'password'
        placeholder = ''
    />
    <Button classes = 'button' type = 'submit' value = 'Зарегистрироваться' />
    </div>, document.getElementById('form')
);