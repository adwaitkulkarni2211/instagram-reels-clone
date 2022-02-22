import React from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import insta from "../../assets/insta.png"
import Button from '@mui/material/Button';

function signup() {
  return (
    <div>
      <div className='signup-container'>
        <div className='signup-card'>
          <Image src={insta} />
          <TextField id="outlined-basic" size='small' margin='dense' fullWidth label="Email" variant="outlined" />
          <TextField id="outlined-basic" size='small' margin='dense' fullWidth label="Password" type="password" variant="outlined" />
          <TextField id="outlined-basic" size='small' margin='dense' fullWidth label="Full Name" variant="outlined" />
          <Button variant="outlined" fullWidth component="label" style={{marginTop: '1rem'}}>
            <input type="file" accept="image/*" style={{display: 'none'}} />
            Upload
          </Button>
          <Button variant="contained" fullWidth style={{marginTop: '1rem'}}>
            Sign up
          </Button>
        </div>
        <div className='bottom-card'>
          Already Have an Account? <span style={{color: 'blue', cursor:'pointer'}}>Login Here</span>
        </div>
      </div>
    </div>
  )
}

export default signup