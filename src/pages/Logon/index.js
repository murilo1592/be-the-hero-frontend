import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './style.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function hendleLogin(e) {
        e.preventDefault();

        const data = { id };

        try {
            const response = await api.post('sessions', data);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profiler');

        } catch (err) {
            alert('Falha no login');
        }
        
    }
    return (
        <div className="logon-container">
            <section className="form"> 
                <img src={logoImg} alt="heroes" />
                
                <form onSubmit={hendleLogin}>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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