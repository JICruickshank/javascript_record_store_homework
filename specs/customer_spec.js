var assert = require("assert");
var Customer = require("../customer.js");
var Record = require("../record.js")

describe('Customer', function() {
  var customer, record;
  beforeEach(function() {
    customer = new Customer("J", 100);
    record = new Record("SL2", "DJ's Take Control", "Old Skool", 20);
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
  })
})
