import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';

function NewIncident() {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    async function hendleNewIncident(e) {
        e.preventDefault();

        const data = {
            title, description, value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profiler');
        } catch (err) {
            alert('Erro ao cadastrar novo caso.');
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhado para encontar um herói para resolver isso</p>

                    <Link to="/profiler" className="black-link">
                        < FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={hendleNewIncident}>
                    <input placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={e => setdescription(e.target.value)}
                    />
                    <input placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default NewIncident;
