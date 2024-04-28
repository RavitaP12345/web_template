var cursor = document.querySelector("#cursor")
var blurCursor = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    blurCursor.style.left = dets.x-150+"px"
    blurCursor.style.top = dets.y-150+"px"
})

// var h4All = document.querySelectorAll("#nav h4")
// h4All.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         cursor.style.scale = 3
//         cursor.style.border = "2px solid white"
//         cursor.style.backgroundColor = "transparent"
//     })
//     elem.addEventListener("mouseleave", function(){
//         cursor.style.scale = 1
//         cursor.style.border = "0px solid greenyellow"
//         cursor.style.backgroundColor = "greenyellow"
//     })
// })







gsap.to("#nav", {
    backgroundColor : "black",
    duration: 0.5,
    height:"60px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
})

gsap.to("#main", {
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -50%",
        end:"top -100%",
        scrub : 2

    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:2,
    stranger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end : "top 58%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:2,
    stranger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        marker:true,
        start:"top 70%",
        end : "top 65%",
        scrub:3
    }
})







// document.getElementById("myForm").addEventListener('submit', function(event){
//     event.preventDefault();
//     submitForm();
// });

// function submitForm(){
//     var formData = new FormData;
//     formData.append('subscriberModel', JSON.stringify({
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         name : document.getElementById('mobile').value
//     }));
//     fetch('http://127.0.0.1:9999/sub/saveSubscriberDetails',{
//         method : 'POST',
//         body : formData
//     }).then(response => response.json())
//     .then(data =>{
//         alert('Data is saved successfully.');
//         document.getElementById('myForm').reset();
//     })
//     .catch(error =>{
//         console.error('Error :', error);
//         alert(error);
//     });
