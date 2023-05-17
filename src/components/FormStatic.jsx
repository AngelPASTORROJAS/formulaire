import { useRef } from "react";

const FormStatic = () => {
    const prenom = useRef("");
    const nom = useRef("");
    const message = useRef("");
    const pays = useRef("");

  return (
    <form action="">
      <div>
        <label htmlFor="prenom">Prenom</label>
        <input
          type="text"
          name=""
          id="prenom"
          ref={prenom}
        />
      </div>
      <div>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          name=""
          id="nom"
          ref={nom}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          name=""
          id="message"
          ref={message}
        ></textarea>
      </div>
      <div>
        <label htmlFor="pays">pays</label>
        <select
          name=""
          id="pays"
          ref={pays}
        >
          <option>France</option>
          <option>Belgique</option>
          <option>Zimbabwé</option>
        </select>
      </div>
    </form>
  );
};

export default FormStatic;
