'use strict'
const heroes = [
    {
        name: 'PHOENIX',
        skills: [
            {
            name: 'CURVEBALL',
            imgUrl: './ico/phoenix_1.svg',
            descr: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
                type: 'basic'
            },
            {
                name: 'HOT HANDS',
                imgUrl: './ico/phoenix_2.svg',
                descr: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
                type: 'basic'
            },
            {
                name: 'BLAZE',
                imgUrl: './ico/phoenix_3.svg',
                descr: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
                type: 'signature'
            },
            {
                name: 'RUN IT BACK',
                imgUrl: './ico/phoenix_4.svg',
                descr: 'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.',
                type: 'ultimate'
            }
        ]
    },
    {
        name: 'SAGE',
        skills: [
            {
                name: 'BARRIER ORB',
                imgUrl: './ico/sage_1.svg',
                descr: 'EQUIP a wall of ice. FIRE to create a line of wall that can be rotated with the movement keys. ALTERNATE FIRE to create a wall perpendicular to the first wall.',
                type: 'basic'
            },
            {
                name: 'HEALING ORB',
                imgUrl: './ico/sage_2.svg',
                descr: 'EQUIP a healing orb. FIRE to heal an ally or yourself over time, prioritizing the most damaged ally.',
                type: 'basic'
            },
            {
                name: 'SLOW ORB',
                imgUrl: './ico/sage_3.svg',
                descr: 'EQUIP a slowing orb. FIRE to throw a slowing orb that detonates upon landing, creating a lingering field that slows players caught inside of it.',
                type: 'signature'
            },
            {
                name: 'RESURRECTION',
                imgUrl: './ico/sage_4.svg',
                descr: 'EQUIP a resurrection ability. FIRE on a dead ally to begin resurrecting them, restoring them to full health after a short channel time.',
                type: 'ultimate'
            }
        ]
    },
    {
        name: 'JETT',
        skills: [
            {
                name: 'UPDRAFT',
                imgUrl: './ico/jett_1.svg',
                descr: 'EQUIP an updraft ability. After a brief windup, Jett propels herself upwards.',
                type: 'basic'
            },
            {
                name: 'TAILWIND',
                imgUrl: './ico/jett_2.svg',
                descr: 'EQUIP a tailwind ability. Jett dashes a short distance in the direction she is moving.',
                type: 'basic'
            },
            {
                name: 'SMOKE CLOUD',
                imgUrl: './ico/jett_3.svg',
                descr: 'EQUIP a smoke cloud ability. Jett throws a smoke cloud that obscures vision. HOLD the ability key to bend the cloud’s in-flight trajectory.',
                type: 'signature'
            },
            {
            name: 'BLADE STORM',
                imgUrl: './ico/jett_4.svg',
                descr: 'EQUIP a set of highly accurate throwing knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
                type: 'ultimate'
            }
        ]
    },
    {
        name: 'SOVA',
        skills: [
            {
                name: 'SHOCK BOLT',
                imgUrl: './ico/sova_1.svg',
                descr: 'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
                type: 'basic'
            },
            {
                name: 'OWL DRONE',
                imgUrl: './ico/sova_2.svg',
                descr: 'EQUIP a pilotable Owl Drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
                type: 'basic'
            },
            {
                name: 'RECON BOLT',
                imgUrl: './ico/sova_3.svg',
                descr: 'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt.',
                type: 'signature'
            },
            {
                name: 'HUNTER’S FURY',
                imgUrl: './ico/sova_4.svg',
                descr: 'EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
                type: 'ultimate'
            }]
        }
]
window.addEventListener('DOMContentLoaded', () => {
    let selectedHero = 'PHOENIX';
    const skillNodes = [];
    showSkills();
    moveElments();

    function switchHero() {
        const heroCards = document.querySelectorAll('.hero');
        heroCards.forEach(item => {
            item.addEventListener('click', (e) => {
                const heroName = e.currentTarget.querySelector('.hero__title').innerText;
                if(heroName === selectedHero) return;

                heroCards.forEach(card => {
                    card.classList.remove('hero_active')
                })
                e.currentTarget.classList.add('hero_active');
                selectedHero = heroName;
                showSkills();
                moveElments();
            })   
        })
    }
    switchHero();

    function showSkills() {
        const parentNode = document.querySelector('.skills__wrapper');
        const heroSkills = heroes.find(item => item.name === selectedHero).skills;
        skillNodes.length = 0;
        heroSkills.forEach(item => {
            let {name, imgUrl, descr, type} = item;
            type = type.toUpperCase();
            const skillNode =  document.createElement('div')
            skillNode.innerHTML = `<div class="skills__item">
                                        <div class="skills__title">${type}</div>
                                        <div class="skills__subtitle">${name}</div>
                                        <div class="skills__descr">${descr}</div>
                                        <div class="skills__ico">
                                            <img src=${imgUrl} alt="skill img">
                                        </div>
                                </div>`
            skillNodes.push(skillNode);                   
        })

        parentNode.innerHTML = '';
        for(let i = 0; i < 4; i++) {
            parentNode.insertAdjacentElement('beforeend', skillNodes[i]);     
        } 
    }
    
    function slideSkills() {     
        const btn = document.querySelector('.skills__next-btn')

        btn.addEventListener('click' , () => {
            const parentNode = document.querySelector('.skills__wrapper');
            const skills = Array.from(parentNode.children)
            skills.forEach(item => item.style.transform =  'translateX(-387px)')
            btn.setAttribute("disabled", "disabled");

            setTimeout(() => {
                skillNodes.push(skillNodes[0])
                skillNodes.shift()
                parentNode.innerHTML = '';
                skills.forEach(item => item.style.transform =  'translateX(0px)')
                
                for(let i = 0; i < 4; i++) {
                    parentNode.insertAdjacentElement('beforeend', skillNodes[i]);     
                } 
                btn.removeAttribute("disabled");
            },500)
            
        })    
    }
    slideSkills()


    function getRandomCoordinates() {
        var maxWidth = 1300; // Максимальная ширина блока
        var maxHeight = 730; // Максимальная высота блока
        
        var randomX = Math.floor(Math.random() * maxWidth); // Случайное значение для X координаты
        var randomY = Math.floor(Math.random() * maxHeight); // Случайное значение для Y координаты
      
        return {x: randomX, y: randomY}; // Возвращает объект с координатами X и Y
      }
        
    function moveElments() {
        const elems = document.querySelectorAll('.moving-elem__item')
        elems.forEach(item => {
            const coors = getRandomCoordinates();
            item.style.cssText = `top: ${coors.y}px; left: ${coors.x}px;`
        })
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 50);
      }
      
    function parallax() {
        let bg = document.querySelectorAll('.circle');
        for (let i = 0; i < bg.length; i++){
            const coorX = getRandomNumber();
            const coorY = getRandomNumber();
            window.addEventListener('mousemove', function(e) { 
                let x = e.clientX / window.innerWidth;
                let y = e.clientY / window.innerHeight;     
                bg[i].style.transform = 'translate(-' + x * coorX + 'px, -' + y * coorY + 'px)';
            });    
        }
    }
    parallax()
    // slider

    // $('.main__wrapper').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     margin: 20,
    // });

})