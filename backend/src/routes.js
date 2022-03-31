const express = require("express");
const Controller = require("./controller/Ch"); 


const controller = new Controller();
const routes = express.Router();

routes.get("/challenges", controller.index);
routes.get("/challenges/getPalindromes/:init/:end", controller.getPalindromes);
routes.get("/challenges/getChange/:buyValue/:deliveredValue", controller.getChange);
routes.get("/challenges/getCEPs/:cep1/:cep2/:cep3/:cep4/:cep5", controller.getCEPs);

routes.post("/challenges/saveVehicle", controller.saveVehicle);

module.exports = routes;