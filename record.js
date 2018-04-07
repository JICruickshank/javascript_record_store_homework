var Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.price = price;
  this.genre = genre;
};

Record.prototype.printDetails = function () {
  console.log(`${this.title}, ${this.artist} - £${this.price}`);
};


module.exports = Record;
