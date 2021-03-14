
import '../Home/Home.modules.css';
import '../../css/navbar.module.css';
import Navbar from '../../components/Navbar/navbar';
import '../../css/backdrop.css';
import Backdrop from '../../components/Backdrop/backdrop';
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { Col, Row} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Footer from '../../components/footer.js';
import '../../css/footer.css'
import {Link} from 'react-router-dom';
import womenImg from  '../../img/title.svg'
import ribbon from '../../img/Ribbon.gif';

function Home() {
  return (
    <>
    
    <Backdrop/>
    <Container>
    <Navbar/>
    {/* hedear-section start */}
    <div className="d-flex flex-column-reverse flex-lg-row flex-xl-row justify-content-around align-items-center " style={{marginTop: '30vh',marginBottom:'20vh'}}>
        <div className="p-2">
          <div className="typewriter">
            <h1 style={{padding: '0px',fontSize:'5rem'}}>Get Checked here!
            </h1>
            <div style={{marginTop: '10px'}}>
              <h2>
                With Femow you can find   <b><span style={{color: '#21282b'}}>your health</span></b>,<br /> solutions<span style={{color: 'red'}}> in minutes.</span></h2>
            </div>
            <button className="card_btn"> Login</button>
          </div>
        </div>
        <div className="p-2">
          <img src={womenImg} alt="Logo" style={{height: '500px', width: '500px'}} />
        </div>
    </div>
    {/* header-section end */}
    {/* Features-start */}
    <h1 className="Home_head" style={{fontSize:'5rem',paddingBottom:'20vh'}}>Our <strong>FEATURES</strong></h1>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row id="only-this" style={{fontSize:'2rem'}}>
        <Col md={3}> 
          <Nav variant="pills" className="flex-column" style={{top: '50%', right: '-10px'}}>
              <Nav.Item>
              <Nav.Link eventKey="first">Predict Pcos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="second">Preidct Breast Cancer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="third">Recomandation about diet</Nav.Link>
              </Nav.Item>
          </Nav>
        </Col>
        <Col md={9}>
          <Tab.Content>
              <Tab.Pane eventKey="first">
              <p style={{textAlign:'center',paddingTop:'2px',fontFamily:'source-code-pro, Menlo, Monaco, Consolas, Courier New'}}>We help you figure out your symptoms </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <p style={{textAlign:'center',paddingTop:'2px',fontFamily:'source-code-pro, Menlo, Monaco, Consolas, Courier New'}}>Need not to visit the doctor</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <p style={{textAlign:'center',paddingTop:'2px',fontFamily:'source-code-pro, Menlo, Monaco, Consolas, Courier New'}}>Do excersie regularly and follow our diet chart</p>
              </Tab.Pane>
          </Tab.Content>
        </Col>
    </Row>
    </Tab.Container>
    {/* Featues end */}
    {/* Info About Disease */}
    <h1 className="Home_head" style={{fontSize:'5rem',paddingBottom:'20vh',paddingTop:'20vh'}}>Let's<strong> DO it</strong></h1>
    <Container style={{textAlign:'center' ,fontSize:'1.8rem'}}>
        <Row id="only-this">
            <Col xs={12} sm ={12} md={6} lg={6} className="code">
            <h2 style={{fontSize:'2rem'}}><strong>Breast Cancer</strong></h2>
           <img src={ribbon} alt="hello"/>
        <p>
          In contemporary times being a high schooler is not easy as the world is accelerating at a pace which is almost
          impossible to keep up with. The present curriculum is in actual terms preparing students for the past instead
          of future. In such conditions internships can provide quick and extremely beneficial solutions.

        </p>
        <button class="card_btn"><Link to="/PredictCancer">Let's Predict</Link><span>&rarr;</span></button>
        </Col>
        <Col xs={12} sm ={12} md={6} lg={6} className="code">
        <h2 style={{fontSize:'2rem'}}><strong>PCOS</strong></h2>
           <img src={ribbon} alt="hello"/>
        <p>
          In contemporary times being a high schooler is not easy as the world is accelerating at a pace which is almost
          impossible to keep up with. The present curriculum is in actual terms preparing students for the past instead
          of future. In such conditions internships can provide quick and extremely beneficial solutions.
          Internships
        </p>
        <button class="card_btn"><Link to="/PredictPcos">Let's Predict</Link><span>&rarr;</span></button>
        </Col>
        </Row>
    </Container>
    </Container>
    {/* Info Abou Disease end */}
    <Footer/>
   </>
  );
}

export default Home;
