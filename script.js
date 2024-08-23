// Sample data
const inventoryData = [
    { id: 1, name: "Tomatoes", quantity: 50 },
    { id: 2, name: "Lettuce", quantity: 30 },
    { id: 3, name: "Cheese", quantity: 20 }
];


const menuData = [
    { id: 101, name: "Burger", price: 8.99 },
    { id: 102, name: "Pizza", price: 12.49 },
    { id: 103, name: "Salad", price: 6.99 }
];


// Function to populate inventory list
function populateInventoryList() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = '';
    inventoryData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: ${item.quantity}`;
        inventoryList.appendChild(li);
    });
}


// Function to populate menu list and update form
function populateMenuAndForm() {
    const menuList = document.getElementById('menuList');
    const menuItemSelect = document.getElementById('menuItem');
    menuList.innerHTML = '';
    menuItemSelect.innerHTML = '';


    menuData.forEach(item => {
        // Populate menu list
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        menuList.appendChild(li);


        // Populate update form select options
        const option = document.createElement('option');
        option.value = item.id;
        option.textContent = item.name;
        menuItemSelect.appendChild(option);
    });
}


// Function to handle form submission (update price)
document.getElementById('priceUpdateForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const menuItemId = parseInt(document.getElementById('menuItem').value);
    const newPrice = parseFloat(document.getElementById('newPrice').value);


    // Update price in menuData
    const menuItem = menuData.find(item => item.id === menuItemId);
    if (menuItem) {
        menuItem.price = newPrice;
        populateMenuAndForm(); // Refresh menu list and form
        alert(`Price updated successfully for ${menuItem.name}.`);
    } else {
        alert(`Menu item not found.`);
    }
});


// Initial population of inventory and menu lists
populateInventoryList();
populateMenuAndForm();


