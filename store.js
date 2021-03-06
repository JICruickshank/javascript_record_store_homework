const _ = require("lodash");

var Store = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

Store.prototype.addRecord = function (record) {
  this.inventory.push(record);
};

Store.prototype.listInventory = function () {
  for(record of this.inventory) {
    record.printDetails();
  }

};

Store.prototype.sellRecord = function (recordToSell) {
  _.remove(this.inventory, record => record === recordToSell);
  this.balance += recordToSell.price;
};

Store.prototype.addMultipleRecords = function (records) {
  for(record of records) {
    this.addRecord(record);
  }
};

Store.prototype.inventoryValue = function () {
  return _.sumBy(this.inventory, record => record.price);
};

Store.prototype.statusCheck = function () {
  return `Balance: £${this.balance}, Stock Value: £${this.inventoryValue()}`;
};

Store.prototype.viewByGenre = function (genre) {
  let result = _.filter(this.inventory, ['genre', genre]);
  return result;
};


module.exports = Store;
