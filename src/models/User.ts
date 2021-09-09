export class User {
  constructor(id: string, name: string, email: string){
    this.id = id
    this.name = name
    this.email = email
  }

  id: string;
  name: string;
  email: string;
}