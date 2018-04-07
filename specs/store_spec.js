var assert = require("assert");
var Store = require("../store.js");
var Record = require("../record.js");

describe('Store', function() {
  var store, record, record2, record3, records;
  beforeEach(function() {
    store = new Store("Vinyl Exchange", "Manchester", 100);
    record = new Record("SL2", "DJ's Take Control", "Old Skool", 20);
    record2 = new Record("Altern-8", "Evapor-8", "Old Skool", 20);
    record3 = new Record("Public Enemy", "Fight The Power", "Hip Hop", 30);
    records = [record, record2, record3];
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
    assert.strictEqual(store.balance, 100);
  })

  it('can add records', function() {
    store.addMultipleRecords(records);
    assert.strictEqual(store.inventory.length, 3);
    assert.strictEqual(store.inventory[0].artist, "SL2");
  })

  it('can list records', function() {
    store.addMultipleRecords(records);
    store.listInventory();
  })

  it('can sell record', function() {
    store.addMultipleRecords(records);
    assert.strictEqual(store.inventory.length, 3);
    store.sellRecord(record);
    assert.strictEqual(store.inventory.length, 2);
    assert.strictEqual(store.balance, 120);
  })

  it('can get value of inventory', function() {
    store.addMultipleRecords(records);
    assert.strictEqual(store.inventoryValue(), 70);
  })

  it('get status report', function() {
    store.addMultipleRecords(records);
    assert.strictEqual(store.statusCheck(), "Balance: £100, Stock Value: £70");
  })

  it('can view records by genre', function() {
    store.addMultipleRecords(records);
    let result = store.viewByGenre("Old Skool");
    assert.strictEqual(result.length, 2);
  })
})
