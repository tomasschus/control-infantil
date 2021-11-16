import React, {useRef} from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/tomasschus/control-infantil">
        DigiControl.com
      </Link>
      {' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

const rdn = Math.floor(1 + Math.random() * (4 - 1));

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/img/' + rdn + '.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const url = process.env.REACT_APP_BACKEND_URL
  const history = useHistory();

  var dataUser = {
    email:useRef(''),
    password:useRef('') 
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // dataUser.email.current.value 
    // dataUser.password.current.value

    var body = {
      "email":dataUser.email.current.value,
      "password":dataUser.password.current.value
    }

    axios.post(url+"api/users/login", body)
      .then((response) => {
        sessionStorage.setItem("token",response.data.token);
        sessionStorage.setItem("email",dataUser.email.current.value)
        history.push("/control/children");
      })
      .catch(
          (error) => { 
            alert("Usuario o contraseña incorrectos.");
           }
    )
  }

    
    /*var headers = {
      "token":""
    }

    axios.get(url+"api/users/login", { 'headers': headers })
      .then((response => {
        console.log(response.data);
      })
        .catch(
          (error) => { alert("Error en la comunicacion. Intente más tarde."); })
    );*/
  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicia tu sesión
          </Typography>

          {/* LOGIN Form */}
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={dataUser.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={dataUser.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forget" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}