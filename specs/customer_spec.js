var assert = require("assert");
var Customer = require("../customer.js");
var Record = require("../record.js")

describe('Customer', function() {
  var customer, record, record2, record3;
  beforeEach(function() {
    customer = new Customer("J", 100);
    record = new Record("SL2", "DJ's Take Control", "Old Skool", 20);
    record2 = new Record("Altern-8", "Evapor-8", "Old Skool", 20);
    record3 = new Record("Public Enemy", "Fight The Power", "Hip Hop", 30);
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
    customer2 = new Customer("Gerwyn", 20);
    assert.strictEqual(customer2.records.length, 0);
    customer2.buy(record);
    customer2.buy(record3);
    assert.strictEqual(customer2.records.length, 1);
  })
})
