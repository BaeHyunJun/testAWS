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

const Post: NextPage = () => {
	const router = useRouter();
	const [isLoginState, setIsLoginState] = useState(false);
	const [uiState, setUiState] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [formState, setFormState] = useState({
		title: '', email: '', password: '', authCode: ''
	});
	const { title, email, password, authCode } = formState;
	
	useEffect(() => {
		checkUser();
	}, []);
	
	const onChange = (e?: any) => {
		setFormState({ ...formState, [e.target.name]: e.target.value});
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
	const [sample, setSample] = useState<elementLine[]>(sampleList);
	
	// useEffect(() => {
	// 	console.log(test123);
	// }, [test123])
	
	const removeElement = (data: any[], index: number) => {
		let temp = JSON.parse(JSON.stringify(sample));
		
		temp.filter((dat: elementLine, idx:number) => dat.id == index)[0].items = data;
		
		setSample(temp);
	}
	
	// console.log(sample)
	
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
							value={title}
						/>
					</Box>
				</Container>
			</Box>
			
			<Container
				sx={{
					pt: 8,
					"& .moaForm": {
						position: "absolute",
						top: "64px",
						left: 0,
						right: 0,
						bottom: 0,
						// overflowY: "auto",
					},
					"& .MuiCard-root": {
						position: "relative",
						border: "1px solid",
						minHeight: "700px",
					},
					"& .chosen": {
						cursor: "grabbing",
					},
					"& .highlight": {
						p: 0,
						px: 4,
						width: "100%",
						height: "50px",
						listStyle: "none",
					},
					"& .highlight > *": {
						py: 2,
						border: "1px dashed blue",
						backgroundColor: "rgba(0, 0, 255, .1)",
					},
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<Card>
							<CardHeader title={title ? title : "제목을 입력해주세요."} />
							<ReactSortable
								group={"shared"}
								className={"moaForm"}
								ghostClass={"highlight"}
								handle={".sortHandle"}
								direction={"vertical"}
								list={sample}
								setList={(newState: any, sortable, store) => {
									const test:elementItem[] = newState.filter((data: elementLine, index: number) => {
										let flag = true;

										if (data.items) {
											flag = false
										}

										return flag
									})
									
									if (test.length > 0) {
										const order = newState.findIndex((data: any) => data === test[0]) + 1;
										
										const newItem:elementLine = {
											id: newState.length,
											order: order,
											items: test
										}
										
										sample.splice(order - 1, 0, newItem);
									} else {
										setSample(newState);
									}
								}}
							>
								{sample.sort((a:any, b:any) => a.order - b.order).map((elLine: elementLine, index: number) => (
									
									<DropLine key={elLine.id} no={elLine.id} elLine={elLine} onRemove={removeElement} />
								))}
							</ReactSortable>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Box
							sx={{
								px: 5,
								"& .MuiChip-root": { m: 1, p: 3, minWidth: "130px", border: "1px solid #666", borderRadius: 1, backgroundColor: "white", color: "black" }
							}}
						>
							<Box
								sx={{
									mb: 3,
									"& .MuiTypography-subtitle1": { fontSize: "1.2rem" },
									"& .MuiTextField-root": { width: "100%", fontSize: "1.4rem", backgroundColor: "white", border: "1px solid #aaa" },
								}}
							>
								<Typography variant={"subtitle1"}>제목</Typography>
								<TextField
									name="title"
									placeholder={"제목을 입력해주세요."}
									value={title}
									onChange={onChange}
								/>
							</Box>
							<Box
								sx={{
									mb: 3,
									"& .MuiTypography-subtitle1": { fontSize: "1.2rem" },
									"& .moduleList": { my: 2, p: 3, width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", border: "1px solid #666", backgroundColor: "white" },
									"& .moduleList li": { m: "1%", p: 2, cursor: "grab", textAlign: "center", fontSize: "1rem", border: "1px solid #666", listStyle: "none", width: "30%" }
								}}
							>
								<Typography variant={"subtitle1"}>많이 사용하는 목록</Typography>
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
										<li key={element.id}>
											<Typography variant={"body1"}>
												{element.label}
											</Typography>
										</li>
									))}
								</ReactSortable>
							</Box>
							<Box
								sx={{
									mb: 3,
									"& .MuiTypography-subtitle1": { fontSize: "1.2rem" },
									"& .moduleList": { my: 2, p: 3, width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", border: "1px solid #666", backgroundColor: "white" },
									"& .moduleList li": { m: "1%", p: 2, textAlign: "center", fontSize: "1rem", border: "1px solid #666", listStyle: "none", width: "30%" }
								}}
							>
								<Typography variant={"subtitle1"}>추가할 목록</Typography>
								
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
							</Box>
							
							<Chip label={"신청일"}/>
							<Chip label={"성명(서명)"}/>
							<Chip label={"제출처"}/>
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
					<Button variant="outlined">
						url 복사
					</Button>
					<Button variant="contained">
						만들기
					</Button>
				</Box>
			</Container>
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Post;
