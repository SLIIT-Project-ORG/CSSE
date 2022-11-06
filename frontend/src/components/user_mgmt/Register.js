import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input, MenuItem, Paper, Select } from '@mui/material';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      fullname: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
      usertype: data.get('usertype'),
      username: data.get('username'),
      address: data.get('address')
    });

    axios.post('http://localhost:4000/user/signup', {
      fullname: data.get('fullname'),
      email: data.get('email'),
      password: data.get('password'),
      usertype: data.get('usertype'),
      username: data.get('username'),
      address: data.get('address'),
      mobileno: data.get('mobileno')
    }).then((res) => {
      alert(res.data.message);
      if (res.data.message === 'User created successfully') {
        window.location.href = "/signin";
      }
    }).catch((err) => {
      console.log(err.message);
    })

  };

  const [usertype, setUserType] = React.useState('');

  const handleUserTypeChanges = (event) => {
    setUserType(event.target.value);
  }


  return (
    <Paper ariant="elevation" sx={{ padding: '20px', marginTop: '20px', backgroundColor: 'ghostwhite', marginLeft: 50, marginRight: 50 }}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="fullname"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    placeholder="Select one Site"
                    sx={{ width: '100%', backgroundColor: 'white' }}
                    labelId="demo-simple-select-label"
                    id="usertype"
                    value={usertype}
                    name="usertype"
                    label="User Type"
                    onChange={handleUserTypeChanges}
                    required
                  >
                    <MenuItem value={'Admin'}>Admin</MenuItem>
                    <MenuItem value={'Supplier'}>Supplier</MenuItem>
                    <MenuItem value={'Site Manager'}>Site Manager</MenuItem>
                    <MenuItem value={'Supplier'}>Staff</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="User Name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="text"
                    id="address"
                    autoComplete="Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="mobileno"
                    label="Mobile No"
                    type="text"
                    id="mobileno"
                    autoComplete="Mobile No"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '' }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </ThemeProvider>
    </Paper>
  );
}