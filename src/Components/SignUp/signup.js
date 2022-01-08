import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputAdornment, InputLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { signUP } from "../../Services/action/action";

const Signup = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [chckbx, setChckBox] = useState(false)

    const [values, setValues] = useState({
        firstName: '',
        lastname: '',
        eMail: '',
        pswrd: '',
        cnfrmPswrd: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    const checkBoxEvent = (e) => {
        debugger
        if (e.target.checked) {
            setChckBox(true)
        } else {
            setChckBox(false)
        }
    }

    const signUp = () => {
        if (values.firstName === '' || values.lastname === '' || values.eMail === '' || values.pswrd === '' || values.cnfrmPswrd === '') {
            alert("Please Fill all Fields")
        } else if (values.pswrd !== values.cnfrmPswrd) {
            alert("Password Doesn't match")
        } else {
            alert("Successfully Created Account")
            dispatch(signUP(values))
            setValues({
                firstName: '',
                lastname: '',
                eMail: '',
                pswrd: '',
                cnfrmPswrd: ''
            })
            history.push('/')
        }
    }
    return (
        <>
            <div className='main-div text-center'>
                <div className='signUp'>
                    <div className=''>
                        <h1 className='mt-4'>Create Account</h1>
                        <div className='row px-4'>
                            <div className="col-6">
                                <form noValidate autoComplete="off" className='mt-5'>
                                    <TextField id="standard-basic" label="First Name" type={'text'} onChange={handleChange} value={values.firstName} name="firstName" />
                                </form>
                            </div>
                            <div className="col-6">
                                <form noValidate autoComplete="off" className='mt-5'>
                                    <TextField id="standard-basic" label="Last Name" type={'text'} onChange={handleChange} value={values.lastname} name="lastname" />
                                </form>
                            </div>
                        </div>

                        <div className='row px-4'>
                            <div className="col-12 px-4">
                                <form noValidate autoComplete="off" className='mt-5'>
                                    <TextField className="w-100" id="standard-basic" label="Email" type={'email'} onChange={handleChange} value={values.eMail} name="eMail" />
                                </form>
                            </div>
                        </div>

                        <div className='row px-4'>
                            <div className="col-6">
                                <form noValidate autoComplete="off" className='mt-5'>
                                    <TextField id="standard-basic" label="Password" type={chckbx ? 'text' : 'password'} onChange={handleChange} value={values.pswrd} name="pswrd" />
                                </form>
                            </div>
                            <div className="col-6">
                                <form noValidate autoComplete="off" className='mt-5'>
                                    <TextField id="standard-basic" label="Confirm Password" type={chckbx ? 'text' : 'password'} onChange={handleChange} value={values.cnfrmPswrd} name="cnfrmPswrd" />
                                </form>
                            </div>
                        </div>
                        <div className="row px-4 mt-2">
                            <div className="col-12">
                                <FormGroup className='px-2'>
                                    <FormControlLabel control={<Checkbox value={"1"} onClick={checkBoxEvent} />} label="Show Password" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <Button color="secondary" className='mt-4'
                                    onClick={() => history.push('/')}
                                >Sign in Instead</Button>
                            </div>
                            <div className='col'>
                                <Button className='mt-4 w-50' variant="contained" color="primary" onClick={signUp}>
                                    Sign Up
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;