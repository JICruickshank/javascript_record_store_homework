var assert = require("assert");
var Record = require("../record.js");

describe("Record", function() {
  var record;
  beforeEach(function() {
    record = new Record("SL2", "DJ's Take Control", "Old Skool", 20);
  });

  it('has artist', function() {
    assert.strictEqual(record.artist, "SL2");
  })

  it('has title', function() {
    assert.strictEqual(record.title, "DJ's Take Control");
  })

  it('has price', function() {
    assert.strictEqual(record.price, 20);
  })

  it('can print details', function() {
    record.printDetails();
  })

  it('record has genre', function() {
    assert.strictEqual(record.genre, "Old Skool");
  })

});
