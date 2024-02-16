import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import './login.css'
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';


const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#DCCA87',
            '--TextField-brandBorderFocusedColor': '#DCCA87',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

const Login = () => {

    const outerTheme = useTheme();

    const [token, setToken] = useState("");
    const [showLog, setShowLog] = useState(true);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [msg, setMsg] = useState("");
    const [sev, setSev] = useState("");

    const navigate = useNavigate();

    const checkIf=()=>{
            console.log('wrong credentials');
            setMsg('Wrong credentials');
            setSev('error');
            setOpenSnackbar(true);
    }

    const loginHandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log({
            email: formData.get('email'),
            password: formData.get('password'),
        });
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": formData.get('email'),
            "password": formData.get('password')
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        fetch("http://localhost:3000/api/login", requestOptions)   //enter login post end point.
            .then(response => response.json())
            .then(result => {
                console.log('response',result)
                setToken(result.accessToken);
                sessionStorage.setItem("myToken", result.accessToken);
                sessionStorage.setItem("email",formData.get('email'));

                if (typeof result.accessToken === 'undefined' || result.accessToken === "") {
                    // Handle the case where token is undefined or an empty string.
                    checkIf();
                } else {
                    navigate('/homepage');
                }

                console.log("Token:" + token);
            })
            .catch(error => {
                checkIf();
                console.log('error', error)});

    };

    const signupHandleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log({
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password'),
        });
        

        var raw = JSON.stringify({
            "email": formData.get('email'),
            "username": formData.get('username'),
            "password": formData.get('password')
        });

        var requestOptions = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: raw,
        };

        fetch("http://localhost:3000/api/register", requestOptions)   //enter signup post end point.
            //.then(response => response.json())
            .then(result => {
                console.log(result)                                            //get response as message
                if (result.message === 'error' || result.message === "") {     //if error, message='error'
                    console.log('User already exists!! OR wrong credentials');
                    setMsg('User already exists OR wrong credentials');
                    setSev('error');
                    setOpenSnackbar(true);
                } else {                                                       //if ok, message='success'
                    console.log('Sign Up successfull');
                    setMsg('Sign Up successfull!!!');
                    setSev('success');
                    setOpenSnackbar(true);
                    toggleLogin();
                }

                console.log("Message:" + result.message);
            })
            .catch(error => console.log('error', error));
    };

    const toggleSignup = () => {
        document.getElementById("login-toggle").style.backgroundColor = "transparent";
        document.getElementById("login-toggle").style.color = "white";
        document.getElementById("signup-toggle").style.backgroundColor = "#DCCA87";
        document.getElementById("signup-toggle").style.color = "#545454";
        setShowLog(false);
    }
    const toggleLogin = () => {
        document.getElementById("login-toggle").style.backgroundColor = "#DCCA87";
        document.getElementById("login-toggle").style.color = "#545454";
        document.getElementById("signup-toggle").style.backgroundColor = "transparent";
        document.getElementById("signup-toggle").style.color = "white";
        setShowLog(true);
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleClose = () => {
        setOpenSnackbar(false);
    };

    const LoginComp = () => {
        return (
            <>
            <ThemeProvider theme={customTheme(outerTheme)} className="back-image">
                <Typography component="h1" variant="h5">
                    Log in
                </Typography>
                <Box component="form" onSubmit={loginHandleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                        autoFocus 
                        sx={{
                            input: { color: 'white' },
                            "& .MuiFormLabel-root": {
                                color: '#545454'
                            }
                        }}
                        />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" 
                        sx={{
                            input: { color: 'white' },
                            "& .MuiFormLabel-root": {
                                color: '#545454'
                            }
                        }}
                        />
                    {/* <FormControlLabel
                        sx={{color:'white'}}
                        control={<Checkbox value="remember" color="success" />}
                        label="Remember me" /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: '#545454',
                                color: '#fff',"&:hover": { backgroundColor: '#DCCA87',
                                color: '#545454'} }}
                    >
                        Log In
                    </Button>
                    <Grid container>
                        <Grid item xs textAlign={'start'}>
                            <Link href="#" variant="body2" sx={{color:'#DCCA87',textDecoration:'none'}}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item xs textAlign={'end'}>
                            <Link href="/" variant="body2" sx={{color:'#DCCA87',textDecoration:'none'}}>
                                Home Page
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                </ThemeProvider>
            </>);
    }
    const SignUpComp = () => {
        return (
            <>
                <ThemeProvider theme={customTheme(outerTheme)}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={signupHandleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus 
                        sx={{
                            input: { color: 'white' },
                            "& .MuiFormLabel-root": {
                                color: '#545454'
                            }
                        }}
                        />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="username"
                        sx={{
                            input: { color: 'white' },
                            "& .MuiFormLabel-root": {
                                color: '#545454'
                            }
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{
                            input: { color: 'white' },
                            "& .MuiFormLabel-root": {
                                color: '#545454'
                            }
                        }}
                        />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: 'grey' , backgroundColor: '#545454',
                        color: '#fff',"&:hover": { backgroundColor: '#DCCA87',
                        color: '#545454'} }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item xs textAlign={'start'}>
                            <Link href="#" variant="body2" onClick={toggleLogin}  sx={{color:'#DCCA87',textDecoration:'none'}}>
                                Login
                            </Link>
                        </Grid>
                        <Grid item xs textAlign={'end'}>
                            <Link href="/" variant="body2"  sx={{color:'#DCCA87',textDecoration:'none'}}>
                                Home Page
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                </ThemeProvider>
            </>);
    }

    return (
        <>
            <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={sev} sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
            <Grid container component="main" sx={{
                height: '100vh',
                backgroundImage:"url('https://th.bing.com/th/id/OIP.8lF0io3Jp10G5IKnOI47iwHaEo?rs=1&pid=ImgDetMain')",
                backgroundRepeat:'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
            }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={8} lg={9} component={Paper} elevation={6} square
                    className='grid lg:grid-cols-2 gap-4'
                    style={{
                        backgroundColor:'#0C0C0C',
                        borderRadius: '20px',
                        border: '1px solid rgba(209, 213, 219, 0.3)',
                        color:'white'
                    }}
                >
                    <Box
                        sx={{
                            my: 5,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div className="form-toggle">
                            <button id="login-toggle" onClick={toggleLogin}>Log In</button>
                            <button id="signup-toggle" onClick={toggleSignup}>Sign Up</button>
                        </div>
                        <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        {showLog ? <LoginComp /> : <SignUpComp />}
                    </Box>
                    <div className=' hidden lg:grid flex justify-center items-center mr-7 h-full'>
                    <img className='h-[28rem] rounded-lg' 
                    src="https://t3.ftcdn.net/jpg/01/57/38/90/360_F_157389057_ORgSeYg3N8PUxL8o10pWqee2yEbw137G.jpg" 
                    alt="login/signup img" /></div>
                </Grid>
            </Grid>
        </>
    );
}
export default Login