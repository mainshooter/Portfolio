export class Project {

  constructor(data = {}) {
    this.id = Math.floor(Math.random() * (1000200000 - 100 + 1)) + 100;
    this.title = "";
    this.description = "";
    this.image = "";
    this.links = [];
    for (let field in data) {
      this[field] = data[field];
    }
  }

}
