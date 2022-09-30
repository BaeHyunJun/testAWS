import React, { Fragment, useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress,
	TextField,
	Grid,
	Button,
	Card,
	CardHeader,
	CardContent,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Typography, CardActions, Chip, Divider,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { authCurrentUser, authSignOut } from "@config/auth";
import {
	elementItem,
	elementLine,
	elementList, elementsGroup,
	interestElementList,
	moaElements,
	moaLine,
	sampleList,
	testForm,
	YDR_THEME
} from "@config/const";

import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import Loading from "@components/etc/Loading";
import Sample4 from "@components/etc/sample4";
import SubMemu from "@components/Menu/subMenu";
import { AccountCircle } from "@mui/icons-material";
import Image from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";
import DropLine from "@components/dnd/dropline";
import {
	DragDropContext, Draggable,
	DraggableProvided, DraggableStateSnapshot,
	Droppable,
	DroppableProvided,
	DroppableStateSnapshot
} from "react-beautiful-dnd";
import { ReactSortable } from "react-sortablejs";
import DropItem from "@components/dnd/dropitem";
import { RootState } from "@redux/reducers";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPostAction, postAction, privatePostAction } from "@actions/post";
import { SagaStore, wrapper } from "@store/index";
import { END } from "redux-saga";


const cfsign = require('aws-cloudfront-sign');

const Index: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [isLoginState, setIsLoginState] = useState(false);
	const [uiState, setUiState] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	// const [formState, setFormState] = useState({
	// 	title: '', email: '', password: '', authCode: ''
	// });
	// const { email, password, authCode } = formState;
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	useEffect(() => {
		checkUser();
	}, []);
	
	useEffect(() => {
		const id = router.query.id;
		
		if (id != undefined) dispatch(getPostAction.request(id));
	}, [router, dispatch]);
	
	// const [currentPost, setCurrentPost] = useState<any>("");
	
	const [testText, setTestText] = useState<string>("");
	
	useEffect(() => {
		console.log("데이터 변경 : ", post);
		
		setElList(post.line);
		// setTestText(post.title);
		// setCurrentPost(post);
		// setTitle(post.title);
	}, [post])
	
	// console.log(post.line[0].items[0]);
	
	const onChange = (e?: any) => {
		// setFormState({ ...formState, [e.target.name]: e.target.value});
		setTestText(e.target.value);
	}
	
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
	
	// const onDragEnd = () => {
	// 	console.log("드래그앤드롭");
	// }
	
	const [elements, setElements] = useState<moaElements[]>(elementList);
	const [interestElements, setInterestElements] = useState<elementItem[]>(elementsGroup);
	
	// useEffect(() => {
	// 	console.log(test123);
	// }, [test123])
	
	const removeElement = (data: any[], index: number) => {
		if (!elList) return;
		
		let copyList = [ ...elList ];
		
		copyList.filter((dat: elementLine, idx:number) => dat.id == index)[0].items = data;
		
		// setElList(copyList);
		dispatch(privatePostAction.request(copyList));
	}
	
	const onSaveForm = () => {
		if (testText == "") {
			alert("제목을 입력해주세요.");
			return;
		}
		
		const saveForm = elList?.filter((dat: any, idx: number) => dat.items.length > 0);
		
		// console.log(saveForm);
		
		const date = new Date();
		
		const year = date.getFullYear();
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const day = ('0' + date.getDate()).slice(-2);
		
		let newPost = {
			id: "",
			title: testText,
			type: "recruit",
			user: 1,
			order: 1,
			date: `${year}${month}${day}`,
			content: JSON.stringify(saveForm),
		}
		
		const id = router.query.id;
		if (id != undefined) newPost.id = id.toString();
		
		dispatch(postAction.request(newPost));
	}
	
	const createUrl = () => {
		
		console.log("왜안됨?");
		
		const signingParams = {
			keypairId: process.env.PUBLIC_KEY,
			privateKeyString: process.env.PRIVATE_KEY,
			// Optional - this can be used as an alternative to privateKeyString
			privateKeyPath: '/path/to/private/key',
			expireTime: 1426625464599
		}
//
// // Generating a signed URL
// 		const signedUrl = cfsign.getSignedUrl(
// 			'http://moacube.co.kr/Form/',
// 			signingParams
// 		);

		console.log(signingParams);
		// console.log(signedUrl);
	}
	
	const changeOrderData = () => {
	
	}
	
	const [elList, setElList] = useState<elementLine[]>();
	
	const handleSortData = (newState: any, sortable: any, store: any) => {
		let nextId: number = 0;
		let newItems: elementItem[] = newState.filter((f:any) => !elList?.includes(f));
		let oldItems:elementLine[] = newState.filter((f:any) => !newItems.includes(f));
		
		oldItems.map((dat: elementLine, idx: number) => {
			dat.items.map((da: elementItem, id: number) => {
				if (nextId < da.id) {
					nextId = da.id;
				}
			});
		})
		nextId++;
		
		if (newItems.length > 0) {
			let addItem: elementItem = {
				...newItems[0],
				id: nextId,
			}

			const elLine:elementLine = {
				id: newState.length,
				items: [addItem]
			}
			const order = newState.findIndex((data: any) => data === newItems[0]) + 1;
			// elList.splice(order - 1, 0, elLine);
			
			updateElList(elLine, order);
		} else {
			setElList(newState);
		}
	}
	
	const updateElList = (elLine: elementLine, order: number) => {
		if (!elList) return;
		
		let copyList = [...elList];
		
		copyList.splice(order - 1, 0, elLine);
		copyList.map((dat:any, idx:number) => dat.order = idx + 1);
		
		// console.log(copyList);
		
		// setElList(copyList);
		
		dispatch(privatePostAction.request(copyList));
	}
	
	const [focusId, setFocusId] = useState<number>();
	
	const handleLineClick = (id: number) => {
		setFocusId(id);
		// console.log("id : ", id);
		
		// const selectItem = elList?.filter((f: elementLine) => f.items.filter((f2: elementItem) => f2.id == id));
		
		// console.log(selectItem);
	}
	
	// console.log(elList);
	
	// const [formState, setFormState] = useState({
	// 	title: '', email: '', password: '', authCode: ''
	// });
	// const { items } = elList;
	
	// console.log(elList);
	
	const testElList = () => {
		// setElList(...elList)
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
					<Box
						sx={{
							py: 5,
							display: 'flex',
							alignItems: 'flex-end',
							"& .MuiTextField-root": { mx: 2, width: 300 }
						}}
					>
						<img src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/register.png"} alt={""} width={30} height={30} />
						<TextField
							id="title"
							name="title"
							variant="standard"
							placeholder="새로운 모집 신청 작성하기"
							InputProps={{
								endAdornment: <img src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/pencil.png"} alt={""} width={30} height={30} />
							}}
							onChange={onChange}
							value={testText}
						/>
					</Box>
				</Container>
			</Box>
			
			<Container
				sx={{
					pt: 8,
					"& .moaForm": {
						position: "absolute",
						top: "16px",
						left: 0,
						right: 0,
						bottom: 0,
						// overflowY: "auto",
					},
					"& .MuiCard-root": {
						position: "relative",
						border: "1px solid",
						// minHeight: "700px",
						height: "1024px",
					},
					"& .chosen": {
						cursor: "grabbing",
					},
					"& .highlight": {
						p: 0,
						// px: 4,
						width: "100%",
						// maxHeight: "35px",
						listStyle: "none",
					},
					"& .highlight > *": {
						px: 2,
						height: "100%",
						border: "1px dashed blue",
						minHeight: "50px",
						backgroundColor: "rgba(0, 0, 255, .1)",
						alignItems: "center",
						display: "flex",
					},
				}}
			>
				<Grid container>
					<Grid item xs={8}>
						<Card>
							{/*<CardHeader title={title ? title : "제목을 입력해주세요."} />*/}
							<ReactSortable
								group={"shared"}
								className={"moaForm createForm"}
								ghostClass={"highlight"}
								handle={".sortHandle"}
								direction={"vertical"}
								list={elList}
								setList={handleSortData}
							>
								{elList?.sort((a:any, b:any) => a.order - b.order).map((elLine: elementLine, index: number) => (
									<DropLine key={index} lineData={elLine} focusId={focusId} onClick={handleLineClick} onRemove={removeElement} />
								))}
							</ReactSortable>
						</Card>
					</Grid>
					<Grid item xs={4}>
						<Box
							sx={{
								px: 5,
								"& .MuiChip-root": { m: 1, p: 3, minWidth: "130px", border: "1px solid #666", borderRadius: 1, backgroundColor: "white", color: "black" }
							}}
						>
							{/*<Box*/}
							{/*	sx={{*/}
							{/*		mb: 3,*/}
							{/*		"& .MuiTypography-subtitle1": { fontSize: "1.2rem" },*/}
							{/*		"& .MuiTextField-root": { width: "100%", fontSize: "1.4rem", backgroundColor: "white", border: "1px solid #aaa" },*/}
							{/*	}}*/}
							{/*>*/}
							{/*	<Typography variant={"subtitle1"}>제목</Typography>*/}
							{/*	<TextField*/}
							{/*		name="title"*/}
							{/*		placeholder={"제목을 입력해주세요."}*/}
							{/*		value={title}*/}
							{/*		onChange={onChange}*/}
							{/*	/>*/}
							{/*</Box>*/}
							<Box
								sx={{
									// mb: 3,
									p: 3,
									border: "1px solid #666",
									backgroundColor: "white",
									"& .MuiTypography-subtitle1": { fontSize: "1.2rem", mb: 2 },
									"& .moduleList": { m: 0, width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between" },
									"& .moduleList li": { m: "1%", p: 2, cursor: "grab", textAlign: "center", fontSize: "1rem", border: "1px solid #666", listStyle: "none", width: "45%" }
								}}
							>
								<Typography variant={"subtitle1"}>목록</Typography>
								<ReactSortable
									group={{
										name: "shared",
										pull: "clone",
									}}
									sort={false}
									chosenClass={"chosen"}
									list={interestElements}
									className={"moduleList"}
									setList={(newState: elementItem[]) => setInterestElements(newState)}
								>
									{interestElements.map((element: any, index: number) => (
										<li key={index}>
											<Typography variant={"body1"}>
												{element.label}
											</Typography>
										</li>
									))}
								</ReactSortable>
							</Box>
							{/*<Box*/}
							{/*	sx={{*/}
							{/*		mb: 3,*/}
							{/*		"& .MuiTypography-subtitle1": { fontSize: "1.2rem" },*/}
							{/*		"& .moduleList": { my: 2, p: 3, width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", border: "1px solid #666", backgroundColor: "white" },*/}
							{/*		"& .moduleList li": { m: "1%", p: 2, textAlign: "center", fontSize: "1rem", border: "1px solid #666", listStyle: "none", width: "30%" }*/}
							{/*	}}*/}
							{/*>*/}
							{/*	<Typography variant={"subtitle1"}>추가할 목록</Typography>*/}
								
								{/*<ReactSortable*/}
								{/*	group={{*/}
								{/*		name: "shared",*/}
								{/*		pull: "clone",*/}
								{/*	}}*/}
								{/*	sort={false}*/}
								{/*	chosenClass={"chosen"}*/}
								{/*	list={elements}*/}
								{/*	className={"moduleList"}*/}
								{/*	setList={(newState: moaElements[]) => setElements(newState)}*/}
								{/*>*/}
								{/*	{elements.map((element: any, index: number) => (*/}
								{/*		<li key={element.id}>*/}
								{/*			<Typography variant={"body1"}>*/}
								{/*				{element.label}*/}
								{/*			</Typography>*/}
								{/*		</li>*/}
								{/*	))}*/}
								{/*</ReactSortable>*/}
							{/*</Box>*/}
							
							{/*<Chip label={"신청일"}/>*/}
							{/*<Chip label={"성명(서명)"}/>*/}
							{/*<Chip label={"제출처"}/>*/}
						</Box>
					</Grid>
				</Grid>
				
				<Box
					sx={{
						p: 5,
						display: "flex",
						"& .MuiButton-root": { m: 3, p: 1, width: "100%", backgroundColor: "#5672f7" },
						"& .MuiButton-outlined": { backgroundColor: "white" }
					}}
				>
					<Button variant="outlined" onClick={createUrl}>
						url 복사
					</Button>
					<Button variant="contained" onClick={onSaveForm}>
						저장하기
					</Button>
				</Box>
			</Container>
			
			<Footer/>
		</ThemeProvider>
	}
};

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ res, req, params }) => {
// 	// const { id } = params;
//
// 	console.log(params);
//
// 	try {
// 		// store.dispatch(getPostAction.request(id));
// 		store.dispatch(END);
// 		await (store as SagaStore).sagaTask?.toPromise();
// 	} catch (e) {
// 		// console.log(e);
// 	}
//
// 	return {
// 		props: {},
// 	};
// });

export default Index;
