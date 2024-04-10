// Task 1
// Task 2
let h1 = document.querySelector('h1');

// Task 3
let arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]

// Task 4
function handleClicks(){
    switch(h1.innerText){
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}

// task 5
addEventListener('click', handleClicks);