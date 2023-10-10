import React from 'react';
import pic_1 from './images/gallary/pic-1.JPG';
import pic_2 from './images/gallary/pic-2.JPG';
import pic_3 from './images/gallary/pic-3.JPG';
import pic_4 from './images/gallary/pic-4.JPG';
import pic_5 from './images/gallary/pic-5.JPG';
import pic_6 from './images/gallary/pic-6.JPG';
import pic_7 from './images/gallary/pic-7.JPG';
import pic_8 from './images/gallary/pic-8.JPG';
import pic_9 from './images/gallary/pic-9.JPG';
import pic_10 from './images/gallary/pic-10.JPG';
import pic_11 from './images/gallary/pic-11.JPG';
import pic_12 from './images/gallary/pic-12.JPG';
import pic_13 from './images/gallary/pic-13.jpg';
import pic_14 from './images/gallary/pic-14.jpg';
import pic_15 from './images/gallary/pic-15.JPG';
import pic_16 from './images/gallary/pic-16.JPG';
import pic_17 from './images/gallary/pic-17.jpg';
import pic_18 from './images/gallary/pic-18.JPG';
import pic_19 from './images/gallary/pic-19.jpeg';
import pic_20 from './images/gallary/pic-20.jpeg';
import pic_21 from './images/gallary/pic-21.jpeg';
import pic_22 from './images/gallary/pic-22.jpeg';
import pic_23 from './images/gallary/pic-23.jpeg';
import pic_24 from './images/gallary/pic-24.jpeg';
import pic_25 from './images/gallary/pic-25.jpeg';
import pic_26 from './images/gallary/pic-26.jpeg';
const Gallery = () => {
    //css stylimg
    const about_color = {
        height: '350px',
        background: '#c31432',

        background: '-webkit-linear-gradient(to right, #240b36, #c31432)',

        background: 'linear-gradient(to right, #240b36, #c31432)'

    };
    const container_setting = {
        marginTop: '-250px'

    };

    const about_heading_1 = {
        color: '#ffffff',
        marginTop: '40px',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Gabriola',
        fontSize: ' 40px'

    };
    const hr_1 = {
        justifyContent: 'center',
        textAlign: 'center',
        width: '80px',
        borderRadius: '8px',
        padding: '1px',
        color: 'white',

    };
    const main_card = {
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        marginTop: '50px',
        border: 'none',
        textDecoration: 'none',
        marginBottom: '40px'
    };
    const main_card_body = {
        justifyContent: ' center',
        textAlign: 'center',
        padding: '25px'
    };
    const img={
        width:'100%',
        marginTop:'15px',
       
            };
            const img_col={
                //boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                marginTop:'15px',
                background:'white',
               
            };
        const content={
            marginTop:'15px',
           
          fontSize: '20px'
        
          
        };

    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container-fluid' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}>Gallery</h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>
<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_1} alt=" " style={img}></img>
        <p style={content}>Teacher's day celebrations</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_2} alt=" " style={img}></img>
        <p style={content}>Teacher's day celebrations</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_3} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
</div>


<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_4} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_5} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_6} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
</div>


<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_7} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_8} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_9} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
</div>


<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_10} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_11} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_12} alt=" " style={img}></img>
        <p style={content}>Field Trip</p>
    </div>
</div>


<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_13} alt=" " style={img}></img>
        <p style={content}>Civil Engineering Research Scholars Day prize distribution ceremony</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_14} alt=" " style={img}></img>
        <p style={content}>prize distributions</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_15} alt=" " style={img}></img>
        <p style={content}>prize distributions</p>
    </div>
</div>



<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_19} alt=" " style={img}></img>
        <p style={content}>Civil Department Sports Matches</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_20} alt=" " style={img}></img>
        <p style={content}>Civil Department Sports Matches</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_21} alt=" " style={img}></img>
        <p style={content}>Civil Department Sports Matches</p>
    </div>
</div>




<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_16} alt=" " style={img}></img>
        <p style={content}>prize distributions</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_17} alt=" " style={img}></img>
        <p style={content}>Civil Engineering Research Scholars Day prize distribution ceremony</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_18} alt=" " style={img}></img>
        <p style={content}>Civil Engineering Research Scholars Day prize distribution ceremony</p>
    </div>
</div>



<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_22} alt=" " style={img}></img>
        <p style={content}>Faculty's and Student's Informal Sports</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_23} alt=" " style={img}></img>
        <p style={content}>Faculty's and Student's Informal Sports</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_24} alt=" " style={img}></img>
        <p style={content}></p>
    </div>
</div>



<div className='row'>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_25} alt=" " style={img}></img>
        <p style={content}>Dr. Somala receiving Faculty Research Excellence Award 2022 on Institute Foundation Day</p>
    </div>
    <div className='col-lg-4' style={img_col}>
        <img src={pic_26} alt=" " style={img}></img>
        <p style={content}>Dr. Somala receiving Faculty Research Excellence Award 2022 on Institute Foundation Day</p>
    </div>
    
</div>









                        </div>
                    </div>

                </div>
            </div>

            {/*<div classNameName='row'>
<div className='col-sm-6 '>
hello
</div>
<div className='col-sm-6'>
hello
</div>
</div>*/}





        </div>





    </div>;
};

export default Gallery;
