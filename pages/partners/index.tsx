import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress,
    Grid,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { authCurrentUser, authSignOut } from "@config/auth";
import { YDR_THEME } from "@config/const";

import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import Loading from "@components/etc/Loading";
import Sample4 from "@components/etc/sample4";
import Banner from "@components/Banner/listBottom";
import Side from "@components/Side/partners";
import SubHeader from "@components/Menu/subHeader";
import OrderBox from "@components/Menu/orderBox";
import Partners from "@components/List/partners";

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
	
	const dat = {
		a: "기본정렬",
		b: "업데이트순",
		c: "평점높은순",
		d: "포트폴리오순",
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
			
			<Box sx={{ pt: "72px", fontSize: 0, backgroundColor: "white" }}>
				<Container>
					<SubHeader title={"파트너사 찾기"} description={"9,876개의 파트너사가 있습니다."} />
					<OrderBox data={dat} />
					
					<Grid container>
						<Grid item xs={3} sx={{ p: 2, fontSize: "1px" }}>
							<Side />
						</Grid>
						<Grid item xs={9}>
							<Partners />
						</Grid>
					</Grid>
				</Container>
			</Box>
			
			<Banner />
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Home;
