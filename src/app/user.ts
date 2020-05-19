export class User {
    constructor(
        // public id : number,
        public email: string,
        public pseudo: string,
        public motPasse: string,
        public nom?: string,
        public prenom?: string,
        public dateNaissance?: string,
        public pays?: string,
        public numeroTel?: string
    ){}
}
