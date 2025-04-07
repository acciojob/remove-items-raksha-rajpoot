//your JS code here. If required.
let select = document.getElementById("colorSelect");
let button = document.querySelector('input[type="button"]');

button.addEventListener('click', function() {
	 let selectedIndex = select.selectedIndex;
    if (selectedIndex !== -1) {
        select.remove(selectedIndex);
    }
});

