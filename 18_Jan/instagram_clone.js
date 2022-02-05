function changeColor(t) {


    if (t.classList.contains('red-class')) {
        t.setAttribute('class', 'fa fa-heart-o');
    } else {
        t.setAttribute('class', 'red-class fa fa-heart');
    }


}

// function change(t) {


//     if (t.classList.contains('main_img')) {

//         t.setAttribute('class', 'fa fa-heart-o');
//     } else {
//         t.setAttribute('class', 'red-class fa fa-heart');
//     }


// }


var myImage = document.getElementById("main_img");
// myImage.onmouseover = mouseOver;
// myImage.onmouseout = mouseOut;
myImage.onclick = click;


function mouseOver() {
    myImage.src = "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
}

function mouseOut() {
    myImage.src = "https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
}



function click() {
    changeColor();



}