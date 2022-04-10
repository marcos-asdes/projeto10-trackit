import React from 'react';
/* import { useContext } from 'react'; */
/* import { Link, useNavigate } from 'react-router-dom'; */
import axios from 'axios';
import styled from 'styled-components';
/* import UserContext from '../contexts/UserContext.js'; */
import { ThreeDots } from 'react-loader-spinner';

export default function LoginScreen() {
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    /* const {user, setUser} = useContext(UserContext); */
    /* if (user) useNavigate('/habits'); */

    function confirmLogin() {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
        let userData = {
            email: userEmail,
            password: userPassword
        }
        setIsLoading(true);
        const promise = axios.post(URL, userData);
        promise.then(response => {
            const newUser = {...response.data};
            /* setUser(newUser); */
            localStorage.setItem('trackit_user', JSON.stringify(newUser));
            /* useNavigate('/habits'); */
        });
        promise.catch(error => {
            console.log(error.response);
            alert('Verifique email e senha.');
            setIsLoading(false);
        });
    }

    function Login() {
        return (
            <Access>
                <Forms> 
                    <input type="email" placeholder="email" disabled={isLoading} 
                    onChange={e => {setUserEmail(e.target.value)}}></input>
                    <input type="password" placeholder="senha" disabled={isLoading} 
                    onChange={e => {setUserPassword(e.target.value)}}></input>
                    <button onClick={confirmLogin}>
                        {
                            !isLoading ? "Entrar" : <ThreeDots color="#FFFFFF" height={50} width={50} />
                        }
                    </button>
                </Forms>
                <Register>
                    {/* <Link to={"/register"}> */}
                    <h2>Não tem uma conta? Cadastre-se!</h2>
                    {/* </Link> */}
                </Register>
            </Access>
        )
    }

    /* I chose to use a div wrapping the jsx instead of a React.Fragment by preference. */
    return (
        <div>
            <Header>
                <img src="./imgs/logo.svg" alt="logo" />
            </Header>
            <Login></Login>
        </div>
    )
}

const Header = styled.div`
    img {
        width: 600px;
    }

    & {
    display: flex;
    flex-direction: column;
    margin: 68px auto 0 auto;
    align-items: center;
    }

    @media screen and (max-width: 600px) {
    img {
        width:100vw;
    }

    & {
    display: flex;
    flex-direction: column;
    margin: 68px auto 0 auto;
    align-items: center;
    }
}


`
const Access = styled.section`
    & {
        width: calc(100vw - 72px);
        margin: 0 32px 0 32px;
    }
`
const Forms = styled.form`
    & {
        width: 100%;
    }
    
    input {
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 6px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        display: flex;
        align-items: center;
        justify-content: start;
    }

    input:disabled {
        background: #F2F2F2;
    }

    button {
        width: 100%;
        height: 45px;
        background-color: #52B6FF;
        color: white;
        border-radius: 5px;
        border: none;
        background: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }

    button:hover {
        cursor: pointer;
    }

    button:disabled {
        opacity: 70%;
    }
`
const Register = styled.div`
    & {
        display: flex;
        margin-top: 25px;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`