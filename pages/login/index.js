import React from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import insta from "../../assets/insta.png";
import Button from "@mui/material/Button";
// import { CarouselProvider, Slider, Slide, Image as Img } from "pure-react-carousel";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import carousel5 from "../../assets/carousel5.jpg";

function signup() {
  return (
    <div>
      <div className="login-container">
        <div className="carbg">
          <div className="car">
            <Carousel
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={1500}
            >
              <Image src={carousel1}></Image>
              <Image src={carousel2}></Image>
              <Image src={carousel3}></Image>
              <Image src={carousel4}></Image>
              <Image src={carousel5}></Image>
            </Carousel>
          </div>
        </div>
        <div>
          <div className="login-card">
            <Image src={insta} />
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              fullWidth
              label="Email"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              size="small"
              margin="dense"
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
            />
            <div style={{ color: "red", display: "none" }}>
              come back for error
            </div>
            <Button variant="contained" fullWidth style={{ marginTop: "1rem" }}>
              login
            </Button>
            <div style={{ color: "blue", marginTop: "0.5rem" }}>
              Forgot Password
            </div>
          </div>
          <div className="bottom-card">
            Don't Have an Account?{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>
              Signup Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signup;
