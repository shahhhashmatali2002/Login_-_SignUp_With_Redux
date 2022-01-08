import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
// import useStyles from "../../Globally/useStyle";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const LoginFile = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setValues({ ...values, [name]: value });
    };
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const history = useHistory();
    const signUpevent = () => {
        history.push('/SignUp')
        
    }
    
    const loginn = useSelector((state) => state.list)

    const signInn = () => {
        console.log("Loginnnnnn", loginn);

        if (loginn && loginn.length > 0) {
            if (values.email === '' || values.password === '')
                alert("Please Enter Credintials")
            else if (values.email && values.password) {
                let verify = loginn.find(el => el.data.eMail === values.email && el.data.pswrd === values.password);
                if (verify){ 
                    alert('Verified') 
                    setValues((prevValue) =>({
                    ...prevValue,
                    email: '',
                    password:''
                }));
            }
                else alert('Invalid') 
            }
        }
        
    }

    return (
        <>
            <div className='main-div text-center'>
                <div className='login'>
                    <div className=''>
                        <h1 className='mt-4'>User Login</h1>
                        <div className='row justify-content-center'>
                            <div className="col-8">
                                <form noValidate autoComplete="off" className='mt-4'>
                                    <TextField id="standard-basic" label="Email" className='w-100' onChange={handleChange} name="email" type={'email'} value={values.email} />
                                </form>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-8">
                                <FormControl 
                                    // className={useStyles.margin, useStyles.textField} 
                                    className='mt-5'>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name='password'
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Button color="secondary" className='mt-5 text-left' onClick={signUpevent}>Create an account</Button>
                            </div>
                            <div className='col'>
                                <Button className='mt-5 text-right' variant="contained" color="primary" style={{ marginLeft: '65px' }}
                                onClick={signInn}>
                                    Sign in
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default LoginFile;