const price = 19.5;
const cid = [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
];

const cashInput = document.getElementById('cash');
const changeDueElement = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');

purchaseBtn.addEventListener("click", () => {
  const cashGiven = parseFloat(cashInput.value);
  if (Number.isNaN(cashGiven)) {
    alert("Please enter a valid number");
    return;
  }

  if (cashGiven < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  const changeDue = cashGiven - price;
  if (changeDue === 0) {
    changeDueElement.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const change = calculateChange(changeDue, cid);
  if (change.status === "INSUFFICIENT_FUNDS") {
    changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
  } else if (change.status === "CLOSED") {
    changeDueElement.textContent = `Status: CLOSED ${change.change.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" ")}`;
  } else {
    changeDueElement.textContent = `Status: OPEN ${change.change.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" ")}`;
  }
});

function calculateChange(changeDue, cid) {
  const change = [];
  const denominations = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let totalCid = cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2);

  for (let i = denominations.length - 1; i >= 0; i--) {
    const [denomination, value] = denominations[i];
    let amountInDrawer = cid[i][1];
    let amountToReturn = 0;

    while (changeDue >= value && amountInDrawer > 0) {
      changeDue -= value;
      changeDue = Math.round(changeDue * 100) / 100;
      amountInDrawer -= value;
      amountToReturn += value;
    }

    if (amountToReturn > 0) {
      change.push([denomination, amountToReturn]);
    }
  }

  const totalChangeGiven = change.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2);

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid == totalChangeGiven) {
    return { status: "CLOSED", change: change };
  }

  return { status: "OPEN", change: change };
}
