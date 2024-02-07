import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { getAllData, sendData } from "../../config/firebase/FirebaseMethods";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modaltext, setmodaltext] = useState("");
  const [age2, setAge2] = React.useState("");
  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };
  const [dataArr, setdataArr] = React.useState([]);
  const matches = useMediaQuery("(max-width:730px)");

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const courses = [
    "Web Developement",
    "Ai ChatBot",
    "Graphic Design",
    "Flutter Developement",
  ];

  useEffect(() => {
    //   sendData({courses} , "courses").then((res)=>{
    //       console.log(res);
    //   }).catch((err)=>{
    //       console.log(err);
    //   })

    // data function call

    getAllData("courses")
      .then((res) => {
        console.log(res[0].courses);
        dataArr.push(res[0].courses);
        setdataArr(...dataArr);
        console.log(dataArr);
        dataArr.map((item) => {
          return console.log(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            IMS Register Form
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "18px",
                  marginLeft: "15px",
                  flexWrap: matches ? "wrap" : "nowrap",
                  gap: "18px",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="Course">Course</InputLabel>
                  <Select
                    required
                    labelId="Course"
                    id="Course"
                    value={age}
                    label="Course"
                    onChange={handleChange}
                  >
                    {dataArr.map((element, index) => {
                      return (
                        <MenuItem key={index} value={element}>
                          {element}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="Select Gender">Select Gender</InputLabel>
                  <Select
                    required
                    labelId="Select Gender"
                    id="Select Gender"
                    value={age2}
                    label="Select Gender"
                    onChange={handleChange2}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                style={{marginTop:"15px" , marginLeft:'15px'}}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="*" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
