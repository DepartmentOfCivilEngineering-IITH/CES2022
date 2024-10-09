import React from 'react';
import basha from './images/team 24-25/basha.jpg';
import Abhishek from './images/team 24-25/Abhishek Sriwastawa.jpg';
import Vamsi from './images/team 24-25/Gowreddy Chandra Vamsi Sai Kumar Reddy.jpg';
import Sateeswar from './images/team 24-25/Muraboyina Sateeswar.jpg';
import Prabhu from './images/team 24-25/Neelay Rukmangat Prabhu.jpg';
import Akhil from './images/team 24-25/Nistala Sai Akhil.jpg';
import Santosh from './images/team 24-25/Parepalli Santosh.jpg';
import Visishta from './images/team 24-25/Pindi Visishta.jpg';
import Nishant from './images/team 24-25/Pratapani Sai Nishant.jpg';
import Shweta from './images/team 24-25/Shweta Sah.jpg';
import Yadav from './images/team 24-25/Siddharth Yadav.jpg';
import Neeraj from './images/team 24-25/Singarapu Neeraj.jpg';
import Monish from './images/team 24-25/Thelapalli Monish.jpg';
import Abhinay from './images/team 24-25/Veerla Abhinay.jpg';
import Vignesh from './images/team 24-25/Vignesh.png';
import SAI_SIDDHARTH from './images/team 24-25/SAI SIDDHARTH.jpg';

const Team_2425 = () => {
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
                                    <img src={basha} alt=" " style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Munwar B. Basha</h5>
                                            <p className="card-text">Head of the Department</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:basha@ce.iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:040 2301-6311" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.iith.ac.in/ce/basha/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-globe"></i></a>
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
                                        <img src={Santosh} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Parepalli Santosh</h5>
                                                <p className="card-text">General Secretary</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce21btech11030@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7989766278" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row justify-content-center' >
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Yadav} alt=" " style={img} />
                                        <div className="card " style={team_card}>
                                            <div className="card-body">
                                                <h5 className="card-title">Siddharth Yadav</h5>
                                                <p className="card-text">Web Development Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce21btech11040@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 9630667701" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/siddharth-yadav-4372b0228" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={SAI_SIDDHARTH} alt=" " style={img} />
                                        <div className="card" style={team_card} >
                                            <div className="card-body">
                                                <h5 className="card-title">SAI SIDDHARTH</h5>
                                                <p className="card-text">Web Development Executive</p>
                                                <div style={icons}>
                                                    <a href="mailto:ce21btech11048@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 8143830696" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/sai-siddharth-320a8924a/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row justify-content-center' >
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Visishta} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Pindi Visishta</h5>
                                                <p className="card-text">Event and Hospitality Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce21btech11032@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 8074526161" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/pindi-visishta-975033247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Vignesh} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Vignesh</h5>
                                                <p className="card-text">PR and Media Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce22btech11055@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7645826626" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="linkedin.com/in/vignesh-48a31a244" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Monish} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Thelapalli Monish</h5>
                                                <p className="card-text">Finance Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce22btech11048@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 9296650555" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row justify-content-center' >
                                    <div className='col-md-4' style={card_col}>
                                        <img src={Prabhu} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Neelay Rukmangat Prabhu</h5>
                                                <p className="card-text">Mtech Representative</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce23mtech14006@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 9820258943" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/neelay-prabhu-53b105205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4' style={card_col}>
                                        <img src={Shweta} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Shweta Sah</h5>
                                                <p className="card-text">Mtech Representative</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce23mtech14009@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7295001110" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/shweta-sah-948218270" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className='row justify-content-center' >
                        
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Abhinay} alt=" "  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Veerla Abhinay</h5>
                                            <p className="card-text">Events and hospitality Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce21btech11044@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 6303150248" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Nishant} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Pratapani Sai Nishant</h5>
                                            <p className="card-text">Events and Hospitality Executive</p>
                                            <div style={icons}>
                                                <a href="ce23btech11041@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9493439897" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/pratapani-sai-nishant-a4a85a299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={Vamsi} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Gowreddy Chandra Vamsi Sai Kumar Reddy</h5>
                                            <p className="card-text">Events and hospitality Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce23btech11021@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7396641098" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/sai-kumar-reddy-g-9340a7286/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>







                            <div className='row justify-content-center' >
                            
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Sateeswar} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Muraboyina Sateeswar</h5>
                                            <p className="card-text">Media Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce23btech11031@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9391270503" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Abhishek} alt=" "  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Abhishek Sriwastawa</h5>
                                            <p className="card-text">Content Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce23Mtech14001@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9955882212" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/abhishek-sriwastawa-b3b060292/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={Neeraj} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Singarapu Neeraj</h5>
                                            <p className="card-text">Design Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce22btech11046@iith.ac.in" style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9346483126 " style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/neeraj-singarapu-b461342b9/" style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Akhil} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Nistala Sai Akhil</h5>
                                            <p className="card-text">Finance Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce23btech11035@iith.ac.in" style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7207383544 " style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-telephone"></i></a>
                                                <a href="#" style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>





    </div>;
};

export default Team_2425;
