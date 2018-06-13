import Slider from './slider';

let sliderText = document.querySelector("#slider-text");
let sliderTitle = document.querySelector("#slider-title");
let sliderSubTitle = document.querySelector("#slider-subtitle");
let sliderImage = document.querySelector("#slider-image");

let slider = new Slider({
    elements: [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Ipsum',
            image: '../../public/img/1.jpg',
            text: 'En este proyecto, trabajamos el fundamento de la marca. Se desea dirigir al cliente para que incurra en la marca. Se adueñe.'
        },
        {
            title: 'Lorem Ipsum 2',
            subtitle: 'Ipsum 2',
            image: '../../public/img/2.jpg',
            text: 'En el segundo Test, trabajamos el fundamento de la marca. Se desea dirigir al cliente para que incurra en la marca. Se adueñe.'

        }
    ],
    animationFunc: function(element){
        sliderTitle.innerHTML= element.title;
        sliderImage.src = element.image;
        sliderSubTitle.innerHTML = element.subtitle;
        sliderText.innerHTML = element.text;
    },
    speed: 3000
});

slider.play();