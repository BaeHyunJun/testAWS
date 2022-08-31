import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress, Card, CardMedia, CardActions, Button, CardContent, Typography,
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
import SubMemu from "@components/Menu/subMenu";
import SubHeader from "@components/Menu/subHeader";
import OrderBox from "@components/Menu/orderBox";

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
		a: "구매내역",
		b: "발송결과",
		c: "이용안내",
	}
	
	const products: any = {
		a: {
			com: "스타벅스",
			title: "아이스 카페 아메리카노 T",
			src: "/thumb/a.png",
		},
		b: {
			com: "스타벅스",
			title: "카페 아메리카노 T",
			src: "/thumb/b.png",
		},
		c: {
			com: "컬쳐랜드",
			title: "컬쳐랜드 5천원",
			src: "/thumb/c.png",
		},
		d: {
			com: "해피머니",
			title: "온라인 5천원",
			src: "/thumb/d.png",
		},
		e: {
			com: "GS25",
			title: "GS25 모바일상품권 5천원",
			src: "/thumb/e.png",
		},
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
				<Container>
					<OrderBox data={dat} />
					<SubHeader title={"상품 총 12개"} />
					
					<Box
						sx={{
							px: 5,
							py: 2,
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-between",
							"& .MuiCard-root": { m: 2, flex: "0 17%" },
							"& .MuiCardContent-root": { textAlign: "center" },
							"& .MuiTypography-subtitle1": { fontSize: "1rem" },
							"& .MuiTypography-subtitle2": { fontSize: ".8rem", letterSpacing: ".1" },
							"& .MuiCardActions-root": { p: 3, display: "block", borderTop: "1px solid gray", textAlign: "center" },
							"& .MuiButton-root": { px: 2, border: "1px solid black", color: "black" }
						}}
					>
						{ Object.keys(products).map((dat: any, idx: number) => {
							return (
								<Card key={idx}>
									<CardMedia
										component="img"
										height="140"
										image={ products[dat].src }
									/>
									<CardContent>
										<Typography variant={"subtitle1"}>
											[ { products[dat].com } ]
										</Typography>
										<Typography variant={"subtitle2"}>
											{ products[dat].title }
										</Typography>
									</CardContent>
									<CardActions>
										<Button>
											구매하기
										</Button>
									</CardActions>
								</Card>
							)
						}) }
						{ Object.keys(products).map((dat: any, idx: number) => {
							return (
								<Card key={idx}>
									<CardMedia
										component="img"
										height="140"
										image={ products[dat].src }
									/>
									<CardContent>
										<Typography variant={"subtitle1"}>
											[ { products[dat].com } ]
										</Typography>
										<Typography variant={"subtitle2"}>
											{ products[dat].title }
										</Typography>
									</CardContent>
									<CardActions>
										<Button>
											구매하기
										</Button>
									</CardActions>
								</Card>
							)
						}) }
					</Box>
				</Container>
			</Box>
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Home;
