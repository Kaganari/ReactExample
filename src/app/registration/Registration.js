import React from 'react';
import InputField from '../../components/InputField/InputField';
import RadioButton from '../../components/radioButton/RadioButton';
import Button from '../../components/button/Button';
import TermsOfUse from '../../components/termsOfUse/TermsOfUse';
import CheckBox from '../../components/checkBox/CheckBox';

import './style.scss';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            sex: 'male',
            email: '',
            password: '',
            termsOfUse: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("First Name: " + this.state.firstName
            + "\nSecond Name: " + this.state.lastName
            + "\nSex: " + this.state.sex
            + "\nE-mail: " + this.state.email
            + "\nPassword: " + this.state.password
            + "\nAgreed to ToU: " + this.state.termsOfUse);
    };

    render() {
        return(
            <section className = 'main'>
                <article className = 'registration'>
                    <header className = 'registration__header'>
                        <h2 className = 'registration__heading'> Давайте начнем!</h2>
                    </header>
                    <form className = 'registration__form' onSubmit={this.handleSubmit}>
                        <InputField 
                            label='Имя' 
                            type='text' 
                            name='firstName' 
                            placeholder='Чендлер' 
                            onChange={this.handleChange} 
                        />
                        <InputField 
                            label='Фамилия' 
                            type='text' 
                            name='secondName' 
                            placeholder='Бинг' 
                            onChange={this.handleChange} 
                        />
                        <fieldset className='registration__sexchoice'>
                            <legend className='registration__legend'>Ваш пол</legend>
                            <RadioButton
                                label='Женский'
                                name='sex'
                                value='female'
                                onChange={this.handleChange}
                            />
                            <RadioButton
                                label='Мужской'
                                name='sex'
                                value='male'
                                onChange={this.handleChange}
                            />
                        </fieldset>
                        <InputField 
                            label='Введите электронный адрес' 
                            type='email' 
                            name='email' 
                            placeholder='email@example.com' 
                            onChange={this.handleChange} 
                        />
                        <InputField 
                            label='Придумайте пароль' 
                            type='password' 
                            name='password' 
                            placeholder='Пароль' 
                            onChange={this.handleChange} 
                        />
                        <div className = 'registration__ToU'>
                            <CheckBox
                                label={<TermsOfUse/>}
                                name='termsOfUse' 
                                value='false'
                                onChange={this.handleChange} 
                            />
                        </div>
                        <Button classes='registration__button' type='submit' value='Зарегистрироваться' />
                    </form>
                </article>
            </section>
        );
    }
}