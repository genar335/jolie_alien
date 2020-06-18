import React from 'react';
import './componentStyles/About.scss';
import babyOne from '../GAssets/babyOne.jpeg';
import biggerBaby from '../GAssets/biggerBaby.jpeg'
import babyNAdult from '../GAssets/babyNAdult.jpeg'

function About(props) {

    //here be the fun stuff

    return(
        <div className="abt-main-container">
            <div className="big-img-container">
                <img src={babyOne} alt="kartinka" id="abt-big-img"/>
            </div>
            <div className="plain-text-div">
                <svg id="big-blue-circle" width="260" height="260" >
                        <circle 
                            cx="130"
                            cy="130" 
                            r="130" 
                            stroke="none" 
                            fill="blue"
                            id="css-circle-blue" />
                </svg>
                <h2 className="about-header">Школа диджеинга "Хопля" это пространство для детей и подростков, где обучение является экспериментом.</h2>
            </div>
            <div className="plain-text-div">
                <svg id="big-light-blue-circle" width="460" height="460" >
                        <circle 
                            cx="230"
                            cy="230" 
                            r="230" 
                            stroke="none" 
                            fill="#dae4fb"
                            id="css-circle-ligh-blue" />
                </svg>
                <p>Знакомство с электронной музыкой здесь происходит посредством выбора только того, что действительно нравится, а складывание и смешивание этого порождает новый микромир. Сегодня все вокруг нас становится виртуальным, запутанным и чрезмерным. Нет времени, желания и сил заниматься тем, что не интересно, но хочется обладать современными навыками и ориентироваться во всем новом.</p>
            </div>
            
            <img src={biggerBaby} alt="Бэбик. но больше" id="bigger-Baby" />
            
            <div className="plain-text-div">
                <p>Именно поэтому мы предлагаем курсы для маленьких и подрастающих, посредством которых  формируется музыкальный. Благодаря свободе выбора из множества существующей и появляющейся музыки участники понимают, что им действительно нравится, учатся переосмысливать сделанное и создавать на основе этого новое, вкладывая в это свое восприятие окружающей действительности.</p>
            </div>

            <img src={babyNAdult} alt="Бэбик, но ещё больше" id="babby-and-adult" />

            <div className="plain-text-div">
                <svg id="big-blue-circle-two" width="260" height="260" >
                    <circle 
                        cx="130"
                        cy="130" 
                        r="130" 
                        stroke="none" 
                        fill="blue"
                        id="css-circle-blue-two" />
                </svg>
                <p>Сегодня музыка является универсальным языком, способным объединять единомышленников по всеми миру. Именно поэтому альтернативное обучение музыке способно развить и расширить круг общения вашего ребенка, что немаловажно для здорового роста эмоционального интелекта.</p>
            </div>
            <div className="plain-text-div">
                <svg id="big-light-blue-circle-two" width="460" height="460" >
                    <circle 
                        cx="230"
                        cy="230" 
                        r="230" 
                        stroke="none" 
                        fill="#dae4fb"
                        id="css-circle-ligh-blue-two" />
                </svg>
                <h2 className="about-header">Обучение в нашей школе это развивающая игра, строящаяся на индивидуальном подходе и учитывающая личные вкусы каждого.</h2>
            </div>
            <div className="plain-text-div">
                <p>Мы учим слышать музыку, попадать в бит, рассказываем структуру трека, помогаем освоить все нужные навыки пользования профессиональной техникой.</p>
            </div>
        </div>
    );
}

export default About