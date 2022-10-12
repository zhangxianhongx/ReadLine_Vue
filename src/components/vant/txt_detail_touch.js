function addLinsten() {
    document.addEventListener('touchstart', touch, false); 
    document.addEventListener('touchmove',touch, false);  
    document.addEventListener('touchend',touch, false); 
}
function removeLinsen() {
    document.removeEventListener('touchstart', touch);
    document.removeEventListener('touchmove', touch);
    document.removeEventListener('touchend',touch);
}
function touch (event){  
        var e = event || window.event;  
           
        // var oInp = document.getElementById("test");  
   
        switch(event.type){  
            case "touchstart": 
            // console.log('touchstart：手指按下时触发', e);    
                window.dTouchStart(e)
// alert('start')
                break;  
            case "touchend":  
                // console.log('touchend：手指离开时触发', e);
                window.dTouchEnd(e)
// alert('end')
                break;  
            case "touchmove":  
                event.preventDefault();  
                // alert('move')
                // console.log('touchmove:手指拖动时触发', e)
                window.dTouchMove(e)
                break;  
        }  
           
}

export {
    // touchStart,
    // touchEnd,
    // touchMove
    addLinsten,
    removeLinsen
}