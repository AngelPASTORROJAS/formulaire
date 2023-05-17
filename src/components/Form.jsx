import { useState } from "react";

const Form = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");
  const [pays, setPays] = useState("");

  return (
    <form action="">
      <div>
        <label htmlFor="prenom">Prenom</label>
        <input
          type="text"
          name=""
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name=""
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label htmlFor="pays">pays</label>
        <select
          name=""
          id="pays"
          value={pays}
          onChange={(e) => {
            setPays(e.target.value);
          }}
        >
          <option>France</option>
          <option>Belgique</option>
          <option>Zimbabwé</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
