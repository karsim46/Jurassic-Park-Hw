const Dinosaur = require("./dinosaur");

const Park = function(name, ticket_price) {
    this.name = name
    this.ticket_price= ticket_price
    this.collection_of_dinosaur = [];
}

Park.prototype.numberOfDinosaurs = function(){
    return this.collection_of_dinosaur.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.collection_of_dinosaur.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function (dinosaur){
    const indexOfDinosaur = this.collection_of_dinosaur.indexOf(dinosaur);
    this.collection_of_dinosaur.splice(indexOfDinosaur, 1)
}

// Park.prototype.findDinosaurByVisitor = function (dinosaur){
//     const indexOfDinosaur = this.collection_of_dinosaur.selectAll(dinosaur);
//     this.collection_of_dinosaur.select(dinosaur.guestsAttractedPerDay, 50) 
// }

module.exports = Park;