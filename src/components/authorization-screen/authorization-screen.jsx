import React, {createRef, PureComponent} from "react";
import PropTypes from 'prop-types';

class AuthorizationScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._emailRef = createRef();
    this._passwordRef = createRef();
    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin(evt) {
    const {onLogin} = this.props;

    evt.preventDefault();
    const email = this._emailRef.current.value;
    const password = this._passwordRef.current.value;
    onLogin(email, password);
  }

  render() {
    const {onPlayMoreClick} = this.props;

    return (
      <section className="login">
        <div className="login__logo">
          <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
        </div>
        <h2 className="login__title">Вы настоящий меломан!</h2>
        <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
        <form className="login__form" action="">
          <p className="login__field">
            <label className="login__label" htmlFor="name">Логин</label>
            <input className="login__input" type="text" name="name" id="name" ref={this._emailRef}/>
          </p>
          <p className="login__field">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input className="login__input" type="text" name="password" id="password" ref={this._passwordRef}/>
            <span className="login__error">Неверный пароль</span>
          </p>
          <button className="login__button button" type="submit" onClick={this._handleLogin}>Войти</button>
        </form>
        <button className="replay" type="button" onClick={onPlayMoreClick}>Сыграть ещё раз</button>
      </section>
    );
  }
}

AuthorizationScreen.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onPlayMoreClick: PropTypes.func.isRequired,
};

export default AuthorizationScreen;
