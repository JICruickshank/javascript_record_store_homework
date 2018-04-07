var assert = require("assert");
var Store = require("../store.js");

describe('Store', function() {
  var store;
  beforeEach(function() {
    store = new Store("Vinyl Exchange", "Manchester", 1000);

  });

  it('has name', function() {
    assert.strictEqual(store.name, "Vinyl Exchange");
  })

  it('has city', function() {
    assert.strictEqual(store.city, "Manchester");
  })

  it('has empty inventory', function() {
    assert.strictEqual(store.inventory.length, 0);
  })

  it('has balance', function() {
    assert.strictEqual(store.balance, 1000);
  })
})
