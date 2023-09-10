// transfer.js

// Sample customer data (replace this with data from your server)
const customersData = [
    { id: 1, name: "Customer 1", email: "customer1@example.com", balance: 1000 },
    { id: 2, name: "Customer 2", email: "customer2@example.com", balance: 2000 },
    { id: 3, name: "Customer 3", email: "customer3@example.com", balance: 1500 },
    // Add more customer objects as needed
];

// Function to populate sender and receiver dropdowns
function populateDropdowns() {
    const senderDropdown = document.getElementById("sender");
    const receiverDropdown = document.getElementById("receiver");

    customersData.forEach((customer) => {
        const option = document.createElement("option");
        option.value = customer.id;
        option.textContent = customer.name;
        senderDropdown.appendChild(option.cloneNode(true));
        receiverDropdown.appendChild(option);
    });
}

// Function to handle form submission (simulate the transfer process)
function handleTransfer(event) {
    event.preventDefault();

    const senderId = parseInt(document.getElementById("sender").value);
    const receiverId = parseInt(document.getElementById("receiver").value);
    const amount = parseFloat(document.getElementById("amount").value);

    const sender = customersData.find((customer) => customer.id === senderId);
    const receiver = customersData.find((customer) => customer.id === receiverId);

    if (!sender || !receiver) {
        alert("Invalid sender or receiver selection.");
        return;
    }

    if (sender.balance < amount) {
        alert("Insufficient balance for the transfer.");
        return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    alert(`Transfer of $${amount.toFixed(2)} from ${sender.name} to ${receiver.name} successful.`);

    // You can add code here to update the server with the transaction details.
}

// Populate dropdowns and attach form submission handler
window.addEventListener("load", () => {
    populateDropdowns();
    const transferForm = document.getElementById("money-transfer-form");
    transferForm.addEventListener("submit", handleTransfer);
});
