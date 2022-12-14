import { NextPage } from "next";
import {
	Accordion, AccordionDetails, AccordionSummary,
	Box,
	Button,
	Card,
	CardActions,
	CardHeader, Checkbox,
	Container,
	CssBaseline, Divider, FormControlLabel,
	FormGroup,
	Grid, List, ListItem, ListItemText, Table, TableBody, TableCell, TableRow, TextField,
	Typography
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { API, elementItem, YDR_THEME } from "@config/const";
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
import { addFormUserAction, getFormUserAction, getPostAction } from "@actions/post";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import TextBox from "@components/elements/TextBox";
import InputBox from "@components/elements/InputBox";
import Agree from "@components/elementGroup/Agree";
import { useRouter } from "next/router";
import { addMoaFormUser } from "@api/index";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AWS from "aws-sdk";

const Event: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	
	const [postID, setPostID] = useState<number>(0)
	
	useEffect(() => {
		const id = router.query.id;
		
		if (id != undefined) {
			setPostID(parseInt(id.toString()));
			dispatch(getPostAction.request (id));
			
			const info = {
				user: 1,
				post: id,
			}
			
			dispatch(getFormUserAction.request(info));
		}
	}, [router, dispatch]);
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const initState = {
		name: true,
		birth: false,
		tel: false,
		email: false,
		address: false,
		content: false,
		isList: false,
		attachments: 0,
	}
	
	const [title, setTitle] = useState<string>("");
	const [img, setImg] = useState<string>('');
	const [eventState, setEventState] = useState(initState);
	
	const { name, birth, tel, email, address, content, isList, attachments } = eventState;
	
	const [user, setUser] = useState<any>([]);
	
	const [endDate, setEndDate] = useState<any>(new Date());
	
	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setImg(post.thumbnail);
			post.line.length != 0 && setEventState(post.line);
			setUser(post.user);
			
			if (post.endDate) {
				let endDay = post.endDate?.toString().substring(0,4) + "-" + post.endDate?.toString().substring(4,6) + "-" + post.endDate?.toString().substring(6,8);
				let endDate = new Date(endDay);
				setEndDate(endDate);
			}
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
			attachment1: `${API.S3}${uploadS3File(file1)}` || "",
			attachment2: `${API.S3}${uploadS3File(file2)}` || "",
			attachment3: `${API.S3}${uploadS3File(file3)}` || "",
		}
		
		try {
			dispatch(addFormUserAction.request(newPost));
			// console.log(newPost);
			
			alert("이벤트 신청이 완료되었습니다.");
			// unDisabledButton(e);
		} catch (err) {
			console.log(err);
		}
	}
	
	const [file1, setFile1] = useState<any>("")
	const [file2, setFile2] = useState<any>("")
	const [file3, setFile3] = useState<any>("")
	const [thumb1, setThumb1] = useState<any>('');
	const [thumb2, setThumb2] = useState<any>('');
	const [thumb3, setThumb3] = useState<any>('');
	
	AWS.config.update({
		accessKeyId: API.S3_ACCESS_KEY,
		secretAccessKey: API.S3_SECRET_ACCESS_KEY,
	});
	
	const myBucket = new AWS.S3({
		params: { Bucket: API.BUCKET},
		region: API.REGION,
	});
	
	const uploadS3File = (file: any) => {
		const date = new Date();
		
		const year = date.getFullYear();
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const day = ('0' + date.getDate()).slice(-2);
		
		const hour = ('0' + date.getHours()).slice(-2);
		const minute = ('0' + date.getMinutes()).slice(-2);
		const second = ('0' + date.getSeconds()).slice(-2);
		
		let filePath = "";
		
		if (file) {
			filePath = `event/${year}/${month}/${day}/${hour}_${minute}_${second}_${file.name}`;
			
			// s3 파일 생성
			const params = {
				ACL: 'public-read',
				Body: file,
				Bucket: API.BUCKET,
				Key: filePath,
				ContentType: "",
			};
			
			myBucket.putObject(params)
			// .on('httpUploadProgress', (evt) => {
			// })
			.send((err) => {
				if (err) console.log(err)
			})
		}
		
		return filePath;
	}
	
	const onSelectedFile = (e?: any) => {
		const { name, files } = e.target;
		
		const file = files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);

		return new Promise((resolve) => {
			reader.onload = () => {
				switch (name) {
					case "file1":
						setFile1(file);
						setThumb1(reader.result);
						break;
					case "file2":
						setFile2(file);
						setThumb2(reader.result);
						break;
					case "file3":
						setFile3(file);
						setThumb3(reader.result);
						break;
				}
			};
		});
	}
	
	const viewAttachments = () => {
		let html = [];
		
		for (let i = 0; i < attachments; i++) {
			let img;
			
			switch (i) {
				case 0:
					img = thumb1;
					break;
				case 1:
					img = thumb2;
					break;
				case 2:
					img = thumb3;
					break;
			}
			
			html.push(
				<TableRow key={i}>
					<TableCell>
						첨부파일 { i + 1}
					</TableCell>
					<TableCell>
						<Grid container>
							<Grid item xs={3} sx={img ? { lineHeight: "150px" } : {}}>
								<Button variant="outlined" component={"label"}>
									파일 업로드
									<input name={`file${i+1}`} hidden accept="image/*" multiple type="file" onChange={onSelectedFile} />
								</Button>
							</Grid>
							<Grid item xs={9}>
								{ img && (
									<Box sx={{ width: 150, height: 150, overflow: "hidden", border: "1px solid gray" }}>
										<img src={img} alt={`첨부파일${i + 1}`} width={"100%"} />
									</Box>
								)}
							</Grid>
						</Grid>
					</TableCell>
				</TableRow>
			);
		}
		
		return html;
	}
	
	// console.log(user?.length, post.count);
	
	return postID ? (
		<ThemeProvider theme={ YDR_THEME }>
			<CssBaseline />
			
			<Container
				sx={{
					mt: 5,
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
				
				{
					endDate < new Date() || user?.length >= post.count ? (
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
									현재 이벤트는 마감되었습니다.
								</Typography>
							</Box>
						</Box>
					) : (
					<>
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
												(재)영주세계풍기인삼엑스포조직위원회는 후기 이벤트와 관련하여 아래와 같은 개인정보를 수집·이용합니다.<br />
												(재)영주세계풍기인삼엑스포조직위원회는 「개인정보보호법」에 따라 응모자의 개인정보를 관리하며,<br />
												수집하는 개인정보의 목적, 항목, 보유 기한은 다음과 같습니다.<br /><br />
											</Typography>
										
											<Typography>
												■ 개인정보 수집 및 이용 목적 : 이벤트 참여 및 경품 발송<br /><br />
												
												■ 수집하는 개인정보 항목 : { name && "이름" } { birth && "생년월일" } { tel && "연락처" } { email && "이메일" } { address && "주소" }
												<br /><br />
												
												■ 개인정보의 보유 및 이용기간 : 수집 및 이용목적(경품 발송) 달성 후 즉시 파기<br /><br />
												
												※ 개인정보제공에 동의를 거부할 수 있으며, 이 경우 이벤트 참여 참여가 제한됩니다.
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
											{ viewAttachments() }
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
					</>
					)
				}
				{isList && user?.length > 0 && (
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-subtitle2": { mt: 2, p: 2, fontSize: "1.2rem", borderBottom: "1px solid #999", borderTop: "2px solid #436ff7", width: "100%", backgroundColor: "white", textAlign: "center" },
					}}
				>
					<Typography variant={"subtitle2"}>
						이벤트 참가자
					</Typography>
					{user?.map((data:any, idx:number) => {
						return (
							<>
							<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
								<ListItem alignItems="flex-start" sx={{ borderBottom: "1px solid #999" }}>
									<ListItemText
										primary={
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<Typography
													sx={{ display: 'inline' }}
													component="span"
													variant="body1"
													color="text.primary"
												>
													{data.content.name.substr(0, 1)} * {data.content.name.substr(data.content.name.length - 1, 1)}
												</Typography>
												<Typography
													sx={{ display: 'inline' }}
													component="span"
													variant="body2"
												>
													{ data.regDate.substr(0, 4) }년 { data.regDate.substr(4, 2) }월 { data.regDate.substr(6, 2) }일
												</Typography>
											</Box>
										}
										// secondary={
										// 	<React.Fragment>
										// 		<Typography
										// 			sx={{ display: 'inline' }}
										// 			component="span"
										// 			variant="body2"
										// 			color="text.primary"
										// 		>
										// 			Ali Connors
										// 		</Typography>
										// 		{" — I'll be in your neighborhood doing errands this…"}
										// 	</React.Fragment>
										// }
									/>
								</ListItem>
								{/*<Divider variant="inset" component="li" />*/}
							</List>
							
							</>
						)
					})}
				</Box>
				
				)}
			</Container>
		</ThemeProvider>
	) : <></>;
}

export default Event;