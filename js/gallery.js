const imgfull = document.querySelector('.full-img');
const imgdisplay = document.querySelector('.displayed-img');
const bar = document.querySelector('.thumb-bar');
const btndark = document.querySelector('.btn');

for (let j = 1; j <= 5; j++) {
    let newimg = document.createElement("img");
    newimg.setAttribute("class", "imgbar");
    newimg.setAttribute("src", "img/pic" + j + ".jpg");
    console.log(newimg);
    bar.appendChild(newimg);
}

// setTimeout(function() {
//     console.log('wait');
// }, delayInMilliseconds);

const imgbar = document.querySelectorAll('.imgbar');
for (let i = 0; i < imgbar.length; i++){
    imgbar[i].onclick = () => {
        console.log(imgbar[i].src);
        imgdisplay.setAttribute("src",imgbar[i].src);
    }
}

btndark.onclick = () => {
    if (btndark.textContent === "Darken") {   
        imgdisplay.setAttribute("class", "dark");
        btndark.textContent = "Lighten";
    } else {
        btndark.textContent = "Darken";
        imgdisplay.setAttribute("class", " ");
    }
    
}