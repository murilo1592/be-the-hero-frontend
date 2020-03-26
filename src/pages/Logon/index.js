import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


function Login(){
    return (
        <div className="logon-container">
            <section className="form"> 
                <img src={logoImg} alt="heroes" />
                
                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" type="submit"> Entrar</button>

                    <Link to="/register" className="black-link">
                        < FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}

export default Login;