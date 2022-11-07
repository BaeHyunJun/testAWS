import { NextPage } from "next";
import {
	Accordion, AccordionDetails, AccordionSummary,
	Box,
	Button,
	Card,
	CardActions,
	CardHeader, Checkbox,
	Container,
	CssBaseline, FormControlLabel,
	FormGroup,
	Grid, Table, TableBody, TableCell, TableRow, TextField,
	Typography
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { elementItem, YDR_THEME } from "@config/const";
import Text from "@components/elements/Text";
import Sex from "@components/elementGroup/Sex";
import Notice from "@components/elements/Notice";
import Space from "@components/elements/Space";
import Account from "@components/elementGroup/Account";
import Person from "@components/elementGroup/Person";
import Education from "@components/elementGroup/Education";
import Career from "@components/elementGroup/Career";
import License from "@components/elementGroup/License";
import { ThemeProvider } from "@mui/material/styles";
import { SagaStore, wrapper } from "@store/index";
import { END } from "redux-saga";
import { addFormUserAction, getPostAction } from "@actions/post";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import TextBox from "@components/elements/TextBox";
import InputBox from "@components/elements/InputBox";
import Agree from "@components/elementGroup/Agree";
import { useRouter } from "next/router";
import { addMoaFormUser } from "@api/index";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Event: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	
	const [postID, setPostID] = useState<number>(0)
	
	useEffect(() => {
		const id = router.query.id;
		
		if (id != undefined) {
			setPostID(parseInt(id.toString()));
			dispatch (getPostAction.request (id));
		}
	}, [router, dispatch]);
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const initState = {
		name: true,
		birth: false,
		tel: false,
		email: false,
		address: false,
		content: false
	}
	
	const [title, setTitle] = useState<string>("");
	const [img, setImg] = useState<string>('');
	const [eventState, setEventState] = useState(initState);
	
	const { name, birth, tel, email, address, content } = eventState;
	
	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setImg(post.thumbnail);
			post.line.length != 0 && setEventState(post.line);
		} else {
			setEventState(initState);
		}
	}, [post]);
	
	const initInputState = {
		name: "",
		birth: "",
		tel: "",
		email: "",
		address: "",
		content: ""
	}
	
	const [checkAgree, setCheckAgree] = useState(false);
	const [eventInputState, setEventInputState] = useState(initInputState);
	
	const onInputChange = (e?: any) => {
		setEventInputState({ ...eventInputState, [e.target.name]: e.target.value});
	}
	
	const disabledButton = (e?: any) => {
		e.target.disabled = true;
		e.target.classList.add("Mui-disabled");
	}
	
	const unDisabledButton = (e?: any) => {
		e.target.disabled = false;
		e.target.classList.remove("Mui-disabled");
	}
	
	const validate = () => {
		if (!checkAgree) {
			return "개인 정보 취급 방췸 약관에 동의해주세요.";
		}
		
		if (name && !eventInputState.name) {
			return "이름을 입력해주세요.";
		}
		
		if (birth && !eventInputState.birth) {
			return "생일을 입력해주세요.";
		}
		
		if (tel && !eventInputState.tel) {
			return "연락처를 입력해주세요.";
		}
		
		if (email && !eventInputState.email) {
			return "이메일을 입력해주세요.";
		}
		
		if (address && !eventInputState.address) {
			return "주소를 입력해주세요.";
		}
		
		if (content && !eventInputState.content) {
			return "내용을 입력해주세요.";
		}
		
		return "";
	}
	
	const onSubmitEvent = (e?: any) => {
		disabledButton(e);
		
		let txt = validate();
		if (txt) {
			alert(txt);
			return unDisabledButton(e);
		}
		
		const date = new Date();
		
		const year = date.getFullYear();
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const day = ('0' + date.getDate()).slice(-2);
		
		let newPost = {
			post: postID,
			user: 1,
			date: `${year}${month}${day}`,
			content: `${JSON.stringify(eventInputState)}`,
		}
		
		try {
			dispatch(addFormUserAction.request(newPost));
			
			alert("이벤트 신청이 완료되었습니다.");
		} catch (err) {
			console.log(err);
		}
	}
	
	return postID ? (
		<ThemeProvider theme={ YDR_THEME }>
			<CssBaseline />
			
			<Container
				sx={{
					width: 900,
				}}
			>
				<Box
					sx={{
						position: "relative",
						width: "100%",
						fontSize: 0,
					}}
				>
					<img src={img} alt={`${title}`} width={"100%"} />
				</Box>
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle2": { mt: 2, p: 2, fontSize: "1.2rem", border: "1px solid #999", borderTop: "2px solid #436ff7", width: "100%", backgroundColor: "white", textAlign: "center" },
						"& .agreeBox": { mt: 1, border: "1px solid #999", width: "100%", backgroundColor: "white" },
						"& .inputBox": { my: 1, border: "1px solid #999", backgroundColor: "white" },
					}}
				>
					<Box className={""}>
						<Typography variant={"subtitle2"}>
							이벤트 참가 신청서
						</Typography>
						<Box className={"agreeBox"}>
							<Accordion>
								<AccordionSummary expandIcon={<ExpandMoreIcon />}>
									<Grid container spacing={2}>
										<Grid item xs={10}>
											<Typography variant={"subtitle1"} sx={{ lineHeight: "42px", fontSize: "1.2em"}}>
												개인정보 취급 방침 약관
											</Typography>
										</Grid>
										<Grid item xs={2}>
											<FormControlLabel control={<Checkbox name={"agree"} checked={checkAgree} onClick={() => setCheckAgree(!checkAgree)}  />} label={ "약관 동의" } />
										</Grid>
									</Grid>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
										malesuada lacus ex, sit amet blandit leo lobortis eget.
									</Typography>
								</AccordionDetails>
							</Accordion>
							
						</Box>
						<Box className={"inputBox"}>
							<Table>
								<colgroup>
									<col width={"20%"} />
									<col />
								</colgroup>
								<TableBody>
									{
										name && (
											<TableRow>
												<TableCell>
													이름
												</TableCell>
												<TableCell>
													<TextField
														fullWidth
														size={ "small" }
														placeholder={ "김모아" }
														name={"name"}
														onChange={onInputChange}
													/>
												</TableCell>
											</TableRow>
										)
									}
									{
										birth && (
											<TableRow>
												<TableCell>
													생년월일
												</TableCell>
												<TableCell>
													<TextField
														fullWidth
														size={ "small" }
														placeholder={ "1987-01-01" }
														name={"birth"}
														onChange={onInputChange}
													/>
												</TableCell>
											</TableRow>
										)
									}
									{
										tel && (
											<TableRow>
												<TableCell>
													연락처
												</TableCell>
												<TableCell>
													<TextField
														fullWidth
														size={ "small" }
														placeholder={ "010-1234-5678" }
														name={"tel"}
														onChange={onInputChange}
													/>
												</TableCell>
											</TableRow>
										)
									}
									{
										email && (
											<TableRow>
												<TableCell>
													이메일
												</TableCell>
												<TableCell>
													<TextField
														fullWidth
														size={ "small" }
														placeholder={ "moacube@moacube.co.kr" }
														name={"email"}
														onChange={onInputChange}
													/>
												</TableCell>
											</TableRow>
										)
									}
									{
										address && (
											<TableRow>
												<TableCell>
													주소
												</TableCell>
												<TableCell>
													<TextField
														fullWidth
														size={ "small" }
														placeholder={ "부산광역시 연제구 법원남로 9번길 17" }
														name={"address"}
														onChange={onInputChange}
													/>
												</TableCell>
											</TableRow>
										)
									}
									{
										content && (
											<TableRow>
												<TableCell>
													내용
												</TableCell>
												<TableCell>
													<TextField
														fullWidth
														multiline
														rows={ 5 }
														size={ "small" }
														placeholder={ "내용을 입력해주세요." }
														name={"content"}
														onChange={onInputChange}
													/>
												</TableCell>
											</TableRow>
										)
									}
								</TableBody>
							</Table>
						</Box>
					</Box>
				</Box>
				
				<Box
					sx={{
						pt: 1,
						pb: 5,
						textAlign: "center",
						"& .MuiButton-root": { m: 3, p: 1, width: "50%", backgroundColor: "#5672f7" },
					}}
				>
					<Button variant="contained" onClick={onSubmitEvent}>
						이벤트 신청하기
					</Button>
				</Box>
			</Container>
		</ThemeProvider>
	) : <></>;
}

export default Event;