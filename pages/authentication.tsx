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
// import { SignUp, Authentication } from "@config/api";

import ConfirmSignup from "@components/Form/confirmsignup";
import FormLogin from "@components/Form/signin";
import FormSignup from "@components/Form/signup";
import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import { authSignin, authSignOut } from "@config/auth";
import { useRouter } from "next/router";
import { goHome } from "@config/util";
// import Side from "@components/Menu/side";
// import AlertBox from "@components/etc/alert";

const Authentication: NextPage = () => {
	const router = useRouter();
	const [bannerState, setBannerState] = useState<string>("");
	const [uiState, setUiState] = useState<string>('SignIn');
	const [formState, setFormState] = useState({
		email: '', password: '', check_password: '', authCode: ''
	});
	const { email, password, check_password, authCode } = formState;
	
	useEffect(() => {
		const currentPageType = router.query.type;
		
		if (currentPageType == "SignIn") {
			setUiState('SignIn');
			setBannerState("/banner_signin.png");
		} else if (currentPageType == "SignUp") {
			setUiState ("SignUp");
			setBannerState("/banner_signup.png");
		}
	}, [router]);
	
	const onChange = (e?: any) => {
		setFormState({ ...formState, [e.target.name]: e.target.value});
	}
	
	const onSignIn = async () => {
		if (await authSignin(email, password)) {
			router.push("/");
		}
	};
	
	const onSignOut = async () => {
		if (await authSignOut()) {
			router.push("/");
		}
	}
	
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
	
	const linkSignUp = () => {
		// setUiState("SignUp");
		
		router.push(
			{
				pathname: "/authentication",
				query: {
					type: "SignUp"
				}
			},
			undefined,
			{ shallow: true },
		)
	}
	
	
	return uiState == "loading" ?
		<Box sx={{ textAlign: "center", height: "100vh" }}>
			<CircularProgress />
		</Box>
		: uiState ? (
			<ThemeProvider theme={YDR_THEME}>
				<CssBaseline/>
				
				<Container maxWidth={ false } sx={ { mr: 0, width: "100%" } }>
					<Header/>
				</Container>
				
				<Box
					sx={ {
						pt: "72px",
						backgroundColor: "#f4f7ff",
						"& .leftBanner": {
							position: "relative",
							height: "calc(100vh - 72px)",
							backgroundColor: "white",
							textAlign: "center",
							backgroundImage: `url('${bannerState}')`,
							backgroundRepeat: "no-repeat",
							backgroundPosition: "50% 50%",
							backgroundSize: "80%",
						},
						"& .leftBanner .areaText": {
							position: "absolute",
							top: "33%",
							left: 0,
							right: 0,
						},
						"& .leftBanner h3": {
							fontSize: "2.2rem",
							display: "inline",
							letterSpacing: "-0.09em",
						},
						"& .leftBanner .logoText": {
							display: "inline",
							verticalAlign: "top",
						},
						"& .leftBanner h4": {
							fontSize: "1.3rem",
							mt: "10px",
						},
						"& .authForm": {
							p: "100px",
						}
					} }
				>
					<Grid container spacing={-2} >
						<Grid item xs={4} className={"leftBanner"}>
							{/*<Box className={"areaText"}>*/}
							{/*	<Typography variant="h3">모집이 필요할 때,</Typography>*/}
							{/*	<Box className={"logoText"}>*/}
							{/*		<Image src={"/logo.png"} alt={"로고"} width={150} height={40} />*/}
							{/*	</Box>*/}
							{/*	<Typography variant="h4">쉽고 빠르게 만들고 검색할 수 있습니다.</Typography>*/}
							{/*</Box>*/}
						</Grid>
						<Grid item xs={8} className={"authForm"}>
						{ uiState == "SignIn" && <FormLogin onChange={ onChange } onSignin={ onSignIn } linkSignUp={linkSignUp} /> }
						{ uiState == "SignUp" && <FormSignup onChange={ onChange } onSignUp={ onSignUp }></FormSignup> }
						</Grid>
					</Grid>
				</Box>
				
				{/*<Footer/>*/}
			</ThemeProvider>
		) : <></>;
};

export default Authentication;
