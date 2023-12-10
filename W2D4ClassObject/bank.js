class Bank {
  constructor(code, address) {
    this.code = code;
    this.address = address;
    this.atm = [];
  }
  addAtm(atm) {
    this.atm.push(atm);
  }
  maintains() {
    return new Customer();
  }
  toString() {
    return `Bank ${this.code}: ${this.address}`;
  }
}

class ATM {
  constructor(location, managedBy) {
    this.location = location;
    this.managedBy = managedBy;
  }
  identifies() {
    return this.location;
  }
  transaction() {
    return new ATMTransaction();
  }
  toString() {
    return `ATM ${this.location} ${this.managedBy}`;
  }
}

class ATMTransaction {
  constructor(transactionId, date, type, amount, postBalance) {
    this.transactionId = transactionId;
    this.date = date;
    this.type = type;
    this.amount = amount;
    this.postBalance = postBalance;
  }
  modifies() {
    return new Account();
  }
  toString() {
    return `Transaction ${this.transactionId}: ${this.type} ${this.amount} ${this.postBalance}`;
  }
}

class Customer {
  constructor(name, address, dob, cardNumber, pin) {
    this.name = name;
    this.address = address;
    this.dob = dob;
    this.cardNumber = cardNumber;
    this.pin = pin;
  }
  verifyPassword() {
    return this.pin;
  }
  toString() {
    return `Customer ${this.name} ${this.address}`;
  }
}

class Account {
  constructor(number, balance = 0) {
    this.number = number;
    this.balance = balance;
  }
  deposit(amt) {
    this.balance += amt;
  }
  withdraw(amt) {
    this.balance -= amt;
  }
  toString() {
    return `Account ${this.number}: balance ${this.balance}`;
  }
}

class SavingAccount extends Account {
  constructor(number, balance) {
    super(number, balance);
    this.interest = 0.5;
  }
  addInterest(interest) {
    this.balance += this.balance * interest;
  }
  toString() {
    return `Account ${this.number}: balance ${this.balance}`;
  }
}

class CurrentAccount extends Account {
  constructor(number, balance) {
    super(number, balance);
    this.overdraftLimit = 500;
  }
  withdraw(amt) {
    if (this.balance - amt < this.overdraftLimit) {
      console.log("Overdraft limit reached");
    }
    this.balance -= amt;
  }

  endOfMonth() {
    if (this.balance < 0) {
      return `Warning, low balance CheckingAccount ${this.number}: balance: ${this.balance} overdraft limit: ${this.overdraftLimit}`;
    }
    return "";
  }

  toString() {
    return `Account ${this.number}: balance ${this.balance}`;
  }
}


// TEST //
const bank = new Bank(1, "Main Street");
const atm = new ATM("A", "B");
const atmTransaction = new ATMTransaction(1, "2020-01-01", "Deposit", 100, 100);
const customer = new Customer("C", "D", "E", "F", "G");
const account = new Account(1, 100);
const savingAccount = new SavingAccount(2, 200);
const currentAccount = new CurrentAccount(3, 300);

bank.addAtm(atm);
console.log(bank.toString());
console.log(atm.toString());
console.log(atmTransaction.toString());
console.log(customer.toString());
console.log(account.toString());
console.log(savingAccount.toString());

account.deposit(100);
console.log(account.toString());
account.withdraw(50);
console.log(account.toString());

savingAccount.addInterest(0.5);
console.log(savingAccount.toString());

currentAccount.withdraw(100);
console.log(currentAccount.toString());
console.log(currentAccount.endOfMonth());
currentAccount.withdraw(500);
console.log(currentAccount.toString());
console.log(currentAccount.endOfMonth());