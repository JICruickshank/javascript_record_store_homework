var assert = require("assert");
var Customer = require("../customer.js");

describe('Customer', function() {
  var customer;
  beforeEach(function() {
    customer = new Customer("J", 100);

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
})
