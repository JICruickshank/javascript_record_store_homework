var _ = require("lodash");

var Customer = function(name, funds) {
  this.name = name;
  this.funds = funds;
  this.records = [];
}

Customer.prototype.buy = function (record) {
  if (this.funds >= record.price) {
    this.records.push(record);
    this.funds -= record.price;
    console.log(this.funds);
  }
};

Customer.prototype.sell = function (recordToSell) {
  _.remove(this.records, record => record === recordToSell);
  this.funds += recordToSell.price;
};

Customer.prototype.viewByGenre = function (genre) {
  return _.filter(this.records, ['genre', genre])

};

Customer.prototype.valueOfRecords = function () {
  return _.sumBy(this.records, 'price');
};

Customer.prototype.valueOfRecordsByGenre = function (genre) {
  let records = this.viewByGenre(genre);
  return _.sumBy(records, 'price');
};

Customer.prototype.mostValuable = function () {
  return _.maxBy(this.records, 'price');
};

Customer.prototype.sortByValue = function () {
  return _.orderBy(this.records, ['price', 'artist'], ['desc', 'asc'] )
};

Customer.prototype.compareValue = function (another) {
  return this.valueOfRecords() - another.valueOfRecords();
};




module.exports = Customer;
