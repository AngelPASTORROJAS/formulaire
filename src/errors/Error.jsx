class Error {
    constructor(message) {
      this.message = message;
      this.name = "Error"; // (noms différents pour différentes classes d'erreur intégrées)
    }
}
export default Error