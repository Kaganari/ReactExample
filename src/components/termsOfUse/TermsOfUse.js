import React from 'react';

import './style.scss';

export default class TermsOfUse extends React.Component {
	render() {
		return (
			<div className = 'terms-of-use__text'>
				Я принимаю условия <a className='terms-of-use__link' href='#'>Пользовательского соглашения</a> и даю свое согласие на обработку моих персональных данных на условиях, определенных <a className='terms-of-use__link' href='#'>Политикой конфидециальности</a>.
			</div>
		);
	}
}