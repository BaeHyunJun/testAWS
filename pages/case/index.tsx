import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress,
	Grid, Paper,
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
import Masonry from '@mui/lab/Masonry';



const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
		title: 'Fern',
	},
	{
		img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
		title: 'Snacks',
	},
	{
		img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
		title: 'Mushrooms',
	},
	{
		img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
		title: 'Tower',
	},
	{
		img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
		title: 'Sea star',
	},
	{
		img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
		title: 'Honey',
	},
	{
		img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
		title: 'Basketball',
	},
	{
		img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
		title: 'Breakfast',
	},
	{
		img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
		title: 'Tree',
	},
	{
		img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
		title: 'Burger',
	},
	{
		img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
		title: 'Camera',
	},
	{
		img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
		title: 'Coffee',
	},
	{
		img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
		title: 'Camping Car',
	},
	{
		img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
		title: 'Hats',
	},
	{
		img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
		title: 'Tomato basil',
	},
	{
		img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
		title: 'Mountain',
	},
	{
		img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
		title: 'Bike',
	},
];

// const Item = styled(Paper)(({ theme }) => ({
// 	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// 	...theme.typography.body2,
// 	padding: theme.spacing(0.5),
// 	textAlign: 'center',
// 	color: theme.palette.text.secondary,
// }));

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
			</Container>
			
			<Box sx={{ pt: "72px", fontSize: 0, backgroundColor: "white" }}>
				<Container sx={{ mt: "100px" }}>
					<Masonry columns={4} spacing={2}>
						{itemData.map((item, index) => (
							<div key={index}>
								<img
									src={`${item.img}?w=162&auto=format`}
									srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
									style={{
										borderBottomLeftRadius: 4,
										borderBottomRightRadius: 4,
										display: 'block',
										width: '100%',
									}}
								/>
							</div>
						))}
					</Masonry>
				</Container>
			</Box>
			
			<Banner />
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Home;
