import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
	Box,
	Button, Card,
	Container,
	Drawer,
	Grid, Modal,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import Partner from "@components/Item/partner";
import Link from "next/link";
import { getFormUserAction } from "@actions/post";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { elementItem } from "@config/const";
import TextBox from "@components/elements/TextBox";
import InputBox from "@components/elements/InputBox";
import Space from "@components/elements/Space";
import Agree from "@components/elementGroup/Agree";
import Person from "@components/elementGroup/Person";

type ItemProps = {
	data: any;
};

// const listData:any = {
// 	a: {
// 		no: "1",
// 		date: "2022.08.11",
// 		title: "모아 동아리 3기 모집",
// 		count: "3",
// 	},
// 	b: {
// 		no: "2",
// 		date: "2022.08.11",
// 		title: "이벤트 모집",
// 		count: "11",
// 	}
// }

const Partners: NextPage<ItemProps> = ({data}) => {
	const dispatch = useDispatch();
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const [form, setForm] = useState<any>([]);
	const [userList, setUserList] = useState<any[]>([]);
	const [userForm, setUserForm] = useState<any>();
	const [currentItem, setCurrentItem] = useState<any>();
	
	// console.log(data);
	
	useEffect(() => {
		let userGroup:any[] = [];
		
		post?.user?.map((dat:any, idx:number) => {
			let inputGroup:any[] = [];
			
			try {
				dat.content.map((da:any, id:number) => {
					da.items.map((d:any, i:number) => {
						if (d.type == "Input") {
							inputGroup.push(d);
						}
					})
				})
			} catch (e) {
				Object.keys(dat.content).map((da:any, id:number) => {
					if (dat.content[da]) {
						inputGroup.push(dat.content[da]);
					}
				})
			}
			userGroup.push({ id: dat.id, inputList: inputGroup })
			inputGroup = [];
		});
		
		setUserList(userGroup);
		setUserForm(post.user);
	}, [post])
	
	// console.log(form);
	
	const [inputGroup, setInputGroup] = useState<any[]>([]);
	
	const handleClick = (id: number) => {
		setIsDrawer(true);
		
		let inputGroup:any[] = [];
		const currentItem = data?.filter((f:any) => f.id == id)[0];
		
		try {
			currentItem.content.map((dat:any, idx:number) => {
				dat.items.map((da:any, id:number) => {
					if (da.type == "Input") {
						inputGroup.push(da);
					}
				})
			});
		} catch (e) {
			Object.keys(currentItem.content).map((dat:any, idx:number) => {
				if (currentItem.content[dat]) {
					inputGroup.push(dat);
				}
			});
		}
		
		setInputGroup(inputGroup);
		setCurrentItem(currentItem);
		setForm(currentItem.content);

		const info = {
			user: currentItem.user,
			post: currentItem.id,
		}
		
		dispatch(getFormUserAction.request(info));
	}
	
	console.log(inputGroup);
	
	const [isDrawer, setIsDrawer] = useState(false);
	const [isModal, setIsModal] = useState(false);
	
	const handleCloseDrawer = () => {
		setIsDrawer(false)
	}
	
	const handleCloseModal = () => {
		setIsModal(false)
	}
	
	const [currentFormId, setCurrentFormId] = useState(0);
	
	const handleDocViewer = (id:number) => {
		setCurrentFormId(id);
		setIsModal(true);
	}
	
	const createElements = (props: elementItem) => {
		const { element } = props;
		
		switch (element) {
			case "TextBox":
				return <TextBox props={ props } />;
			case "InputBox":
				return <InputBox props={ props } />;
			case "Space":
				return <Space props={ props } />;
			case "Agree":
				return <Agree props={ props } />;
			case "Person":
				return <Person props={ props } />;
			default:
				return "";
		}
	}
	
	const setClassName = (props: elementItem) => {
		if (!props) return;
		
		const {
			isBold,
			isItalic,
			isUnderLine,
			isThrough,
			isGrid,
			fontSize,
			align,
			border,
			unfold,
		} = props.options;
		
		let returnClassName = "";
		
		if (isBold) returnClassName += returnClassName == "" ? "fontBold" : " fontBold";
		if (isItalic) returnClassName += returnClassName == "" ? "fontItalic" : " fontItalic";
		if (isUnderLine) returnClassName += returnClassName == "" ? "fontUnderLine" : " fontUnderLine";
		if (isThrough) returnClassName += returnClassName == "" ? "fontThrough" : " fontThrough";
		if (fontSize) returnClassName += returnClassName == "" ? "font"+fontSize : " font"+fontSize;
		if (align) returnClassName += returnClassName == "" ? "font"+align : " font"+align;
		
		if (border) returnClassName += returnClassName == "" ? "box"+border : " box"+border;
		if (unfold) returnClassName += returnClassName == "" ? "box"+unfold : " box"+unfold;
		if (isGrid) returnClassName += returnClassName == "" ? "boxGrid" : " boxGrid";
		
		return returnClassName;
	}
	
	// console.log(userForm?.filter((f:any) => f.id == currentFormId))
	
	return (
		<Box
			sx={{
				py: 8,
				minHeight: "450px",
				"& .MuiTypography-root": { textAlign: "center" },
				"& .MuiTableCell-head": { py:.5, backgroundColor: "rgba(224, 224, 224, 1)" }
			}}
		>
			<Table>
				<colgroup>
					<col width={"10%"}/>
					<col width={"20%"}/>
					<col/>
					<col width={"10%"}/>
					<col width={"30%"}/>
				</colgroup>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography>
								순번
							</Typography>
						</TableCell>
						<TableCell>
							<Typography>
								작성일
							</Typography>
						</TableCell>
						<TableCell>
							<Typography>
								제목
							</Typography>
						</TableCell>
						<TableCell>
							<Typography>
								문의
							</Typography>
						</TableCell>
						<TableCell>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.sort((a: any, b: any) => a.order - b.order).map((dat:any, idx:number) => (
						<TableRow key={idx}>
							<TableCell>
								<Typography>
									{dat.orderby}
									{/*{ listData[dat].no }*/}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{dat.regDate}
									{/*{ listData[dat].date }*/}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{dat.title}
									{/*{ listData[dat].title }*/}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{dat.cnt}
									{/*{ listData[dat].count }*/}
								</Typography>
							</TableCell>
							<TableCell>
								<Grid container>
									<Grid item xs={3}>
										<Button variant="outlined" onClick={() => handleClick(dat.id)}>
											<Typography variant={"body2"}>
												목록
											</Typography>
										</Button>
									</Grid>
									<Grid item xs={3} sx={{ color: "blue", textDecoration: "underline"}}>
										<Link href={"#"}>
											<a>
												<Typography variant={"body2"}>
													다운로드
												</Typography>
											</a>
										</Link>
									</Grid>
									<Grid item xs={3} sx={{ color: "#666" }}>
										<Typography variant={"body2"}>
											안내
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Button variant="outlined" color="error" size={"small"}>
											삭제
										</Button>
									</Grid>
								</Grid>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			
			{/*<Box*/}
			{/*	sx={{*/}
			{/*		p: 8,*/}
			{/*		textAlign: "center",*/}
			{/*		"& button": { color: "black", borderColor: "black" }*/}
			{/*	}}*/}
			{/*>*/}
			{/*	<Button variant="outlined">*/}
			{/*		<KeyboardArrowDownIcon />*/}
			{/*		더보기 (1/3)*/}
			{/*	</Button>*/}
			{/*</Box>*/}
			
			<Modal
				open={isModal}
				onClose={handleCloseModal}
				sx={{
					overflowY: "auto",
				}}
			>
				<Card
					sx={{
						mx: "auto",
						my: 10,
						width: "768px",
						height: "1024px",
						backgroundColor: "white",
						border: "1px solid black",
					}}
				>
					{userForm?.filter((f:any) => f.id == currentFormId)[0]?.content?.map((dat:any, idx:number) => {
							const length = dat.items.length;
							return (
								<Box key={idx}>
									<Grid container>
										{dat.items.map((da:any, id:number) => {
											return (
												<Grid key={id} item xs={12 / length} className={`${setClassName(da)} ${dat.items.length > 1 ? id ? "el-right" : "el-left" : ""}`}>
													{ createElements(da) }
												</Grid>
											);
										})}
									</Grid>
								</Box>
							);
					})}
				</Card>
			</Modal>
			
			<Drawer
				anchor={"bottom"}
				open={isDrawer}
				onClose={handleCloseDrawer}
				sx={{
					"& .MuiPaper-root": {
						p: 20,
						pb: 25,
						height: "100%",
					},
					"& .regList": {
						m: 0,
						mx: "auto",
						width: "1200px",
					}
				}}
			>
				<Box className={`regList`}>
					<Button variant={`outlined`} onClick={handleCloseDrawer}>
						닫기
					</Button>
					<Table sx={{ minWidth: 650 }} aria-label="simple table">
						<TableHead>
							<TableRow>
								{inputGroup.map((dat:any, idx:number) => {
									return <TableCell key={idx}>{dat.label ? dat.label : dat}</TableCell>;
								})}
								<TableCell>
									Action
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{userList?.map((dat:any, idx: number) => {
								return (
									<TableRow key={idx}>
										{
											dat.inputList.map((da:any, id:number) => {
												return (
													<TableCell key={id}>{ da.value ? da.value : da }</TableCell>
												)
											})
										}
										<TableCell>
											<Button variant={`outlined`} onClick={() => handleDocViewer(dat.id)}>
												문서보기
											</Button>
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</Box>
			</Drawer>
		</Box>
	);
};

export default Partners;
