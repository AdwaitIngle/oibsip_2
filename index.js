var dark_mode = document.getElementById('dark')
var cont = document.querySelector('.container')
var home = document.getElementById('home')
var about = document.getElementById('about')
var skills = document.getElementById('skills')
var projects = document.getElementById('projects')
var contact = document.getElementById('contact')
var footer = document.querySelector('.footer')
var nav = document.querySelector('.top')
var count = 0
dark_mode.addEventListener('click',function(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    dark_mode.style.color = 'white'
    home.style.color = 'white'
    about.style.color = 'white'
    skills.style.color = 'white'
    projects.style.color = 'white'
    contact.style.color = 'white'
    nav.style.backgroundColor = 'rgb(9,0,22)'
    footer.style.backgroundColor = 'rgb(34,4,77)'

    count+=1
    if(count %2 == 0){
        dark_mode.style.color = 'black'
        home.style.color = 'black'
        about.style.color = 'black'
        skills.style.color = 'black'
        projects.style.color = 'black'
        contact.style.color = 'black'
        nav.style.backgroundColor = 'white'
        footer.style.backgroundColor = 'rgb(167, 96, 234)'
    }
})

var slider_img = document.querySelector('.slider-img');
var images = ['Project 1.png', 'Project 2.png', 'Project 3.png', 'Project 4.png', 'Project 5.png','Project 6.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "/icons/"+images[i]);
}

window.addEventListener('scroll',function(){
   /* nav.style.borderBottom = '1px solid rgb(182,167,167)'*/
   nav.style.boxShadow = '0 2px 2px 0 rgba(0, 0, 0, 0.2)'
})

home.addEventListener('click',function(){
    window.scrollTo(0,0)
})

about.addEventListener('click',function(){
    window.scrollTo(0,800)
})
skills.addEventListener('click',function(){
    window.scrollTo(0,1600)
})
projects.addEventListener('click',function(){
    window.scrollTo(0,2400)
})
contact.addEventListener('click',function(){
    window.scrollTo(0,3200)
})

var connect =  document.getElementById('connect')
var scroll = document.getElementById('scroll')
scroll.addEventListener('click',function(){
    window.scrollBy(0,800)
})
connect.addEventListener('click',function(){
    window.scrollBy(0,3200)
})