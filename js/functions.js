var ul = document.querySelector(".header > .navbar > ul").children;
var pages = document.querySelectorAll(".main > div");

var current_ul = ul[0];
var current_page = ul[0];

for (var i = 0; i < ul.length; i++){
    let li = ul[i], page = pages[i];
    li.addEventListener('click', () => {
        // removeSelectedClass();
        current_ul.classList.remove('active');
        current_page.classList.remove('active');
        li.classList.add('active');
        page.classList.add('active');
        current_ul = li;
        current_page = page;
        
    })
}

// function removeSelectedClass() {
//     for (let i = 0; i < ul.length; i++) {
//         const li = ul[i], page = pages[i];
//         li.classList.remove('active');
//         page.classList.remove('active');
//     }
// }