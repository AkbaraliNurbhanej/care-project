
var MainImg = document.getElementById("mainImg");
var SmallImg = document.getElementsByClassName("smallImg");

function imageSrcChange(index){
    MainImg.src = SmallImg[index].src;
};
SmallImg[0].onclick = function(){
    MainImg.src = SmallImg[0].src;
};

SmallImg[1].onclick = function(){
    MainImg.src = SmallImg[1].src;
};

SmallImg[2].onclick = function(){
    MainImg.src = SmallImg[2].src;
};

SmallImg[3].onclick = function(){
    MainImg.src = SmallImg[3].src;
};


// var MainImg = document.getElementById("mainImg");
// var SmallImg = document.getElementsByClassName("smallImg");

// SmallImg[0].onclick = function () {
//     MainImg.src = SmallImg[0].src;
// };

// SmallImg[1].onclick = function () {
//     MainImg.src = SmallImg[1].src;
// };

// SmallImg[2].onclick = function () {
//     MainImg.src = SmallImg[2].src;
// };

// SmallImg[3].onclick = function () {
//     MainImg.src = SmallImg[3].src;
// };