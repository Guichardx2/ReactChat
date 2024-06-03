import '../styles/Home.css'
import { Input } from '../components/Input/Input'
import { ButtonChat } from '../components/Button/ButtonChat'
import { useState } from 'react'
export default function Home() {
 const [name, setName] = useState('')
    return (
        <section className="container">
            <div className="text">
                <h1>Bem-vindo à Home</h1>
            </div>
            <div className="redirection">
                <Input placeholder="Digite seu nome"  value={name} onChange={(e) => setName(e.target.value)}/>
                 <ButtonChat 
                    title="Ir para o chat"
                    name={name}
                >
                </ButtonChat>
                
            </div>
        </section>
    )
}