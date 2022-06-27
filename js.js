function show_time ()								//funkcja wyświetlająca czas
		{		 
			let dzisiaj = new Date();						//pobiera datę i zapisuje ją w zmiennej dzisiaj
			let dzien = dzisiaj.getDate();				//pobiera dzień ze zmiennej dzisiaj i zapisuje w zmiennej dzień
			let miesiac = dzisiaj.getMonth()+1;
			let rok = dzisiaj.getFullYear();
			let godzina = dzisiaj.getHours();
			if (godzina<10) godzina="0"+godzina;
			let minuta = dzisiaj.getMinutes();
			if (minuta<10) minuta="0"+minuta;
			let sekunda = dzisiaj.getSeconds();
			if (sekunda<10) sekunda="0"+sekunda;
			document.getElementById("clock").innerHTML =									//w dokumencie znajdz element o id zegar i w HTMLu wyświetl:
			dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda; 
			
			setTimeout("show_time()", 1000); 		//funkcja powtarzająca wykonanie innej funkcji co 1000 milisekund
		}

let main_page = document.getElementById("main_page");
let oferts = document.getElementById("oferts");
let price = document.getElementById("price");
let contact = document.getElementById("contact");

window.addEventListener('scroll', ()=>{
    if (oferts.getBoundingClientRect().top < window.innerHeight * 0.8){
        oferts.style.opacity = 1;
    }
    if (price.getBoundingClientRect().top < window.innerHeight * 0.8){
        price.style.opacity = 1;
    }
    if (contact.getBoundingClientRect().top < window.innerHeight * 0.8){
        contact.style.opacity = 1;
    }	
})
const clock = document.getElementById('clock');
const btn = document.getElementById("btn");
const nav_menu = document.querySelector(".nav_menu");
btn.addEventListener("click", function(){
    btn.classList.toggle("icon-cancel");
    btn.classList.toggle("icon-menu");
    nav_menu.classList.toggle("active");
	display_clock();
	
});
function display_clock(){
	if (nav_menu.classList.contains('active')){
		clock.style.display = 'none';
	} else {
		clock.style.display = 'block';
	}
}

function close_menu_when_click_scroll(){
	if (nav_menu.classList.contains('active')){
		nav_menu.classList.remove("active");
		btn.classList.toggle("icon-cancel");
		btn.classList.toggle("icon-menu");
		display_clock();
	} else return;
}
let mp = document.getElementById("mp");
let of = document.getElementById("of");
let pri = document.getElementById("pri");
let con = document.getElementById("con");
mp.addEventListener('click', () => close_menu_when_click_scroll())
of.addEventListener('click', () => close_menu_when_click_scroll())
pri.addEventListener('click', () => close_menu_when_click_scroll())
con.addEventListener('click', () => close_menu_when_click_scroll())
