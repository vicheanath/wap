function Bank(code, address) {
  this.code = code;
  this.address = address;
  this.customers = [];
  this.accounts = [];
  this.atm = [];
  this.transactions = [];
}

Bank.prototype.addCustomer = function (customer) {
  this.customers.push(customer);
};

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
};

Bank.prototype.addATM = function (atm) {
  this.atm.push(atm);
};

Bank.prototype.addTransaction = function (transaction) {
  this.transactions.push(transaction);
};

Bank.prototype.findCustomer = function (cardNumber) {
  return this.customers.find((customer) => customer.cardNumber === cardNumber);
};

Bank.prototype.findAccount = function (number) {
  return this.accounts.find((account) => account.number === number);
};

Bank.prototype.numAccounts = function () {
  return this.accounts.length;
};

Bank.prototype.numCustomers = function () {
  return this.customers.length;
};

Bank.prototype.numATMs = function () {
  return this.atms.length;
};

Bank.prototype.numTransactions = function () {
  return this.transactions.length;
};

Bank.prototype.toString = function () {
  return `Bank ${this.code}: ${this.address}`;
};

function ATM(location, managedBy) {
  this.location = location;
  this.managedBy = managedBy;
}

ATM.prototype.identifies = function () {
  return this.location;
};

ATM.prototype.transaction = function () {
  return new ATMTransaction();
};

ATM.prototype.toString = function () {
  return `ATM ${this.location} ${this.managedBy}`;
};

function ATMTransaction(transactionId, date, type, amount, postBalance) {
  this.transactionId = transactionId;
  this.date = date;
  this.type = type;
  this.amount = amount;
  this.postBalance = postBalance;
}

ATMTransaction.prototype.modifies = function () {
  return new Account();
};

ATMTransaction.prototype.toString = function () {
  return `Transaction ${this.transactionId}: ${this.type} ${this.amount} ${this.postBalance}`;
};

function Customer(name, address, dob, cardNumber, pin) {
  this.name = name;
  this.address = address;
  this.dob = dob;
  this.cardNumber = cardNumber;
  this.pin = pin;
}

Customer.prototype.verifyPassword = function () {
  return this.pin;
};

Customer.prototype.toString = function () {
  return `Customer ${this.name} ${this.address}`;
};

function Account(number, balance = 0) {
  this.number = number;
  this.balance = balance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

Account.prototype.toString = function () {
  return `Account ${this.number}: balance ${this.balance}`;
};
