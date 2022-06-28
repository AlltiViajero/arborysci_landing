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
        this.inter;
        this.img;
        this.time;
        this.slider_;
    }
    init(){
        this.bind_Elements();
        this.slider();
        this.slider_time();
    }
    bind_Elements(){
        this.container = document.querySelector('.container');
        this.description = document.querySelector('.description');
    };
    slider(){
        this.slider_ = document.getElementById('slider');
        for (let i = 1; i <= 4; i++){
            const slide = document.createElement('div');
            slide.classList.add('slide');
            this.slider_.appendChild(slide);
            this.img = document.createElement('img');
            this.img.src = `./slajdy/slajd${i}.png`;
            slide.appendChild(this.img);
            slider_tab.push(this.img);
            if (i === 1){
                slide.setAttribute('id', 's1')
            };
        }; 
    };
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
            };
        }, 4000);  
    };
};