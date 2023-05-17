// Créer un formulaire pour ajouter un utilisateur à une liste d'utilisateurs déjà existante.
// La saisie dans le champ  de formulaire sera forcée en majuscule.
// Avant d'ajouter l'utilisateur vérifier qu'il n'existe pas déjà, vérifiez également que le champ n'est pas vide.
// Afficher la liste des utilisateurs sous le formulaire.
// Au moins 2 composants sont nécessaires. Faire cet exercice avec le useRef

import { useRef, useState } from "react";
import ValidationError from "./../errors/ValidationError";

const FormUsers = () => {
  let [utilisateurs, setUtilisateur] = useState(["timoleon", "gaspard"]);
  let newUtilisateur = useRef("");

  const AddUtilisateur = () => {
    try {
      const nom = newUtilisateur.current.value;
      if (!nom) {
        throw new ValidationError("Un utilisateur ne peut pas être vide!");
      }
      if (utilisateurs.includes(nom)) {
        throw new ValidationError("L'utilisateur est déja présent!");
      }
      setUtilisateur([...utilisateurs, nom]);
      newUtilisateur.current.value = "";
    } catch (error) {
      if (error instanceof ValidationError) {
        alert("Donée invalide : " + error.message);
      } else {
        throw error;
      }
    }
  };

  return (
    <>
      <form>
        <label htmlFor="ajoutUtilisateur">Utilisateur à ajouter :</label>
        <input id="ajoutUtilisateur" type="text" ref={newUtilisateur} />
        <button type="button" onClick={AddUtilisateur}>
          Ajouter
        </button>
      </form>
      <ul>
        {utilisateurs.map((utilisateur) => (
          <li key={utilisateur}>{utilisateur}</li>
        ))}
      </ul>
    </>
  );
};

export default FormUsers;
