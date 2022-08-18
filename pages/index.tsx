import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import { Auth } from 'aws-amplify'

import {
  Box,
  Container,
  CssBaseline,
  CircularProgress,
  Divider,
  Grid,
  Paper, Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// import { SnackbarProvider, useSnackbar } from "notistack";

import { YDR_THEME } from "@config/const";
// import { SignUp, Login } from "@config/api";

import ConfirmSignup from "@components/Form/confirmsignup";
import FormLogin from "@components/Form/login";
import FormSignup from "@components/Form/signup";
import Header from "@components/Menu/header";
import Side from "@components/Menu/side";
// import AlertBox from "@components/etc/alert";

const Home: NextPage = () => {
  const [uiState, setUiState] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [formState, setFormState] = useState({
    email: '', password: '', authCode: ''
  });
  const { email, password, authCode } = formState;
  
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      setUiState('loading');
      await Auth.currentAuthenticatedUser();
      setUiState('dashboard');
    } catch (e) {
      setUiState('signIn');
    }
  }
  
  const onChange = (e?: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value});
  }
  
  const handleListItemClick = ( e: any, idx: number ) => {
    setSelectedIndex(idx);
  };
  
  const onLogin = async () => {
    console.log(email, password)
    try {
      await Auth.signIn(email, password);
      setUiState('dashboard');
    } catch (e) {
      console.log(e);
    }
  };
  
  const onSignUp = async () => {
    try {
      await Auth.signUp({ username: email, password, attributes: { email }})
      setUiState('confirmSignUp')
    } catch (e) {
      console.log(e);
    }
  };
  
  const onConfirm = async () => {
    try {
      await Auth.confirmSignUp(email, authCode);
      await Auth.signIn(email, password);
      setUiState('dashboard');
    } catch (e) {
      console.log(e);
    }
  }
  
  const onSignOut = async () => {
    try {
      await Auth.signOut();
      setUiState('signIn');
    } catch (e) {
      console.log(e);
    }
  }
  
  return uiState == "loading" ?
    <Box sx={{ textAlign: "center", height: "100vh" }}>
      <CircularProgress />
    </Box>
    : uiState ? (
    <ThemeProvider theme={YDR_THEME}>
      <CssBaseline />
      { uiState == "dashboard" ?
        <Container maxWidth={ false } sx={ { mr: 0, width: "calc(100% - 250px)" } }>
          <Header onSignOut={onSignOut} />
          <Side
            selectedIndex={ selectedIndex }
            handleListItemClick={ handleListItemClick }
          />
        </Container>
        :
        <Container fixed>
          <Box sx={ {
            flexGrow: 1,
            "& .MuiPaper-root": {
              p: 1,
              margin: "auto",
              maxWidth: 650,
              flexGrow: 1,
              height: "100vh",
              backgroundColor: "inherit",
            },
            "& .MuiGrid-container": { height: "100vh" },
            "& .MuiDivider-root": { m: 1, width: "100%" },
          } }>
            <Paper elevation={ 0 }>
              <Grid
                container
                spacing={ 2 }
                alignItems="center"
              >
                <Grid item xs={ 6 }>
                  <Image
                    src="/main.png"
                    alt=""
                    layout="fixed"
                    width="300"
                    height="550"
                  />
                </Grid>
                <Grid item xs={ 6 }>
                  <FormLogin onChange={ onChange } onLogin={ onLogin }/>
  
                  <Divider />
  
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    component="span"
                    role={"button"}
                    onClick={() => console.log("비밀번호찾기로")}>
                    비밀번호를 잊어버렸나요?
                  </Typography>
              
                  {/*<Divider>OR</Divider>*/}
                  {/*<Divider />*/}
              
                  { uiState == "confirmSignUp" ?
                    <ConfirmSignup onChange={ onChange } onSignUp={ onConfirm }/> :
                    <FormSignup onChange={ onChange } onSignUp={ onSignUp }/> }
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Container>
      }
    </ThemeProvider>
  ) : <></>;
};

export default Home;
