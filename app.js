// task3
// function deleteRow(button) {
//     const row = button.closest("tr");
//     row.remove(); 
// }

let counter = 0;

        
        function increaseCounter() {
            counter++;
            document.getElementById("counterValue").innerText = counter; 
        }

        
        function decreaseCounter() {
            counter--;
            document.getElementById("counterValue").innerText = counter;
        }