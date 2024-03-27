import { useState } from "react"
import styles from "./Register.module.css"

import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect } from "react";

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication();



    const handleSunmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        // if(password.length <= 5 ){
        //     setError("As senhas precisam ter no minimo 6 caracteres")
        //     return
        // }

        const res = await createUser(user);

        console.log(res)
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div>
            <div className={styles.register}>
                <h1>Cadastre-se para postar</h1>
                <p>Crie seu usuario e compartilhe suas histórias </p>
            </div>

            <form onSubmit={handleSunmit}>
                <label>
                    <span>Nome: </span>
                    <input type="text"
                        name="displayName"
                        required
                        placeholder="Nome de usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    <span>Email: </span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail de usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha: </span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirmação de senha: </span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className="btn">Entrar</button>}
                {loading && (
                    <button className="btn" disabled>
                        Aguarde...
                    </button>
                )}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register