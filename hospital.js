const wrapper = document.querySelector('.wrapper');

const btnpopup = document.querySelector('.btn-popup');


const iconclose = document.querySelector('.icon-close');

btnpopup.addEventListener('click', ()=>{wrapper.classList.add('active-popup');});

iconclose.addEventListener('click', ()=>{wrapper.classList.remove('active-popup');});


const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn');
const popupclose = document.querySelector('.pop');

vbtn.addEventListener('click', ()=>{popup.classList.add('active-wrapper');});

vpopupclose.addEventListener('click', ()=>{popup.classList.remove('active-wrapper');});


function gotolink(link){
	console.log(link.value);
	location.href = link.value;
}