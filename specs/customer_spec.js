var assert = require("assert");
var Customer = require("../customer.js");

describe('Customer', function() {
  var customer;
  beforeEach(function() {
    customer = new Customer("J");

  });

  it('customer has name', function() {
    assert.strictEqual(customer.name, "J");
  })
})
