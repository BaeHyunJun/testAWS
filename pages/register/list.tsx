import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress, TableRow, TableHead, Table, TableCell, Typography, TableBody, Drawer,
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
import ListBox from "@components/List/register";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { getPostAction } from "@actions/post";
import axios from "axios";
import useSWR from "swr";

const categoryMenu = {
	a: {
		label: "준비 (0)"
	},
	b: {
		label: "모집 (0)"
	},
	c: {
		label: "종료 (0)"
	},
}

const List: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	
	// const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const [isLoginState, setIsLoginState] = useState(false);
	const [uiState, setUiState] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [formState, setFormState] = useState({
		email: '', password: '', authCode: ''
	});
	const { email, password, authCode } = formState;
	
	const fetcher = (url: string) => axios.get(url).then((res) => res.data);
	const { data, error } = useSWR("https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form", fetcher);
	
	// const [title, setTitle] = useState<string>("");
	const [form, setForm] = useState<any>([]);
	
	useEffect(() => {
		setForm(data?.body);
	}, [data])
	//
	// useEffect(() => {
	// 	const id = router.query.id;
	//
	// 	if (id != undefined) dispatch(getPostAction.request(id));
	// }, [router, dispatch]);
	//
	// useEffect(() => {
	// 	setForm(post.line);
	// 	setTitle(post.title);
	// }, [post]);
	//
	// useEffect(() => {
	// 	// console.log(form);
	// 	let inputGroup:any[] = [];
	//
	// 	form.map((dat:any, idx:number) => {
	// 		dat.items.map((da:any, id:number) => {
	// 			if (da.type == "Input") {
	// 				inputGroup.push(da);
	// 			}
	// 		})
	// 	});
	//
	// 	console.log(inputGroup);
	// 	// console.log(JSON.stringify(inputGroup));
	//
	// }, [form])
	
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
					<CategoryBox data={categoryMenu} />
					
					<ListBox data={form} />
				</Container>
			</Box>
			
			<Footer/>
		</ThemeProvider>
	}
};

export default List;
