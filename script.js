//your code here!

const list = document.getElementById('list');
const loader = document.getElementById('loader');
let isLoading = false;

// Function to add more list items
function addMoreItems() {
    if (isLoading) return;
    isLoading = true;

    // Simulate an API call or other data loading process
    setTimeout(() => {
        const newItem1 = document.createElement('li');
        newItem1.textContent = `List Item ${list.children.length + 1}`;

        const newItem2 = document.createElement('li');
        newItem2.textContent = `List Item ${list.children.length + 2}`;

        list.appendChild(newItem1);
        list.appendChild(newItem2);

        isLoading = false;
        loader.style.display = 'none';
    }, 1000); // Simulated loading delay (adjust as needed)
}

// Detect when the user has scrolled to the bottom
list.addEventListener('scroll', () => {
    const scrollTop = list.scrollTop;
    const scrollHeight = list.scrollHeight;
    const clientHeight = list.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
        // Show loader and add more items
        loader.style.display = 'block';
        addMoreItems();
    }
});

// Initial load
addMoreItems();
