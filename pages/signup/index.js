import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import insta from "../../assets/insta.png";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

function signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, user } = useContext(AuthContext);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError("");
      const user = await signup(email, password);
      console.log("Signed up succesfully!");
      const storageRef = ref(storage, `${user.uid}/Profile`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (err) {
      console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      router.push("/");
    } else {
      console.log("user not logged in");
    }
  }, [user]);

  return (
    <div>
      <div className="signup-container">
        <div className="signup-card">
          <Image src={insta} />
          <TextField
            id="outlined-basic"
            size="small"
            margin="dense"
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            size="small"
            margin="dense"
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            size="small"
            margin="dense"
            fullWidth
            label="Full Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            fullWidth
            component="label"
            style={{ marginTop: "1rem" }}
          >
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            Upload
          </Button>
          <Button
            variant="contained"
            fullWidth
            style={{ marginTop: "1rem" }}
            onClick={handleClick}
            disabled={loading}
          >
            Sign up
          </Button>
        </div>
        <div className="bottom-card">
          Already Have an Account?
          <Link href={"/login"}>
            <span style={{ color: "blue", cursor: "pointer" }}>Login Here</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default signup;
