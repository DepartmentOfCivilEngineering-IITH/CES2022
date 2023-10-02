import React from 'react';
import surya from './images/team 21-22/surya.jpg';
import digvijay from './images/team 21-22/pawar.jpg';
import AdityaRana from './images/team 23-24/Aditya Rana.jpg';
import BhukyaDivya from './images/team 23-24/BHUKYA DIVYA.jpg';
import SuryaTarun from './images/team 23-24/Jagarapu Surya Tarun.jpg';
import CharanTeja from './images/team 23-24/JERIPOTHULA CHARAN TEJA.jpg';
import KanakLohiya from './images/team 23-24/KANAK LOHIYA.jpg';
import Santosh from './images/team 23-24/Parepalli Santosh.jpg';
import SiddharthYadav from './images/team 23-24/Siddharth Yadav.jpg';
import Nikitha from './images/team 23-24/SIRIVOLU NIKITHA.jpg';
import Vaibhav from './images/team 23-24/Vaibhav Shukla.jpg';
import PrudhviRaj from './images/team 23-24/Vemula Prudhvi Raj.jpg';
import Vignesh from './images/team 23-24/Vignesh.jpg';

const Team_2324 = () => {
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
        width: '100px',
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
        padding: '40px',
        background: '#f1f2f6'
    };
    const faculty = {
        marginTop: '30px',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Gabriola',
        fontSize: '40px'
    };
    const hr_2 = {
        justifyContent: 'center',
        textAlign: 'center',
        width: '80px',
        borderRadius: '8px',
        padding: ' 1px',
        color: 'rgb(0, 0, 0)',
        background: 'black'
    }
    const img = {
        width: '200px',
        height: '200px',

        clipPath: 'circle()',


    };

    const team_card = {
        border: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 30px'

    };
    const card_col = {
        marginTop: '50px'
    };
    const icons = {

        margin: '10px 0px 10px 0px',
        fontSize: '30px'


    };
    const icon_link = {
        padding: '15px',
        color: 'black',

    }

    //styling end
    return <div>
        <div style={about_color}></div>

        <div className='container-fluid' style={container_setting}>
            <div className='row'>
                <div className='col'>
                    <h1 style={about_heading_1}>CES Team  </h1>
                    <center><hr style={hr_1}></hr></center>
                    <br></br>
                    <div className="card" style={main_card}>
                        <div className="card-body" style={main_card_body}>


                            <div className='row justify-content-center' >
                                <center><h1 style={faculty}>Faculty</h1></center>
                                <center><hr style={hr_2}></hr></center>
                                <div className='col-md-4' style={card_col}>
                                    <img src={surya} style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Suriya Prakash</h5>
                                            <p className="card-text">Head of the Department</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:suriyap@ce.iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 40 2301-6307" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://civil.iith.ac.in/suriya-prakash-s-profile/index.html" target="_blank" style={icon_link}><i class="bi bi-globe"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4' style={card_col}>
                                    <img src={digvijay} style={img} />
                                    <div className="card" style={team_card} >


                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Digvijay S. Pawar</h5>
                                            <p className="card-text">Faculty In-charge</p>
                                            <div style={icons}>
                                                <a href="mailto:dspawar@ce.iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 40 2301-6314" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://civil.iith.ac.in/people_faculty_digvijay/index.html" target="_blank" style={icon_link}><i class="bi bi-globe"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className='row justify-content-center' >
                                <center><h1 style={faculty}>Student Team</h1></center>
                                <center><hr style={hr_2}></hr></center>

                                <div className='row justify-content-center' >
                                    <div className='col-md-4' style={card_col}>
                                        <img src={KanakLohiya} style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Kanak Lohiya</h5>
                                                <p className="card-text">General Secretary</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce20btech11017@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 9001911227" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row justify-content-center' >
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Nikitha} style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Nikitha Sirivolu</h5>
                                                <p className="card-text">Event and Hospitality Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce20btech11039@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7981598430" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/nikitha-sirivolu-211993210/" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Vaibhav} style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Vaibhav Shukla</h5>
                                                <p className="card-text">PR and Media Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce21btech11043@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 6268065132" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/vaibhav-shukla-2618b2232" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={CharanTeja} style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Jeripothula Charan Teja</h5>
                                                <p className="card-text">Web Development Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce20btech11016@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7674844755" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/charan-teja-4aa4111b9/" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                        
                                {/* <div className='col-lg-3' style={card_col}>
                                    <img src={BallaTataka} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Balla Taraka Malleswara Rao</h5>
                                            <p className="card-text">Doctoral Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce18resch11004@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7702126436" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/tarakamalleswararao-balla-6151997a/" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Bhagyashree}  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Bhagyashree Khandare</h5>
                                            <p className="card-text">Doctoral Representative</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce21resch01002@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9637592268" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/bhagyashree-khandare-b63860221/" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={Neelotpal} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Neelotpal Tripathi</h5>
                                            <p className="card-text">MTech Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce21mtech14017@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8383924541" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/neelotpal-tripathi-875732169/" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Sahithi} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Sahithi Veggalam</h5>
                                            <p className="card-text">MTech Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20mtech12001@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8341677534" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/veggalam-sahithi-928335215" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>





                            <div className='row justify-content-center' >
                                

                        
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Santosh}  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Parepalli Santosh</h5>
                                            <p className="card-text">Events and hospitality Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce21btech11030@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7989766278" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={BhukyaDivya} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Divya Bhukya</h5>
                                            <p className="card-text">Events and Hospitality Executive</p>
                                            <div style={icons}>
                                                <a href="ce21btech11051@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9392471783" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/bhukya-divya-bbb87b234" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={Vignesh} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Vignesh</h5>
                                            <p className="card-text">Events and hospitality Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce22btech11055@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 765826626" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/vignesh-48a31a244/" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={SiddharthYadav} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Siddharth Yadav</h5>
                                            <p className="card-text">Web Development Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce21btech11040@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9630667701" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/siddharth-yadav-4372b0228" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className='row justify-content-center' >
                            
                                <div className='col-lg-3' style={card_col}>
                                    <img src={AdityaRana} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Aditya Rana</h5>
                                            <p className="card-text">Media Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce21btech11003@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7366932894" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/aditya-rana-aba180256" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={SuryaTarun}  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">J surya tarun</h5>
                                            <p className="card-text">Content Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce22btech11023@iith.ac.in" target="_blank" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8179732200" target="_blank" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" target="_blank" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={PrudhviRaj} style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Prudhvi Raj Vemula</h5>
                                            <p className="card-text">Design Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce22btech11054@iith.ac.in" style={icon_link} target="_blank"><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 6302735579 " style={icon_link} target="_blank"><i class="bi bi-telephone"></i></a>
                                                <a href="#" style={icon_link} target="_blank"><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
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

export default Team_2324;
