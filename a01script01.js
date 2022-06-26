console.log("Array CRUD Operations");

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').disabled = true;
    document.getElementById('delete').disabled = true;
    document.getElementById('view').disabled = true;
    document.getElementById('edit').disabled = true;
    document.getElementById('odd').disabled = true;

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function search(num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return i;
            }
        }
        return -1;
    }

    function viewArray() {
        let printArray = "Current array is: ";
        for (let i = 0; i < arr.length; i++) {
            printArray += arr[i] + " ";
        }
        return printArray;
    }

    function addData(num) {
        arr.push(num);
    }

    function checkOdd() {
        let printArray = "Current array is: ";
        for (let i = 0; i < arr.length; i += 2) {
            printArray += arr[i] + " ";
        }
        return printArray;
    }

    document.querySelector('#input').addEventListener('blur', () => {
        console.log('Blur event called');
        // console.log(document.querySelector('#input').value);
        let input = document.querySelector('#input').value;
        if (search(+input) >= 0) {
            document.getElementById('add').disabled = true;
            document.getElementById('delete').disabled = false;
            document.getElementById('view').disabled = false;
            document.getElementById('edit').disabled = false;
            document.getElementById('odd').disabled = true;
            document.querySelector('#status').innerText = "Number present in array";
        } else {
            document.getElementById('add').disabled = false;
            document.getElementById('delete').disabled = true;
            document.getElementById('view').disabled = true;
            document.getElementById('edit').disabled = true;
            document.getElementById('odd').disabled = false;
            document.querySelector('#status').innerText = "Number not present in array";
        }
    });

    document.querySelector('#add').addEventListener('click', () => {
        console.log('Add Clicked');
        document.getElementById('add').disabled = true;
        let input1 = document.querySelector('#input').value;
        addData(+input1);
        document.querySelector('#status').innerText = "Number added to array";
        document.getElementById('view').disabled = false;
    });
    document.querySelector('#delete').addEventListener('click', () => {
        console.log('delete Clicked');
        confirm(`Do you want to delete ${input}`);
        arr.splice(search(input), 1);
        document.querySelector('#status').innerText = "Number deleted from array";
    });
    document.querySelector('#edit').addEventListener('click', () => {
        console.log('edit Clicked');
        let newValue = prompt("Enter new number: ");
        arr[search(input)] = newValue;
        document.querySelector('#status').innerText = `Number edited to ${newValue}`;
    });
    document.querySelector('#view').addEventListener('click', () => {
        console.log('View Clicked');
        document.querySelector('#output').innerHTML = viewArray();
        document.querySelector('#status').innerText = "";
    });
    document.querySelector('#odd').addEventListener('click', () => {
        console.log("Odd clicked");
        document.querySelector('#output').innerHTML = checkOdd();
        document.querySelector('#status').innerText = "";
    })

    console.log(viewArray());

});