import React from 'react';
import './componentStyles/Courses.scss';

function Courses(props) {

    //here be the fun stuff

    return(
        <div className="courses-main-container">
            <div className="highlighted-course-block">
                <p>Школа предлагает три курса:</p>
                <li>создание трека с нуля</li>
                <li>сведение единой музыкальной дорожки из альтернативных музыкальных источников</li>
                <li>обучение игре на виниловых пластинках</li>
            </div>
            <div className="plain-course-block">
                <p>В рамках каждого из курсов набираются небольшие группы до пяти человек, которые впоследствии делятся по возрастным категориям:</p>
                <li>младшая (6-10 лет)</li>
                <li>средняя (10-14 лет)</li>
                <li>старшая (14-18 лет)</li>
                <p>А так же мы предлагаем индивидульное обучение для детей с особенностями развития.</p>
            </div>
            <div className="highlighted-course-block">
                <p>Каждый курс длится две недели 2 занятия в неделю по  2 часа, точное расписание устанавливается индивидуально, стоимость каждого курса 15 000 руб.</p>
            </div>
        </div>
    );
}

export default Courses