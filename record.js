var Record = function(artist, title, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
};

Record.prototype.printDetails = function () {
  return `${this.title}, ${this.artist} - £${this.price}`;

};


module.exports = Record;
