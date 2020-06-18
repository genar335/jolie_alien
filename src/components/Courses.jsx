import React from 'react';
import './componentStyles/Courses.scss';

function Courses(props) {

    //here be the fun stuff

    return(
        <div className="courses-main-container">
            <svg id="big-purple-circle" width="340" height="340" >
                <circle 
                    cx="170"
                    cy="170" 
                    r="170" 
                    stroke="none" 
                    fill="red"
                    id="css-circle-purple" />
            </svg>
            <div id="first-block" className="plain-course-block">
                <h3>Школа предлагает три курса:</h3>
                <li>Cоздание трека с нуля</li>
                <li>Cведение единой музыкальной дорожки из альтернативных музыкальных источников</li>
                <li>Oбучение игре на виниловых пластинках</li>
            </div>
            <svg id="big-yellow-circle" width="600" height="600" >
                <circle 
                    cx="300"
                    cy="300" 
                    r="300" 
                    stroke="none" 
                    fill="yellow"
                    id="css-circle-yellow" />
            </svg>
            <div id="second-block" className="plain-course-block">
                <h3>В рамках каждого из курсов набираются небольшие группы до пяти человек, которые впоследствии делятся по возрастным категориям:</h3>
                <li>Младшая (6-10 лет)</li>
                <li>Cредняя (10-14 лет)</li>
                <li>Cтаршая (14-18 лет)</li>
                <p>А так же мы предлагаем индивидульное обучение для детей с особенностями развития.</p>
            </div>
            <div id="third-block" className="plain-course-block">
                <h3>Каждый курс длится две недели, 2 занятия в неделю, по  2 часа, точное расписание устанавливается индивидуально, стоимость каждого курса 15 000 руб.</h3>
            </div>
        </div>
    );
}

export default Courses