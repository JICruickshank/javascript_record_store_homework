var Customer = function(name, funds) {
  this.name = name;
  this.funds = funds;
  this.records = [];
}

Customer.prototype.buy = function (record) {
  this.records.push(record);

};




module.exports = Customer;
