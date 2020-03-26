import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu casdatro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="black-link">
                        < FiArrowLeft size={16} color="#E02041" />
                        Já tenho conta
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                    <input placeholder="Email" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
            </div>
    );
}

export default Register