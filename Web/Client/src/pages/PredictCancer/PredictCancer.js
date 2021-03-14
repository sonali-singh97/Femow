import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Input from "../../components/Input/Input";
import "../../css/navbar.module.css";
import { Row, Col, Container } from "react-bootstrap";
import '../../css/navbar.module.css';
import Navbar from '../../components/Navbar/navbar';
import predictImg from "../../assets/undraw_Inspection_re_tbt7.svg";
import styles from "./PredictCancer.module.css";
import HashLoader from "react-spinners/HashLoader";

import img1 from "../../img/fruits.png"
import img2 from "../../img/soybean.png";
import img3 from "../../img/milk.png";
import img4 from "../../img/soybean.png";
import img5 from "../../img/legumes.png";
import img6 from "../../img/spices.png";
import img7 from "../../img/vegetable.png";
import DietCard from "../../components/Card/Card";
import Footer from '../../components/footer'
import '../../css/footer.css'

class PredictCancer extends Component {
  state = {
    image: null,
    url: "",
    result: [],
    loader: false,
    showResult: false
  };


  getResults() {
    const arr = [];
    if (this.state.url) {
    console.log(this.state.url);
    const headers = {
      "Content-Type": "application/json",
      "Prediction-Key": "f09301881ebe4938a902b7e97c39177e",
    };
    const body = {
      Url: this.state.url,
    };
    const url =
      "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/5ee0af8a-eaad-4c96-b0b3-509bd5adbb7c/classify/iterations/final_cancer_model/url";
    axios
      .post(url, body, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data.predictions);
        arr.push(res.data.predictions[0].probability);
        arr.push(res.data.predictions[1].probability);
        this.setState({
          result: arr,
          loader:false
        });
        console.log(arr);
      })
      .catch((err) => console.log(err));
     }
  }

  uploadImg = () => {
    const data = new FormData();
    data.append("file", this.state.image);
    data.append("upload_preset", "women-techies");
    data.append("cloud_name", "talk-amigo");

    axios
      .post("https://api.cloudinary.com/v1_1/talk-amigo/image/upload", data)
      .then((res) => {
        console.log(res.data.url);
        this.setState({ url: res.data.url });
        this.getResults();
      })
      .catch((err) => console.log(err));
  };

  diet=[
	{
		name : "Fruits",
		img : img1,
		bullets : [
			"Peaches,Apples and Pears",
			"2 servings of Peaches per week had up to a 41% reduced risk of developing (ER)Breast Cancer"
		]
	},
	{
		name : "Soyabeans",
		img : img2,
		bullets : [
			"point 1",
			"point 2"
		]
	},
	{
		name : "Vitamin D(Milk)",
		img : img3,
		bullets : [
			"point 1",
			"point 2"
		]
	},
	{
		name : "Antioxidants",
		img : img4,
		bullets : [
			"point 1",
			"point 2"
		]
	},
	{
		name : "Fibers(grains legumes)",
		img : img5,
		bullets : [
			"point 1",
			"point 2"
		]
	},
	{
		name : "Spices(anti inflammatory)",
		img : img6,
		bullets : [
			"point 1",
			"point 2"
		]
	},
	{
	 name : "Vegetables",
	 img : img7,
	 bullets : [
		 "Kale, arugula, spinach, mustard greens, and chard(leafy green vegetables) Leafy green vegetables ",
		 "Contain carotenoid antioxidants, including beta carotene, lutein, and zeaxanthin, higher blood levels of these hormones reduced breast cancer risk"
	 ]
 }
];


  render() {
    return (
      <div className={styles["main"]}>
		     <Navbar />
        <Container>
       
          {/* <Backdrop/> */}

          <h1 className={styles["prediction-heading"]}>
            Predict Breast Cancer
          </h1>

          <Row>
            <Col md={6}>
              <div className={styles["form-div"]}>
                <div className={styles["form"]}>
                  <label className={styles["label"]}> Upload tumor image</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      this.setState({ image: e.target.files[0] });
                    }}
                    className={styles["input"]}
                  />

                  <Link className={styles["button"]} onClick={()=>{
                    this.setState({loader: true , showResult: true});
                    this.uploadImg()
                  }}>
                    Predict
                  </Link>
                </div>

                {this.state.showResult && (
                  <div className={styles["card"]}>
                    <h3
                      className="card-header"
                      style={{
                        backgroundColor: "inherit",
                        marginBottom: "20px",
                        borderBottom: " 1px solid #AB1D79",
                      }}
                    >
                      Results
                    </h3>

                    {this.state.loader ? (
                      <div className={styles["loader-div"]}>
                        <HashLoader
                          color={"#2F2E41"}
                          loading={true}
                          size={50}
                        />
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <p className="text">
                          Malignant tumor probability : {this.state.result[0]}{" "}
                        </p>
                        <p className="text">
                          Benign tumor probability : {this.state.result[1]}{" "}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Col>
            <Col md={6}>
              <div className={styles["img-div"]}>
                <img src={predictImg} alt="predict" />
              </div>
            </Col>
          </Row>

		  <Row>
		  <h1 className="Home_head" style={{fontSize:'5rem',paddingBottom:'20vh',paddingTop:'20vh',color:'#AB1D79'}}>Diet<strong>CHART</strong></h1>
    {/* card display start */}
			<Row>
				{this.diet.map(item =>{ 
					return  <Col md={6}><DietCard name={item.name} img ={item.img}  bullets ={item.bullets} /> </Col>
				}
					)}
			</Row>
        	<h1 className="Home_head" style={{fontSize:'5rem',paddingBottom:'20vh',paddingTop:'20vh',color:'#AB1D79'}}>Ex<strong>ercise</strong></h1>
		  </Row>
        </Container>
		<Footer />
      </div>
    );
  }
}

export default PredictCancer;
