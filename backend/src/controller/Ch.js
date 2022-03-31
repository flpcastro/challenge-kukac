const Service = require("../services/Service");

class Controller {
  constructor() {
    this.service = new Service();
    this.getPalindromes = this.getPalindromes.bind(this);
    this.getChange = this.getChange.bind(this);
    this.getCEPs = this.getCEPs.bind(this);
    this.saveVehicle = this.saveVehicle.bind(this);
  }

  index(request, response) {
    response.status(200).json({
      ok: true
    });
  }

  getPalindromes(request, response) {
    const init = Number(request.params.init);
    const end = Number(request.params.end);

    const palindromes = [];

    for (let i = init; i <= end; i++) {
      if (this.service.isPalindrome(i.toString())) {
        palindromes.push(i);
      }
    }

    return response.status(200).json(palindromes);
  }

  getChange(request, response) {
    const buyValue = Number(request.params.buyValue);
    const deliveredValue = Number(request.params.deliveredValue);

    const change = deliveredValue - buyValue;

    const notes = this.service.getNotes(change);

    return response.status(200).json(notes);
  }

  async getCEPs(request, response) {
    const cep1 = request.params.cep1;
    const cep2 = request.params.cep2;
    const cep3 = request.params.cep3;
    const cep4 = request.params.cep4;
    const cep5 = request.params.cep5;

    const search = [cep1, cep2, cep3, cep4, cep5];
    const ceps = await this.service.getCeps(search);

    return response.status(200).json(ceps);
  }

  saveVehicle(request, response) {
    let vehicle = request.body;

    if (vehicle) {
      const json = JSON.stringify(vehicle);

      const fileWrited = this.service.writeFile(json);

      if (fileWrited) {
        response.status(200);
        response.json(fileWrited);
      }
      return response.status(500);
    }
    return response.status(500);
  }
}

module.exports = Controller;

