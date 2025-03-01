const bankAccount = {
  currentBalance: 250,
  transactions: [
    {
      prevAmount: 350,
      newAmount: 250,
      reason: "Donation",
    },
  ],
};

const donateMoney = (amount, onSuccess, onFail) => {
  if (bankAccount.currentBalance >= amount) {
    const prevAmount = bankAccount.currentBalance;
    const newAmount = prevAmount - amount;
    
    bankAccount.transactions.push({
      prevAmount,
      newAmount,
      reason: "Donation",
    });
    
    bankAccount.currentBalance = newAmount;
    onSuccess();
  } else {
    onFail();
  }
};

const payRent = (amount, onSuccess, onFail) => {
  if (bankAccount.currentBalance >= amount) {
    const prevAmount = bankAccount.currentBalance;
    const newAmount = prevAmount - amount;
    
    bankAccount.transactions.push({
      prevAmount,
      newAmount,
      reason: "Rent",
    });
    
    bankAccount.currentBalance = newAmount;
    onSuccess();
  } else {
    onFail();
  }
};
  
  /**
   * TEST CODE. DO NOT EDIT
   */
  
  const onSuccessEnglish = () => {
    console.log("Payment successful! Thank you!");
  };
  const onFailEnglish = () => {
    console.log("You do not have enough money to make this payment.");
  };
  
  const onSuccessDutch = () => {
    console.log("Betaling geslaagd! Dank u!");
  };
  const onFailDutch = () => {
    console.log("U heeft niet voldoende saldo om deze betaling te doen.");
  };
  
  donateMoney(100, onSuccessEnglish, onFailEnglish);
  console.log(bankAccount);
  
  payRent(100, onSuccessEnglish, onFailEnglish);
  console.log(bankAccount);
  
  donateMoney(100, onSuccessDutch, onFailDutch);
  console.log(bankAccount);
  
  /**
  * The console should print out the following:
  Payment successful! Thank you!
  {
  currentBalance: 150,
  transactions: [
    { prevAmount: 350, newAmount: 250, reason: 'Donation' },
    { prevAmount: 250, newAmount: 150, reason: 'Donation' }
  ]
  }
  Payment successful! Thank you!
  {
  currentBalance: 50,
  transactions: [
    { prevAmount: 350, newAmount: 250, reason: 'Donation' },
    { prevAmount: 250, newAmount: 150, reason: 'Donation' },
    { prevAmount: 150, newAmount: 50, reason: 'Rent' }
  ]
  }
  U heeft niet voldoende saldo om deze betaling te doen.
  {
  currentBalance: 50,
  transactions: [
    { prevAmount: 350, newAmount: 250, reason: 'Donation' },
    { prevAmount: 250, newAmount: 150, reason: 'Donation' },
    { prevAmount: 150, newAmount: 50, reason: 'Rent' }
  ]
  }
  * 
  */