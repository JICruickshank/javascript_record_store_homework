var assert = require("assert");
var Customer = require("../customer.js");
var Record = require("../record.js")

describe('Customer', function() {
  var customer, record, record2, record3, customer2, record4;
  beforeEach(function() {
    customer = new Customer("J", 100);
    customer2 = new Customer("Gerwyn", 20);
    record = new Record("SL2", "DJ's Take Control", "Old Skool", 20);
    record2 = new Record("Altern-8", "Evapor-8", "Old Skool", 20);
    record3 = new Record("Public Enemy", "Fight The Power", "Hip Hop", 30);
    record4 = new Record("Taylor Swift", "Shake It Off", "Pop", 1)
  });

  it('customer has name', function() {
    assert.strictEqual(customer.name, "J");
  })

  it('customer has funds', function() {
    assert.strictEqual(customer.funds, 100);
  })

  it('customer has no records', function() {
    assert.strictEqual(customer.records.length, 0);
  })

  it('customer can buy record', function() {
    customer.buy(record);
    assert.strictEqual(customer.records.length, 1);
    assert.strictEqual(customer.records[0], record);
    assert.strictEqual(customer.funds, 80);
  })

  it('customer can sell record', function() {
    customer.buy(record);
    customer.buy(record3);
    customer.sell(record);
    assert.strictEqual(customer.records.length, 1);
    assert.strictEqual(customer.funds, 70);
  })

  it('customer has sufficient funds to buy', function() {
    assert.strictEqual(customer2.records.length, 0);
    customer2.buy(record);
    customer2.buy(record3);
    assert.strictEqual(customer2.records.length, 1);
  })

  it('can get value of customers records', function() {
    customer.buy(record);
    customer.buy(record2);
    customer.buy(record3);
    assert.strictEqual(customer.valueOfRecords(), 70);
  })

  it('can filter records by genre', function() {
    customer.buy(record);
    customer.buy(record2);
    customer.buy(record3);
    let result = customer.viewByGenre("Old Skool");
    assert.strictEqual(result.length, 2);
  })

  it('can get value of records of a genre', function() {
    customer.buy(record);
    customer.buy(record2);
    customer.buy(record3);
    assert.strictEqual(customer.valueOfRecordsByGenre("Old Skool"), 40);
  })

  it('can find most valuable record', function() {
    customer.buy(record);
    customer.buy(record2);
    customer.buy(record3);
    assert.strictEqual(customer.mostValuable(), record3);
  })

  it('can sort by value', function() {
    customer.buy(record);
    customer.buy(record2);
    customer.buy(record3);
    assert.deepStrictEqual(customer.sortByValue(), [record3, record2, record]);
  })

  it('can compare value to another customer', function() {
    customer.buy(record);
    customer.buy(record2);
    customer.buy(record3);
    customer2.buy(record4);
    assert.strictEqual(customer.compareValue(customer2), 69);

  })
})
