import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { isEmail } from 'validator';
import { register } from '../actions/auth';
import Form from 'react-validation/build/form';
import CheckButton from 'react-validation/build/button';
import Navbar from './global-components/navbar';
import Footer_V2 from './global-components/footer-v2';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = () => {
  const classes = useStyles();
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [adress, setAdress] = useState('');
  const [codepostal, setCodepostal] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = e => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeLastname = e => {
    const lastname = e.target.value;
    setLastname(lastname);
    console.log(lastname);
  };
  const onChangePhonenumber = e => {
    const phonenumber = e.target.value;
    setPhonenumber(phonenumber);
    console.log(phonenumber);
  };
  const onChangeAdress = e => {
    const adress = e.target.value;
    setAdress(adress);
  };
  const onChangeCodePostal = e => {
    const codepostal = e.target.value;
    setCodepostal(codepostal);
  };

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = e => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, lastname, adress, phonenumber, codepostal, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div style={{ marginTop: 0 }}>
      <Navbar />
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography style={{ color: 'gray' }} component="h1" variant="h5">
            Crée votre compte
          </Typography>
          <Form className={classes.form} onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                      autoComplete="fname"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Prenom"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="lastname"
                      value={lastname}
                      onChange={onChangeLastname}
                      validations={[required, vusername]}
                      variant="outlined"
                      required
                      fullWidth
                      id="lastname"
                      label="Nom"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="email"
                      value={adress}
                      onChange={onChangeAdress}
                      validations={[required, validEmail]}
                      autoComplete="adress"
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Adresse mail"
                      autoFocus
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="codepostal"
                      value={codepostal}
                      onChange={onChangeCodePostal}
                      validations={[required]}
                      autoComplete="codepostal"
                      variant="outlined"
                      required
                      fullWidth
                      id="codepostal"
                      label="Numéro de télephone"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required]}
                      variant="outlined"
                      required
                      fullWidth
                      label="Code postale"
                      autoCorrect
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      // name="phonenumber"
                      value={phonenumber}
                      onChange={onChangePhonenumber}
                      validations={[required]}
                      autoComplete="phonenumber"
                      variant="outlined"
                      required
                      fullWidth
                      id="adresse postale"
                      label="Adresse"
                      autoFocus
                      autoCorrect
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                      variant="outlined"
                      required
                      fullWidth
                      label="Mot de passe"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                  S'Inscrit
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/" variant="body2">
                      Home .......
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Déja inscrit ? login
                    </Link>
                  </Grid>
                </Grid>
              </div>
            )}
            {message && (
              <div className="form-group">
                <div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          </Form>
        </div>
      </Container>
      <Footer_V2 />
    </div>
  );
};

export default Register;
