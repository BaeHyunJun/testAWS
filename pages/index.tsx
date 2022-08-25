import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
  Box,
  Container,
  CssBaseline,
  CircularProgress,
  Divider, Chip,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { authCurrentUser, authSignOut } from "@config/auth";
import { YDR_THEME } from "@config/const";

import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import Loading from "@components/etc/Loading";

const Home: NextPage = () => {
  const router = useRouter();
  const [isLoginState, setIsLoginState] = useState(false);
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
    setUiState('loading');
    
    if (await authCurrentUser()) {
      setIsLoginState(true);
    } else {
      setIsLoginState(false);
    }
    
    setUiState('index');
  }
  
  const onSignOut = async () => {
    if (await authSignOut()) {
      setIsLoginState(false);
      router.push("/");
    }
  }
  
  const onChangeScroll = () => {
    const section2 = window.document.querySelector("#section2");
  
    window.scrollTo({ top: 725, behavior: "smooth" })
    // window.scrollTo({ top: section2 ? section2.getBoundingClientRect().top : 0, behavior: "smooth" })
  }
  
  
  if (!uiState) {
    return <></>
  } else if (uiState == "loading") {
    return <Loading />
  } else {
    return <ThemeProvider theme={ YDR_THEME }>
      <CssBaseline/>
    
      <Container maxWidth={ false } sx={ { mr: 0, width: "100%" } }>
        <Header isLogin={ isLoginState } onSignOut={ onSignOut }/>
      </Container>
    
      <Box sx={ { pt: "72px" } }>
        <Sample1/>
      </Box>
      
      <Divider>
        <ExpandMoreIcon
          sx={{
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0px 1px 10px 0px gray",
            color: "#5371f4",
            cursor: "pointer",
            fontSize: "30px",
            mt: "-13px",
            ml: "-15px",
            position: "absolute",
          }}
          onClick={onChangeScroll}
        />
      </Divider>
      
      <Box id={"section2"} sx={{ backgroundColor: "#5371f4" }}>
        <Sample2/>
      </Box>
      {/*<Box sx={ { backgroundColor: "white" } }>*/}
      {/*  <Sample3/>*/}
      {/*</Box>*/}
      
      <Footer/>
    </ThemeProvider>
  }
};

export default Home;
