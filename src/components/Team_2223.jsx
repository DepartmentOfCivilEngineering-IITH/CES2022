import React from 'react';
import surya from './images/team 21-22/surya.jpg';
import digvijay from './images/team 21-22/pawar.jpg';
import ShashankGarg from './images/team 22-23/SHASHANK-GARG.jpeg';
import Sumit from './images/team 22-23/Sumit.jpg';
import SaiKrishi from './images/team 22-23/NARASINGU-SAI-KRISHI.jpeg';
import AnandJoshua from './images/team 22-23/AnandJoshuaJacob.jpeg';
import BallaTataka from './images/team 22-23/Balla-Taraka-Malleswara-Rao.jpeg';
import Bhagyashree from './images/team 22-23/Bhagyashree-Khandare.jpeg';
import Neelotpal from './images/team 22-23/Neelotpal-Tripathi.jpeg';
import Sahithi from './images/team 22-23/SAHITHI-VEGGALAM.jpeg';
import KanakLohiya from './images/team 22-23/KANAK-LOHIYA.jpeg';
import Nikita from './images/team 22-23/SIRIVOLU-NIKITHA.webp';
import Omprakash from './images/team 22-23/OMPRAKASH-KORRAM.jpeg';
import CharanTeja from './images/team 22-23/JERIPOTHULA-CHARAN -TEJA.jpeg';
import HarshJaiswal from './images/team 22-23/HARSH-JAISWAL.jpeg';
import Vaibhav from './images/team 22-23/Vaibhav-Shukla.jpeg';
import Rishit from './images/team 22-23/RISHIT-SINGH-SOMVANSHI.jpeg';
import Pavan from './images/team 22-23/Alva-Pavan-Thimmappa.png';
//import lachiram from './images/team 21-22/lachiram.jpg';


const Team_2122 = () => {
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
                                    <img src={surya} alt=" " style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Suriya Prakash</h5>
                                            <p className="card-text">Head of the Department</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:suriyap@ce.iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 40 2301-6307" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://civil.iith.ac.in/suriya-prakash-s-profile/index.html" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-globe"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4' style={card_col}>
                                    <img src={digvijay} alt=" " style={img} />
                                    <div className="card" style={team_card} >


                                        <div className="card-body">
                                            <h5 className="card-title">Dr. Digvijay S. Pawar</h5>
                                            <p className="card-text">Faculty In-charge</p>
                                            <div style={icons}>
                                                <a href="mailto:dspawar@ce.iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 40 2301-6314" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://civil.iith.ac.in/people_faculty_digvijay/index.html" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-globe"></i></a>
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
                                        <img src={ShashankGarg} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Shashank Garg</h5>
                                                <p className="card-text">General Secretary</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce19btech11008@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7000188879" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/shashank-garg-2862231a9" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row justify-content-center' >
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={Sumit} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Sumit Saha</h5>
                                                <p className="card-text">Event and Hospitality Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce20mtech12002@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 9380464351" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={SaiKrishi} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Narasingu Sai Krishi</h5>
                                                <p className="card-text">PR and Media Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:CE19BTECH11031@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 8790340249" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3' style={card_col}>
                                        <img src={AnandJoshua} alt=" " style={img} />
                                        <div className="card " style={team_card}>

                                            <div className="card-body">
                                                <h5 className="card-title">Anand Joshua Jacob</h5>
                                                <p className="card-text">Web Development Coordinator</p>
                                                <div style={icons} className='icons'>
                                                    <a href="mailto:ce20btech11001@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                    <a href="tel:+91 7013470731" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                    <a href="https://www.linkedin.com/in/anand-joshua-jacob-7933bb213/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                        
                                <div className='col-lg-3' style={card_col}>
                                    <img src={BallaTataka} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Balla Taraka Malleswara Rao</h5>
                                            <p className="card-text">Doctoral Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce18resch11004@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7702126436" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/tarakamalleswararao-balla-6151997a/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Bhagyashree} alt=" "  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Bhagyashree Khandare</h5>
                                            <p className="card-text">Doctoral Representative</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce21resch01002@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9637592268" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/bhagyashree-khandare-b63860221/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={Neelotpal} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Neelotpal Tripathi</h5>
                                            <p className="card-text">MTech Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce21mtech14017@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8383924541" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/neelotpal-tripathi-875732169/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Sahithi} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Sahithi Veggalam</h5>
                                            <p className="card-text">MTech Representative</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20mtech12001@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8341677534" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/veggalam-sahithi-928335215" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                            <div className='row justify-content-center' >
                                

                        
                                <div className='col-lg-3' style={card_col}>
                                    <img src={KanakLohiya} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Kanak Lohiya</h5>
                                            <p className="card-text">Events and Hospitality Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20btech11017@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9001911227" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Nikita} alt=" "  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Nikitha Sirivolu</h5>
                                            <p className="card-text">Events and hospitality Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce20btech11039@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7981598430" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/nikitha-sirivolu-211993210/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={ Omprakash} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Omprakash Korram</h5>
                                            <p className="card-text">Events and hospitality Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20btech11027@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7587210133" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/omprakash-korram-b54310225/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={CharanTeja} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Jeripothula Charan Teja</h5>
                                            <p className="card-text">Web Development Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20btech11016@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 7674844755" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/charan-teja-4aa4111b9/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className='row justify-content-center' >
                            
                                <div className='col-lg-3' style={card_col}>
                                    <img src={HarshJaiswal} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Harsh Jaiswal</h5>
                                            <p className="card-text">Media Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20btech11013@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8115070045" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/harsh-jaiswal-537ab5225/" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={Vaibhav } alt=" "  style={img} />
                                    <div className="card " style={team_card}>

                                        <div className="card-body">
                                            <h5 className="card-title">Vaibhav Shukla</h5>
                                            <p className="card-text">Content Executive</p>
                                            <div style={icons} className='icons'>
                                                <a href="mailto:ce21btech11043@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 6268065132" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-telephone"></i></a>
                                                <a href="#" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-3' style={card_col}>
                                    <img src={ Rishit} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Rishit Singh Somvanshi</h5>
                                            <p className="card-text">Design Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce20btech11032@iith.ac.in" style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 9196111222 " style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-telephone"></i></a>
                                                <a href="https://www.linkedin.com/in/rishit-singh-somvanshi-3b2064238" style={icon_link} target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3' style={card_col}>
                                    <img src={ Pavan} alt=" " style={img} />
                                    <div className="card" style={team_card} >
                                        <div className="card-body">
                                            <h5 className="card-title">Alva Pavan</h5>
                                            <p className="card-text">Design Executive</p>
                                            <div style={icons}>
                                                <a href="mailto:ce21btech11006@iith.ac.in" target="_blank" rel="noreferrer" style={icon_link}><i class="bi bi-envelope"></i></a>
                                                <a href="tel:+91 8452056190" target="_blank" rel="noreferrer" style={icon_link} ><i class="bi bi-telephone"></i></a>
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

export default Team_2122;
