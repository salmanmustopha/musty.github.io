  const boxes = document.querySelectorAll('.chefs');
  const xb = document.getElementById("xb")


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.3, // Trigger when 30% is visible
  });

  boxes.forEach(box => {
    observer.observe(box);
  });

const bxmenu = document.getElementById("bxmenu")
const home = document.getElementById("home")



document.getElementById("Burga").onclick = function(){

document.getElementById("two").style.display = "flex"
document.getElementById("seven").style.display = "flex"
document.getElementById("eight").style.display = "flex"
document.getElementById("one").style.display = "none"
document.getElementById("three").style.display = "none"
document.getElementById("four").style.display = "none"
document.getElementById("five").style.display = "none"
document.getElementById("six").style.display = "none"
}

document.getElementById("Pizza").onclick = function(){
document.getElementById("two").style.display = "none"
document.getElementById("seven").style.display = "none"
document.getElementById("eight").style.display = "none"
document.getElementById("one").style.display = "flex"
document.getElementById("three").style.display = "flex"
document.getElementById("four").style.display = "none"
document.getElementById("five").style.display = "none"
document.getElementById("six").style.display = "flex"
}
document.getElementById("Pasta").onclick = function(){
document.getElementById("two").style.display = "none"
document.getElementById("seven").style.display = "none"
document.getElementById("eight").style.display = "none"
document.getElementById("one").style.display = "none"
document.getElementById("three").style.display = "none"
document.getElementById("four").style.display = "flex"
document.getElementById("five").style.display = "flex"
document.getElementById("six").style.display = "none"
}
document.getElementById("Fries").onclick = function(){
document.getElementById("two").style.display = "none"
document.getElementById("seven").style.display = "none"
document.getElementById("eight").style.display = "none"
document.getElementById("one").style.display = "none"
document.getElementById("three").style.display = "flex"
document.getElementById("four").style.display = "flex"
document.getElementById("five").style.display = "none"
document.getElementById("six").style.display = "none"
}

// bxmenu.onclick = function(){
// home.style.width = "100%"
// navigator.style.display ="block";
// }

// document.getElementById("like").onclick = function(){

//   document.getElementById("likes").style.Color = "yellow"
// }

// xb.onclick = function(){
//   xb.style.display = "none"
//   xc.style.display = "flex"
// }
// xc.onclick = function(){
//   xb.style.display = "flex"
//   xc.style.display = "none"
// }


// xb.onclick = function(){
// //  document.getElementById("navbar").style.display = "none"; 

// //  document.getElementById("bhml").style.display = "none"; 
// //  document.getElementById("cont").style.display = "none"; 
//   xb.style.display = "none";
//   xc.style.display = "flex";
  
//   document.getElementById("navbar").style.display = "block"; 
//  document.getElementById("header") 
//   .style.height = "100%";
//    document.getElementById("header") 
//   .style.transition = "1s";  
// xc.style.margin = "-280px 300px";
// xb.style.margin = "-280px 300px";
// document.getElementById("bhml").style.display = ("block")
// document.getElementById("cont").style.display = ("flex")
// document.getElementById("bhml").style.width =("100%")
// document.getElementById("cont").style.margin = ("20px 0px")

// }
// xc.onclick = function(){
// //  document.getElementById("navbar").style.display = "block"; 

// //  document.getElementById("bhml").style.display = "block"; 
// //  document.getElementById("cont").style.display = "block"; 
//  xb.style.display = "flex";
//  xc.style.display = "none";

//   document.getElementById("header") 
//   .style.height = "100px";
//    document.getElementById("header") 
//   .style.transition = "1s";  
  
//   document.getElementById("navbar").style.display = "none"; 
//  document.getElementById("header") 
//   .style.height = "0";
// document.getElementById("bhml").style.display = ("none")
// document.getElementById("cont").style.display = ("none")
// document.getElementById("bhml").style.width =("100%")
// document.getElementById("cont").style.margin = ("20px 0px")

// }

  const menu = document.getElementById('navbar');
  const openBtn = document.getElementById('xb');
  const closeBtn = document.getElementById('xc');

  openBtn.onclick = () => {
    menu.classList.add('active');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
  };

  closeBtn.onclick = () => {
    menu.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  };

