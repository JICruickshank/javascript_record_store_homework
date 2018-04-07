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




module.exports = Customer;
