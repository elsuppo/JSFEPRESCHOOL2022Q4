(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".header__burger"),n=document.querySelector(".header__nav"),t=document.querySelectorAll(".header__item"),o=document.querySelector("body"),s=document.querySelector(".shadow");function c(){n.classList.toggle("nav-open"),e.classList.toggle("is-active"),o.classList.toggle("body-hidden"),s.classList.toggle("shadow-enabled")}e.addEventListener("click",c),s.addEventListener("click",c);for(let c of t)c.addEventListener("click",(()=>{n.classList.remove("nav-open"),e.classList.remove("is-active"),s.classList.remove("shadow-enabled"),o.classList.remove("body-hidden")}))})(),console.log("В ССЫЛКЕ НА ПРОЕКТ ПОСЛЕ /plants ДОБАВЛЕНA ССЫЛКА НА ПАПКУ СБОРКИ /dist, Т.К. СБОРКА ВЫПОЛНЕНА С ПОМОЩЬЮ WEBPACK\n\n","Оценка: 85\n\n","1. Вёрстка соответствует макету. Ширина экрана 768px +24\n\n","- блок <header> +2\n","- секция welcome +3\n","- секция about +4\n","- секция service +4\n","- секция prices +4\n","- секция contacts +4\n","- блок <footer> + 3\n\n","2. Вёрстка соответствует макету. Ширина экрана 380px +24\n\n","- блок <header> +2\n","- секция welcome +3\n","- секция about +4\n","- секция service +4\n","- секция prices +4\n","- секция contacts +4\n","- блок <footer> + 3\n\n","3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n","- нет полосы прокрутки при ширине страницы от 1440рх до 380px +7\n","- нет полосы прокрутки при ширине страницы от 380px до 320рх +8\n\n","4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n","- при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2\n","- при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n","- адаптивное меню соответствует цветовой схеме макета +4\n","- при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n","- ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4\n","- при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n")}))})();