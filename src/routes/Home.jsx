import '../styles/Home.css'
import { Input } from '../components/Input/Input'
import { ButtonChat } from '../components/Button/ButtonChat'

export default function Home() {

    return (
        <section className="container">
            <div className="text">
                <h1>Bem-vindo à Home</h1>
            </div>
            <div className="redirection">
                <Input placeholder="Digite seu nome"/>
                 <ButtonChat 
                 title="Ir para o chat">
                </ButtonChat>
                
            </div>
        </section>
    )
}