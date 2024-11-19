// Selecting DOM elements
const itemInput = document.querySelector("#item-input");
const priceInput = document.querySelector("#price-input");
const addBtn = document.querySelector(".btn");
const itemList = document.querySelector(".items");
const totalPriceDisplay = document.querySelector("#total-price");
// const calculateTotalBtn = document.querySelector("#calculate-total");
const clearItems = document.querySelector(".btn-clear");
const dateInput = document.querySelector('#date-input')
// Initial total price
let totalPrice = 0;

// Function to add an item to the list
const addItem = (e) => {
  e.preventDefault();
  const itemName = itemInput.value.trim();
  const itemPrice = parseFloat(priceInput.value).toFixed(2);
  const itemDate = dateInput.value;
  if (itemName === "" || isNaN(itemPrice) || itemDate === "") {
    alert("Please enter a valid item name and price and date.");
    return;
  }

  // Create list item and its content
  const li = document.createElement("li");
  li.innerHTML = `${itemName} - $${itemPrice} - ${itemDate}`;
//  li.innerHTML =  `${itemName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;$${itemPrice}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;${itemDate}`;

  const btn = document.createElement("button");
  btn.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  btn.appendChild(icon);
  li.appendChild(btn);
  itemList.appendChild(li);

  // Update total price
  totalPrice += parseFloat(itemPrice);
  totalPriceDisplay.textContent = totalPrice.toFixed(2);

    // updateTotalPrice();

  // Clear input fields
  itemInput.value = "";
  priceInput.value = "";
  dateInput.value = "";
};

// Function to remove an item from the list
const removeItems = (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    const li = e.target.closest("li");
    const itemPrice = li.textContent.split('$')[1];
    totalPrice -= parseFloat(itemPrice);
    totalPriceDisplay.textContent = totalPrice.toFixed(2)
    itemList.removeChild(li);
    
    // updateTotalPrice();
  }
};

const updateTotalPrice = () => {
  const items = itemList.querySelectorAll('li')
  const total = Array.from(items).reduce((sum, li) => {
    // console.log(items);
    const priceText = li.textContent.split('$')[1]
    // console.log(priceText);
    const itemPrice = parseFloat(priceText)
    // console.log(sum,li) 
    return sum + (isNaN(itemPrice) ? 0 : itemPrice)  
  }, 0)
  totalPriceDisplay.textContent = total.toFixed(2)
}


function removeAllItems() {
  itemList.innerHTML = "";
  totalPrice = 0;
  totalPriceDisplay.textContent = totalPrice.toFixed(2);   // use text content for plain text(effective way)
  // totalPriceDisplay.innerHTML = totalPrice.toFixed(2);
  // updateTotalPrice();
}

// Event listeners
addBtn.addEventListener("click", addItem);
itemList.addEventListener("click", removeItems);
clearItems.addEventListener("click", removeAllItems);




















// let i = 0;
// const updateTotalPrice = ()=> {
//   const items = document.querySelectorAll('.items')
//   const arr = Array.from(items)
//   console.log(arr);
//   const total = Array.from(items).reduce((sum, li) => {
//     console.log(li.textContent.split('$'))
//     const itemText = li.textContent.split('$')[i+1];
//     console.log(itemText);;
//     const itemPrice = parseFloat(itemText)
//     console.log(itemPrice);
//     i++;
//     console.log(i);
//     console.log(sum);
//     return sum + (isNaN(itemPrice) ? 0: itemPrice);
//   }, 0)
//   console.log(total);
//   totalPriceDisplay.textContent = total.toFixed(2);
// }




// const item = document.querySelector('.form-input')
// const addBtn = document.querySelector('.btn')
// const item_list = document.querySelector('.items')
// const addItem = (e) => {
  //     e.preventDefault();
  //     const li = document.createElement('li')
  //     li.appendChild(document.createTextNode(item.value))
  
  //     const btn = document.createElement('button')
//     btn.className = "remove-item btn-link text-red"

//     const icon = document.createElement('i')
//     icon.className = "fa-solid fa-xmark"

//     btn.appendChild(icon)
//     li.appendChild(btn)
//     item_list.appendChild(li);
//     item.value = '';
// }

// const removeItems = (e) => {
//     if (e.target.classList.contains('fa-xmark')) {
//         const li = e.target.closest('li')
//         item_list.removeChild(li)
//     }

//     // can check if there is any items in the ul or not
//     /*if (item_list.children.length === 0) {
//         console.log(item_list)
//       setTimeout(() => {
//         confirm("Did you add items?")
//       }, 2000);
//     }*/

// }

// addBtn.addEventListener('click', addItem)
// item_list.addEventListener('click',removeItems)
