import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please Register Now</h1>
            <div style={{margin:"20px"}}>
                <button>Google Sign in</button>
            </div>
            <input type="text" placeholder='Your Name' />
            <br/>
            <input type="email" name="" id="" placeholder='Your Email' />
            <br/>
            <input type="password" name="" id="" placeholder='Please Your Password' />
            <br/>
            <input type="submit" value="Register" />
        </div>
    );
};

export default Register;