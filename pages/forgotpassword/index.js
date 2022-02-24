import React, {useContext, useEffect, useState} from "react";
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
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";
import Link from "next/link";

function Index() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  const { forgot, user } = useContext(AuthContext)

  const handleClick = async () => {
    try {
      setLoading(true)
      setError('');
      await forgot(email)
      console.log("Email sent succesfully!");
      router.push("/login")
    } catch(err) {
      console.log(err);
      setError(err.message)
      setTimeout(() => {
        setError('')
      }, 2000)
    }
    setLoading(false)
  }

  useEffect(() => {
    if(user) {
      router.push("/")
    } else {
      console.log("user not logged in");
    }
  },[user])

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
              value={email}
              onChange={((e) => {
                setEmail(e.target.value)
              })}
            />
            {
              error != '' &&
              <div style={{ color: "red" }}>
                {error}
              </div>
            }
            
            <Button variant="contained" fullWidth style={{ marginTop: "1rem" }} id='send-email-btn' disabled={loading} onClick={handleClick}>
              Send Email
            </Button>
          </div>
          <div className="bottom-card">
            Don&apos;t Have an Account?{" "}
            <Link href={"/signup"}>
                <span style={{ color: "blue", cursor: "pointer" }}>
                Signup Here
                </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
