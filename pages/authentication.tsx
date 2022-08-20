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
import FormLogin from "@components/Form/login";
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
	const [uiState, setUiState] = useState<string>('SignIn');
	const [formState, setFormState] = useState({
		email: '', password: '', check_password: '', authCode: ''
	});
	const { email, password, check_password, authCode } = formState;
	
	useEffect(() => {
		const currentPageType = router.query.type;
		
		if (currentPageType == "SignIn") {
			setUiState('SignIn');
		} else if (currentPageType == "SignUp") {
			setUiState ("SignUp");
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
				<CssBaseline />
				<Container fixed>
					<Header />
					<Box sx={ {
						flexGrow: 1,
						"& .MuiPaper-root": {
							p: 1,
							margin: "auto",
							maxWidth: 350,
							flexGrow: 1,
							height: "100vh",
							backgroundColor: "inherit"
						},
						"& .MuiGrid-container": { height: "100vh" },
					} }>
						<Paper elevation={ 0 }>
							<Grid
								container
								spacing={ 2 }
								alignItems="center"
							>
								{ uiState == "SignIn" && <FormLogin onChange={ onChange } onSignin={ onSignIn } linkSignUp={linkSignUp} /> }
								{ uiState == "SignUp" && <FormSignup onChange={ onChange } onSignUp={ onSignUp }></FormSignup> }
							</Grid>
						</Paper>
					</Box>
				</Container>
			</ThemeProvider>
		) : <></>;
};

export default Authentication;
