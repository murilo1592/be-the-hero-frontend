import React, { useState ,useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';


import './style.css';

import logoImg from '../../assets/logo.svg';

function Profile() {
    const history = useHistory();
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    async function hendleDeleteIncident(id) {

        console.log(id);
        try {

            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

           setIncidents(incidents.filter(incident => incident.id !== id));
            
        } catch (err) {
            alert('Erro ao deletar caso');
        }
    }

    function hendleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={hendleLogout} type="button">
                    <Link to="/">
                        <FiPower size={18} color="#e02041" />
                    </Link>
                </button>
            </header>

            <h1>
                Casos Cadastrados
            </h1>

            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>{incidents.description}</p>

                    <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incidents.value)}</p>

                        <button onClick={() => hendleDeleteIncident(incidents.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Profile;