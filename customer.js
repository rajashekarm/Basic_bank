// customers.js

// Sample customer data (replace this with data from your server)
const customersData = [
    { name: "Customer 1", email: "customer1@example.com", balance: 1000 },
    { name: "Customer 2", email: "customer2@example.com", balance: 2000 },
    { name: "Customer 3", email: "customer3@example.com", balance: 1500 },
    // Add more customer objects as needed
];

// Function to display customer data in the table
function displayCustomers() {
    const customerTableBody = document.getElementById("customer-table-body");

    customersData.forEach((customer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.balance}</td>
            <td><a href="view-customer.html?id=${customer.id}">View Details</a></td>
        `;
        customerTableBody.appendChild(row);
    });
}

// Call the displayCustomers function when the page loads
window.addEventListener("load", displayCustomers);
