# Cash-Register
This is a Cash Register project;
#Project Title 🚀
Cash-Register

## Project Description 📝

This project is a cash register application designed to calculate change and manage cash transactions. It allows users to input a purchase price and the amount paid by the customer, then calculates the change due. The application considers the available cash in the drawer (CID) and determines whether the transaction results in "INSUFFICIENT_FUNDS", "CLOSED", or remains "OPEN". It handles various denominations (PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONE HUNDRED) and displays the status of the transaction dynamically on the screen.

## Demo 📸
[Live Demo](https://iamfarhatsharefi.github.io/Cash-Register/)
![Screenshot](./Cash-Register%20screenshot.png)

## Technologies Used 🛠️


- HTML

<body>
  <div class="container">
    <h1>Cash Register</h1>
    <div class="input-group">
      <label for="cash">Cash Given:</label>
      <input type="number" id="cash" min="0" step="0.01">
    </div>
    <div class="result" id="change-due"></div>
    <button id="purchase-btn">Purchase</button>
  </div>
  <script src="script.js"></script>
</body>

- CSS

@media (min-width: 1200px) {
  .container {
    max-width: 500px;
  }

  h1 {
    font-size: 2.5em;
  }

  input[type="number"],
  button {
    font-size: 18px;
  }
}

-java script

ICIENT_FUNDS';
  } else if (change.status === 'CLOSED') {
    changeDueElement.textContent = `Status: CLOSED ${change.change.map((c) => `${c[0]}: $${c[1].toFixed(2)}`).join(' ')}`;
  } else {
    changeDueElement.textContent = `Status: OPEN ${change.change.map((c) => `${c[0]}: $${c[1].toFixed(2)}`).join(' ')}`;
  }
});


## Installation 💻

Installation and Setup Instructions:
Clone the Repository:
git@github.com:iamfarhatsharefi/Cash-Register.git
Navigate to the Project Directory:
cd Cash-Register


## Usage 🎯

Step 1: Find and Access the Repository
Navigate to the Repository:
Open your web browser and go to GitHub.
Use the search bar to find the repository you want to use, or navigate directly to the repository's URL.
Step 2: Clone the Repository
Copy the Repository URL:

On the repository's main page, click the green "Code" button.
Copy the URL 
Clone the Repository to Your Local Machine:
git@github.com:iamfarhatsharefi/Cash-Register.git

Open your terminal or command prompt.
Navigate to the directory where you want to clone the repository.
Replace repository with the name of the cloned repository

## Features ⭐

. Calculates change based on the purchase price and amount paid.
. Handles multiple denominations and checks available cash in the drawer.
. Displays transaction status (INSUFFICIENT_FUNDS, CLOSED, OPEN) based on CID and transaction outcome.
. Responsive design for both desktop and mobile platforms.
. Uses modern JavaScript (ES6+) and adheres to best coding practices.
. Interactive UI with alerts for invalid inputs and transaction outcomes.

## Author 👩‍💻
[Linkedin](https://www.linkedin.com/in/farhat-sharefi-13a101309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- [Email](sharefifarhat@gmail.com)
