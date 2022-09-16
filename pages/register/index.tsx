import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress, Chip,
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
import axios from "axios";
import useSWR from "swr";

const categoryMenu = {
	a: {
		label: "교육생"
	},
	b: {
		label: "강사"
	},
	c: {
		label: "서포터즈"
	},
	d: {
		label: "공모전"
	},
	e: {
		label: "이벤트"
	},
	f: {
		label: "동아리"
	},
	g: {
		label: "기타"
	}
}

const Home: NextPage = () => {
	const router = useRouter();
	const [isLoginState, setIsLoginState] = useState(false);
	const [uiState, setUiState] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [formState, setFormState] = useState({
		email: '', password: '', authCode: ''
	});
	const { email, password, authCode } = formState;
	
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);
	const { data, error } = useSWR("https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form", fetcher);

	// console.log();
	
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
				<Container sx={{ p: 3 }}>
					<CategoryBox title={"어떤 모집을 하시나요?"} data={categoryMenu} />
					
					<Box sx={{ py: 8, textAlign: "center" }}>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/JaamuJV6sNA" title="YouTube video player"
						        frameBorder="0"
						        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						        allowFullScreen></iframe>
					</Box>
				</Container>
			</Box>
			
			<OpenRecent data={data?.body} />
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Home;
