let gMouseDownX = 0;
let gMouseDownY = 0;
let gMouseDownOffsetX = 0;
let gMouseDownOffsetY = 0;

function addListeners() {
    document.getElementById('cursorImage').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
    // window.addEventListener("resize",resizeFrame);
}
// function resizeFrame(){
// 	var w = window.innerWidth;
// 	var h = window.innerHeight;
// 	var deltaW = frame.style.width;
//     var deltaH = frame.style.height;
//     var frame = document.getElementById("frame");
//     frame.style.width = parseInt((deltaW/100)*w) + 'px';
//     frame.style.height = parseInt((deltaH/100)*h) + 'px';
// }
function mouseUp() {
    window.removeEventListener('mousemove', divMove, true);
    var img = document.getElementById('cursorImage');
    img.style= "cursor: auto";
}


function mouseDown(e) {
    gMouseDownX = e.clientX;
    gMouseDownY = e.clientY;

    var div = document.getElementById('cursorImage');
    var img = document.getElementById('image');

    img.style= "cursor: all-scroll";

    ///main base to dragging from overFlow and w3School
    let leftPart = "";
    if(!div.style.left)
        leftPart+="0px";    
    else
        leftPart = div.style.left;
    let leftPos = leftPart.indexOf("px");
    let leftNumString = leftPart.slice(0, leftPos); 
    gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString,10);

   
    let topPart = "";
    if(!div.style.top)
        topPart+="0px";     
    else
        topPart = div.style.top;
    let topPos = topPart.indexOf("px");
    let topNumString = topPart.slice(0, topPos);    
    gMouseDownOffsetY = gMouseDownY - parseInt(topNumString,10);

    window.addEventListener('mousemove', divMove, true);
}
///////////               ////////////           /////////////

function divMove(e){
    var div = document.getElementById('cursorImage');
    div.style.position = 'relative';
    let topAmount = e.clientY - gMouseDownOffsetY;
    div.style.top = topAmount + 'px';
    let leftAmount = e.clientX - gMouseDownOffsetX;
    div.style.left = leftAmount + 'px';
}

addListeners();
var images = ["map-s","map-m","map-l","map-xl"];
var index = 0;
function zoomIn(){
    
    console.log("index out",index);
    if(index==0||index==1||index==2){
        console.log("index in",index);
        index++;
        var img = document.getElementById("image");
        var div = document.getElementById('cursorImage');
        var frame = document.getElementById("frame");
        console.log(frame.offsetWidth);
        var frameH = frame.offsetHeight/2;
        var frameW = frame.offsetWidth/2;
        
         img.src = images[index] +".gif";
        // div.innerHTML ='';
        // div.appendChild(imagesObj[index]);
        var newwidth = 0;
        var newheight = 0;

        switch (index) {
            case 1:
                newwidth = 2047;
                newheight = 1589;

                break;
            case 2:
                newwidth = 3063;
                newheight = 2373;

                break;
            case 3:
                newwidth = 4084;
                newheight = 3164;

                break;
        
            default:
                break;
        }


        var oldwidth = img.width;
        var oldheight = img.height;
        
        console.log(img.style.left);
        console.log("div new width",newwidth);
        console.log("old width",oldwidth);
        var left = div.style.left.replace('px','') == '' ? 0 :parseInt(div.style.left.replace('px',''));
        var top = div.style.top.replace('px','') == '' ? 0 :parseInt(div.style.top.replace('px',''));
        
        console.log(left)

        div.style.position = 'relative';
        div.style.top = top  - ((newheight - oldheight)-frameH)+"px";;
        div.style.left = left - ((newwidth - oldwidth)-frameW)+"px";


    }   //1283 × 997
        //2047 × 1589
        //3063 × 2373
        //4084 × 3164

}
function zoomOut(){
    console.log("index zoom out out",index);
    if(index==1||index==2||index==3){
        var img = document.getElementById("image");
        var div = document.getElementById('cursorImage');
        var frame = document.getElementById("frame");
        
        index=index-1;
         img.src = images[index] +".gif";
        //  div.innerHTML ='';
        //  div.appendChild(imagesObj[index]);
        
        console.log("index zoom out in",index);
        console.log(frame.offsetWidth);
        var frameH = frame.offsetHeight/2;
        var frameW = frame.offsetWidth/2;

        
        
        var newwidth = 0;
        var newheight = 0;

        switch (index) {
            case 0:
                newwidth = 1283;
                newheight = 997;

                break;
            case 1:
                newwidth = 2047;
                newheight = 1589;
                break;
            case 2:
                newwidth =3063;
                newheight = 2373;


                break;
        
            default:
                break;
        }
        var oldwidth = img.width;
        var oldheight = img.height;



        console.log("div new width",newwidth);
        console.log("old width",oldwidth);
        var left = div.style.left.replace('px','') == '' ? 0 :parseInt(div.style.left.replace('px',''));
        var top = div.style.top.replace('px','') == '' ? 0 :parseInt(div.style.top.replace('px',''));
        
        console.log("out",left);

        div.style.position = 'relative';
        div.style.top = top  + ((newheight-oldheight)+frameH)+"px";;
        div.style.left = left + ((newwidth-oldwidth)+frameW)+"px";
    }

}
//IMAGE PRELOADER
 //var imagesObj = [];

// function preloader() {
// 	if (document.images) {

// 		var img0 = new Image();
// 		var img1 = new Image();
//         var img2 = new Image();
//         var img3 = new Image();

//         // img0.id = "image";
//         // img1.id = "image";
//         // img2.id = "image";
//         // img3.id = "image";
//         // img0.addEventListener("ondragstart",function(){return false});
//         // img1.addEventListener("ondragstart",function(){return false});
//         // img2.addEventListener("ondragstart",function(){return false});
//         // img3.addEventListener("ondragstart",function(){return false});
//         img0.addEventListener("ondragstart",function(){return false});
//         img1.addEventListener("ondragstart",function(){return false});
//         img2.addEventListener("ondragstart",function(){return false});
//         img3.addEventListener("ondragstart",function(){return false});

// 		img0.src = "map-s.gif";
// 		img1.src = "map-m.gif";
//         img2.src = "map-l.gif";
//         img3.src = "map-xl.gif";
//         imagesObj.push(img0);
//         imagesObj.push(img1);
//         imagesObj.push(img2);
//         imagesObj.push(img3);

// 	}
// }
// function addLoadEvent(func) {
// 	var oldonload = window.onload;
// 	if (typeof window.onload != 'function') {
// 		window.onload = func;
// 	} else {
// 		window.onload = function() {
// 			if (oldonload) {
// 				oldonload();
// 			}
// 			func();
// 		}
// 	}
// }
// addLoadEvent(preloader);

//!!!IMAGE PRELOADER WORKING + DRAGGING WORKING!!!
window.onload = function() {

	setTimeout(function() {

        var img0 = new Image();
 		var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        // preload image
        
        img0.id = "image";
        img1.id = "image";
        img2.id = "image";
        img3.id = "image";

        img0.src = "map-s.gif";
		img1.src = "map-m.gif";
        img2.src = "map-l.gif";
        img3.src = "map-xl.gif";
       

	}, 10000);

};   

//    OFFICIAL ZOOM IN AND OUT
//var incx,incy;
// function zoomIn(){
//     var img = document.getElementById('image');
//     var divFrame = document.getElementById('frame');
//     var cx = img.offsetWidth/400;
//     var ch = img.offsetHeight/400;
//     var newwidth = parseInt(divFrame.offsetWidth*cx);
//     incx = img.style.width.replace('px','') - parseInt(divFrame.offsetWidth*cx) + 'px';
//     img.style.width = parseInt(divFrame.offsetWidth*cx) + 'px';
//     img.style.height = parseInt(divFrame.offsetHeight*ch) + 'px';
//     var newheigth = parseInt(divFrame.offsetHeight*ch);
//     incy = img.style.height.replace('px','') - newheigth;
//     // var div = document.getElementById('cursorImage');
//     // div.style.position = 'relative';
//     // let topAmount = (parseInt(((divFrame.offsetHeight*ch)/2)  - 200)- parseInt(divFrame.offsetHeight/2))*(-1);
//     // div.style.top = topAmount + 'px';
//     // let leftAmount = (parseInt(((divFrame.offsetWidth*cx)/2) - 200) - parseInt(divFrame.offsetWidth/2))*(-1);
//     // div.style.left = leftAmount + 'px';
//     // console.log(cx);
//     // console.log(ch);
//     // console.log(divFrame.offsetWidth);
// }
// function zoomOut(){
//     var img = document.getElementById('image');
//     var divFrame = document.getElementById('frame');
//     var cx = img.offsetWidth/divFrame.offsetWidth;
//     var ch = img.offsetHeight/divFrame.offsetHeight;
//     img.style.width = img.style.width.replace('px','') - incx + 'px';
//     img.style.height = img.style.height.replace('px','') - incy + 'px';
// }

function moveUp(){
    var div = document.getElementById('image');
    div.style.position = 'relative';
    let topAmount = 10;
    div.style.top = parseInt(div.style.top.replace('px','')  - topAmount) + 'px';
}
function moveDown(){
    var div = document.getElementById('image');
    div.style.position = 'relative';
    let topAmount = -10;
    div.style.top = parseInt(div.style.top.replace('px','')  - topAmount) + 'px';
}
function moveLeft(){
    var div = document.getElementById('image');
    div.style.position = 'relative';
    let leftAmount = 10;
    div.style.left = parseInt(div.style.left.replace('px','')  - leftAmount) + 'px';
}
function moveRight(){
    var div = document.getElementById('image');
    div.style.position = 'relative';
    let leftAmount = -10;
    div.style.left = parseInt(div.style.left.replace('px','')  - leftAmount) + 'px';
}
