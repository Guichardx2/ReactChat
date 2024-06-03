import "../styles/Chat.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [btnSend, setBtnSend] = useState("");
  const params = useParams();

  function sendMessage(event) {
    event.preventDefault();
    setMessages([...messages, message]);
    setMessage("")
  }

  return (
      <section className="sessao">
        <div className="title-name">
          <div className="user"></div>
          <h3 className="name">Atendente</h3>
        </div>
        <main className="content">
          {/* MARCACAO  DO CHAT */}
          <div className="chat-area">
            <div className="message-item">
              <div className="message-chat">
                {" "}
                <strong>Atendente diz:</strong>
              </div>
              <div className="message-user"> Blabla, blabla bla?! </div>
            </div>
            <div className="message-item">
              <div className="message-chat">
                {" "}
                <strong>Atendente diz:</strong>{" "}
              </div>
              <div className="message-user"> Blabla blabla bla bla blabla </div>
            </div>
            <div className="message-item-user">
              <div className="message-chat">
                {" "}
                <strong>{params.name} diz:</strong>{" "}
              </div>
              <div className="message-user"> Bla, bla bla </div>
            </div>
            <div className="message-item-user">
              <div className="message-chat">
                {" "}
                <strong>{params.name} diz:</strong>{" "}
              </div>
              <div className="message-user">
                {" "}
                Blabla blabla bla bla bla, bla, bla bla{" "}
              </div>
            </div>
            <div className="message-item-user">
              <div className="message-chat">
                {" "}
                <strong>{params.name} diz:</strong>{" "}
              </div>
              <div className="message-user">
                {" "}
                Conversa de louco cara, ta maluco...{" "}
              </div>
            </div>
            {messages.map((message, index) => {
              return (
                <div key={index} className="message-item-user">
                  <div className="message-chat">
                    {" "}
                    <strong>{params.name} diz:</strong>{" "}
                  </div>
                  <div className="message-user"> {message} </div>
                </div>
              );
            })}

          </div>
          {/* MARCACAO DO CAMPO FORM NO FOOTER */}
          <form className="sendMessage" onSubmit={sendMessage}>
            <fieldset className="control">
              <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                type="text"
                name="message"
                id="message"
                placeholder="Digite sua mensagem..."
              ></input>
              <button id="btn-send" className="send" type="submit"></button>
            </fieldset>
          </form>
        </main>
      </section>
  );
}
