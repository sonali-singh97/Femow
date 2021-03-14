import React from 'react';
import styles from '../../css/navbar.module.css';
// import '../img/title.gif'
import womenImg from "../../img/title.gif";
import {Row,Col} from "react-bootstrap"
import {Link} from 'react-router-dom';

 
function navbar(){
    return(
        <Row>
            {/* <div class="logo">
                <img src="#">
            </div>
            <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div> */}
             <Col md={4}><img src={womenImg} alt="hello" /></Col>
             <Col md={{ span: 4, offset: 4 }}  lg= {{ span: 4, offset: 4 }} style={{paddingTop:'10px'}}>
                <ul className={styles["nav-links"]}>
                <li className={styles["nav-links-li"]}><Link to="/">Home</Link></li>
                {/* <li><a href="../about_us.html">About Us</a></li>
                <li><a href="../start-up-cards-all.html">Start Ups</a></li> */}
                <li className={styles["nav-links-li"]}><Link to="/register">Register</Link></li>
                <li className={styles["nav-links-li"]}><Link to="/login">Login</Link></li>
            </ul>
            </Col>
            </Row>
    );
}
export default navbar;
