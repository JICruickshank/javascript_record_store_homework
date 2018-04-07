var assert = require("assert");
var Store = require("../store.js");
var Record = require("../record.js");

describe('Store', function() {
  var store, record;
  beforeEach(function() {
    store = new Store("Vinyl Exchange", "Manchester", 1000);
    record = new Record("SL2", "DJ's Take Control", 20);

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

  it('can add records', function() {
    store.addRecord(record);
    assert.strictEqual(store.inventory.length, 1);
    assert.strictEqual(store.inventory[0].artist, "SL2");
  })
})
