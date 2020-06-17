import React from 'react';
import './componentStyles/About.scss';
import testPic from '../GAssets/testPic.jpg'

function About(props) {

    //here be the fun stuff

    return(
        <div className="abt-main-container">
            <h2>О Нас</h2>
            <div className="big-img-container">
                <img src={testPic} alt="kartinka" id="abt-big-img"/>
            </div>
            <div className="highlighted-text-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eleifend arcu, nec commodo lectus. Vestibulum mattis eros dictum, dictum sem id, sollicitudin risus. In lobortis quam id tortor pretium, vitae hendrerit ante vehicula. Donec ornare dolor quis odio rutrum, nec auctor tellus pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris quis vulputate velit. Nullam at tempus sem. Nulla in neque eget massa pretium scelerisque. Cras vitae turpis a enim luctus venenatis id sit amet purus.</p>
            </div>
            <div className="regular-text-div">
                <p>Sed venenatis lacus nec varius scelerisque. Sed consectetur porttitor ipsum ac imperdiet. Praesent vel nisl tortor. Etiam eu nibh non ex vestibulum rhoncus vel a orci. Fusce eget pretium lectus. Nulla in tellus turpis. Pellentesque eget felis vel nibh ornare vulputate non non mauris. Vivamus placerat placerat felis id malesuada. Nulla urna eros, congue eu lectus in, pellentesque ornare mi. In facilisis mi venenatis nunc dictum laoreet. Aliquam erat volutpat. Vivamus vehicula metus quam, eget tincidunt velit elementum vitae. Duis molestie neque ac lacus lacinia, at iaculis elit vulputate. Phasellus venenatis enim vitae nibh tempor, sit amet fringilla elit ultricies.</p>
            </div>
            <div className="highlighted-text-div">
                <p>Integer id gravida dolor. Quisque sed quam augue. Sed aliquet elit id suscipit suscipit. Ut condimentum vehicula auctor. Etiam imperdiet iaculis elit eu imperdiet. Etiam convallis, nulla quis posuere lacinia, ex leo pellentesque ex, quis mattis orci erat quis est. Suspendisse laoreet metus in metus dignissim dignissim.</p>
            </div>
            <div className="regular-text-div">
                <p>Integer vestibulum metus ac scelerisque aliquet. Aliquam tincidunt rhoncus sollicitudin. Fusce et lacinia ex, a accumsan urna. Donec eu felis ac dolor venenatis rhoncus et sed mauris. Donec nec tortor blandit ex sodales sollicitudin eget ac elit. Sed at mauris lacus. In viverra libero turpis, non dictum lectus suscipit ut. Ut vel pellentesque ipsum. Integer pulvinar mattis ante, eu dignissim urna. Nunc euismod non justo ut iaculis. Ut convallis mi id commodo cursus.</p>
            </div>
        </div>
    );
}

export default About