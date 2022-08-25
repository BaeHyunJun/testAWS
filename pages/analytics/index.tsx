import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress, Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { authCurrentUser, authSignOut } from "@config/auth";
import { YDR_THEME } from "@config/const";

import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import SubMemu from "@components/Menu/subMenu";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import Loading from "@components/etc/Loading";
import CategoryBox from "@components/Menu/categoryBox";
import OpenRecent from "@components/List/openRecent";

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
	
	if (!uiState) {
		return <></>
	} else if (uiState == "loading") {
		return <Loading />
	} else {
		return <ThemeProvider theme={ YDR_THEME }>
			<CssBaseline/>
			
			<Container maxWidth={ false } sx={ { mr: 0, width: "100%" } }>
				<Header isLogin={ isLoginState } onSignOut={ onSignOut }/>
				<SubMemu />
			</Container>
			
			<Box sx={{ pt: "144px", fontSize: 0, backgroundColor: "white" }}>
				<Container sx={{ p: 0, height: "calc(100vh - 340px)" }}>
					<Typography variant={"body1"} sx={{
						fontSize: "1.5rem",
						fontWeight: "900",
						color: "#356ff7",
						textAlign: "center",
						lineHeight: "calc(100vh - 340px)",
					}}>
						준비중입니다...
					</Typography>
				</Container>
			</Box>
			
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Home;
