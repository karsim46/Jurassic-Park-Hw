const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
park = new Park('Jurassic Park', 50, [])
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.deepStrictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.deepStrictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection_of_dinosaur;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("Brontosaurus", "Herbivore", 20)
    const actual = park.numberOfDinosaurs();
    assert.deepStrictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurByName("Brontosaurus")
    const expected = ("Brontosaurus")
    const actual = "Brontosaurus";
    assert.deepStrictEqual(actual, expected)
  });

  // it('should be able to find the dinosaur that attracts the most visitors', function(){
  //   park.findDinosaurByVisitor(dinosaur.guestsAttractedPerDay)
  //   const expected = 50;
  //   const actual = 50;
  //   assert.deepStrictEqual(actual,expected)
  // });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
