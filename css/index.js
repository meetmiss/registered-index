var arr = ['upload/banner.jpg','upload/banner8.jpg', 'upload/banner5.jpg', 'upload/banner1.jpg', 'upload/banner.png','upload/banner3.jpg',  'upload/banner6.jpg','upload/banner2.jpg', 'upload/banner4.jpg', 'upload/banner7.jpg']
var focus = document.querySelector('.focus');
var banner = document.querySelector('.focus-pic  img');
var arrow_l = document.querySelector('.focus-pic .arrow-l');
var arrow_r = document.querySelector('.focus-pic .arrow-r');
// console.log(arrow_r)
var count = 0;
arrow_r.onmousedown = function () {
    if (count === arr.length - 1) {
        count = 0;
    } else {
        count++;
    }
    banner.src = arr[count];
};
arrow_l.onmousedown = function () {
    if (count === 0) {
        count = arr.length -1 ;
    } else {
        count--;
    }
    banner.src = arr[count];
}




