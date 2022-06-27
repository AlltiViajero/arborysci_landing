const img_tab = [];
const slider_tab = [];
let dist = 0;
let num = 0;
export class Landing {
    descrip = [
        {
            opis: 'Wycinka drzew'
        },{
            opis: 'Pielęgnacja drzew'
        },{
            opis: 'Frezowanie'
        },{
            opis: 'Prace ogrodnicze'
        }
]
    constructor(){
        this.init();
        this.container;
        this.description;
        this.logo;
        this.logo_;
        this.inter;
        // this.numer = Math.floor(Math.random()*5)+1;
        this.img;
        this.time;
        this.slider_;
        

    }
    init(){
        this.createContainer();
        this.createLogo();
        // this.create_Pic();
        this.create_description();
        this.create_enter();
        this.slider();
        this.slider_time();
    }
    createContainer(){
        this.container = document.createElement('div');
        this.container.classList.add('container');
        document.querySelector('body').appendChild(this.container);

        const hide_screen = document.createElement('div');
        hide_screen.classList.add('hide_screen');
        this.container.appendChild(hide_screen);
    };
    createLogo(){
        const logo_box = document.createElement('div')
        logo_box.classList.add('logo_box');
        this.container.appendChild(logo_box);

        this.logo = document.createElement('h1');
        this.logo.textContent = 'Arboryści';
        logo_box.appendChild(this.logo);

        this.logo_ = document.createElement('p');
        this.logo_.textContent = 'usługi arborystyczne i ogronicze';
        logo_box.appendChild(this.logo_);

        // const my_timeout = setTimeout(() => {
        //     logo_box.style.left = '30%';
        //     logo_box.style.top = '20%';
        // }, 500);
    }
    create_Pic(){
        const main_box = document.createElement('div')
        main_box.classList.add('main_box');
        this.container.appendChild(main_box);

        for (let i = 1; i <= 2 ; i++){
            const pic_box = document.createElement('div')
            pic_box.classList.add('pic_box');
            main_box.appendChild(pic_box);
            const img = document.createElement('img');
            img.src = `./foto/${i}.jpg`;
            pic_box.appendChild(img);
            img_tab.push(img);
        }          
    }
    create_description(){
        this.description = document.createElement('p');
        this.description.classList.add('description');
        this.description.textContent = this.descrip[0].opis;
        this.container.appendChild(this.description);
    }
    create_enter(){
        const enter = document.createElement('a');
        enter.href = 'main.html'
        enter.classList.add('enter');
        enter.textContent = 'zapraszamy';
        this.container.appendChild(enter);
    }
    slider(){
        this.slider_ = document.getElementById('slider');
        for (let i = 1; i <= 4; i++){
            const slide = document.createElement('div');
            slide.classList.add('slide');
            this.slider_.appendChild(slide);
            this.img = document.createElement('img');
            this.img.src = `./slajdy/slajd${i}.png`;
            slide.appendChild(this.img);
            slider_tab.push(this.img)
            if (i === 1){
                slide.setAttribute('id', 's1')
            }
        }  
    }
    slider_time(){
        this.time = setTimeout( () =>{
            this.slider_time();
            const s1 = document.getElementById('s1');
            s1.style.marginLeft = `${dist}%`;
            this.description.textContent = this.descrip[num].opis;
            dist-=20;
            num++;
            if(dist <= -80){
                dist = 0;
                num = 0;
            } 
        }, 3000)  
    }
};