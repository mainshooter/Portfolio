export class Project {

  constructor(data = {}) {
    this.title = "";
    this.description = "";
    this.image = "";
    this.links = [];
    for (let field in data) {
      this[field] = data[field];
    }
  }

}
