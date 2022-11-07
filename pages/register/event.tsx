import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import AWS from 'aws-sdk';

import {
	Box,
	Container,
	CssBaseline,
	CircularProgress,
	TextField,
	Typography,
	Chip,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Table,
	TableBody,
	TableRow,
	TableCell, Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { authCurrentUser, authSignOut } from "@config/auth";
import { API, YDR_THEME } from "@config/const";

import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import Loading from "@components/etc/Loading";
import Sample4 from "@components/etc/sample4";
import SubMemu from "@components/Menu/subMenu";
import Image from "next/image";
import { getPostAction, postAction } from "@actions/post";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";

const initState = {
	name: true,
	birth: false,
	tel: false,
	email: false,
	address: false,
	content: false
}

const Event: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	
	const [isLoginState, setIsLoginState] = useState(false);
	const [uiState, setUiState] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	
	const [title, setTitle] = useState<string>("");
	const [file, setFile] = useState<any>("")
	const [eventState, setEventState] = useState(initState);
	
	const onInputTitle = (e?: any) => {
		const { value } = e.target;
		
		setTitle(value);
	}
	
	const onChange = (e?: any) => {
		setEventState({ ...eventState, [e.target.name]: e.target.checked});
	}
	
	const { name, birth, tel, email, address, content } = eventState;
	
	const [postID, setPostID] = useState<number>(0);
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	useEffect(() => {
		const id = router.query.id;
		
		if (id != undefined) {
			setPostID(parseInt(id.toString()));
			dispatch (getPostAction.request (id));
		}
	}, [router, dispatch]);
	
	useEffect(() => {
		if (post) {
			setTitle(post.title);
			setImg(post.thumbnail);
			post.line.length != 0 && setEventState(post.line);
		} else {
			setEventState(initState);
		}
	}, [post]);
	
	// console.log(file);
	
	// useEffect(() => {
	// 	if (file) {
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL (file);
	//
	// 		return new Promise (( resolve ) => {
	// 			reader.onload = () => {
	// 				setImg (reader.result);
	// 			};
	// 		});
	// 	} else {
	// 		setImg("");
	// 	}
	// }, [file]);
	
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
	
	AWS.config.update({
		accessKeyId: API.S3_ACCESS_KEY,
		secretAccessKey: API.S3_SECRET_ACCESS_KEY,
	});
	
	const myBucket = new AWS.S3({
		params: { Bucket: API.BUCKET},
		region: API.REGION,
	});
	
	const [img, setImg] = useState<any>('');
	
	const onSelectedFile = (e?: any) => {
		const file = e.target.files[0];
		// const fileExt = file.name.split('.').pop();
		// if(file.type !== 'image/jpeg' || fileExt !=='jpg'){
		// 	alert('jpg 파일만 Upload 가능합니다.');
		// 	return;
		// }
		setFile(file);
		const reader = new FileReader();
		reader.readAsDataURL(file);

		return new Promise((resolve) => {
			reader.onload = () => {
				setImg(reader.result);
				// resolve();
			};
		});
		
		// reader.onloadend = () => {
		// 	const readerImge = [reader.result];
		// 	const readFile = [file];
		//
		// 	setImg(reader.result);
		//
		// 	console.log(readerImge);
		// 	console.log(readFile);
		// 	console.log(reader);
		//
		// 	setSelectedFile(file);
		//
		// 	// setProductImgUrlList(readerImge.concat(productImgUrlList));
		// 	// setProductImgFileList(readFile.concat(productImgFileList));
		// };
		
		// return;
	}
	
	const validate = () => {
		if (!title) {
			return "제목을 입력해주세요.";
		}
		if (!file && !img) {
			return "이미지를 등록해주세요.";
		}
		
		return "";
	}
	
	const disabledButton = (e?: any) => {
		e.target.disabled = true;
		e.target.classList.add("Mui-disabled");
	}
	
	const unDisabledButton = (e?: any) => {
		e.target.disabled = false;
		e.target.classList.remove("Mui-disabled");
	}
	
	const onCreateEvent = (e?: any) => {
		disabledButton(e);
		
		try {
			let txt = validate();
			if (txt) {
				alert(txt);
				return unDisabledButton(e);
			}
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
				.on('httpUploadProgress', (evt) => {
					setTimeout(() => {
					}, 3000)
				})
				.send((err) => {
					if (err) console.log(err)
				})
			}
			
			let newPost = {
				id: "",
				title,
				type: "event",
				user: 1,
				order: 1,
				date: `${year}${month}${day}`,
				content: JSON.stringify(eventState),
				thumbnail: filePath ? `${API.S3}${filePath}` : ""
			}
			
			const id = router.query.id;
			if (id != undefined) newPost.id = id.toString();
			
			dispatch(postAction.request(newPost));
			
			unDisabledButton(e);
		} catch (err) {
			console.log("err : ", err);
			return unDisabledButton(e);
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
			
			{/*<Box sx={{ pt: "144px", fontSize: 0, backgroundColor: "white" }}>*/}
			{/*	<Container>*/}
			{/*		<Box*/}
			{/*			sx={{*/}
			{/*				py: 5,*/}
			{/*				display: 'flex',*/}
			{/*				alignItems: 'flex-end',*/}
			{/*				"& .MuiTextField-root": { mx: 2, width: 300 }*/}
			{/*			}}*/}
			{/*		>*/}
			{/*			<img src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/event.png"} alt={""} width={30} height={30} />*/}
			{/*			<TextField*/}
			{/*				variant="standard"*/}
			{/*				placeholder="새로운 이벤트 작성하기"*/}
			{/*				InputProps={{*/}
			{/*					endAdornment: <img src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/pencil.png"} alt={""} width={30} height={30} />*/}
			{/*				}}*/}
			{/*			/>*/}
			{/*		</Box>*/}
			{/*	</Container>*/}
			{/*</Box>*/}
			
			<Container
				sx={{
					// pt: "144px",
					pt: 20,
					width: 950,
					"& .MuiChip-root": { m: 1, p: 3, minWidth: "130px", border: "1px solid #666", borderRadius: 1, backgroundColor: "white", color: "black" }
				}}
			>
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle1": { pl: 1, fontSize: "1.3rem", display: "inline" },
						"& .MuiChip-root": { m: 0, my: 2, p: 4.5, width: "100%", fontSize: "1.4rem" }
					}}
				>
					<Typography variant={"caption"} component={"span"}>STEP 1.</Typography>
					<Typography variant={"subtitle1"}>제목</Typography>
					<Box sx={{
						mt: 2,
						p: 0,
						fontSize: "1.2rem",
						border: "1px solid #999",
						borderTop: "2px solid #436ff7",
						width: "100%",
						backgroundColor: "white",
						textAlign: "center",
						"& .MuiInputBase-root": {
							p: 1,
						}
					}}>
						<TextField
							fullWidth
							size={ "small" }
							placeholder={ "이벤트 제목을 입력해주세요." }
							value={title || ""}
							onChange={onInputTitle}
						/>
					</Box>
				</Box>
				{/*<Box*/}
				{/*	sx={{*/}
				{/*		mb: 3,*/}
				{/*		"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },*/}
				{/*		"& .MuiTypography-subtitle1": { fontSize: "1.3rem", display: "inline" },*/}
				{/*		"& .imageBox": { m: 0, my: 2, p: 0, width: "100%", height: "500px" }*/}
				{/*	}}*/}
				{/*>*/}
				{/*	<Typography variant={"caption"} component={"span"}>STEP 1.</Typography>*/}
				{/*	<Typography variant={"subtitle1"}>이미지 업로드</Typography>*/}
				{/*	<Box className={"imageBox"}>*/}
				{/*		<img src={"https://moacube.s3.ap-northeast-2.amazonaws.com/thumb.png"} width={950} height={500}/>*/}
				{/*	</Box>*/}
				{/*</Box>*/}
				<Box
					sx={{
						mb: 5,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle1": { pl: 1, fontSize: "1.3rem", display: "inline" },
						"& .imageBox": { m: 0, my: 2, p: 0, textAlign: "center", width: "100%", minHeight: "500px", backgroundColor: "white", border: "1px solid #436ff7" },
						"& .MuiTypography-body1": { fontSize: "1.2rem", color: "#999", lineHeight: "500px" },
					}}
				>
					<Typography variant={"caption"} component={"span"}>STEP 2.</Typography>
					<Typography variant={"subtitle1"}>이미지 업로드</Typography>
					<Box className={"imageBox"} sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
						
						{img ? (
							<Box
								sx={{
									position: "relative",
									width: "100%",
									fontSize: 0,
								}}
							>
								{/*<Image src={img} width={900} height={100}/>*/}
								<img src={img} alt={`${title}`} width={"100%"} />
								
								<Box
									sx={{
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										display: "flex",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<Button variant={"contained"} component={"label"} sx={{ height: 36 }}>
										이미지 수정
										<input hidden accept="image/*" multiple type="file" onChange={onSelectedFile} />
									</Button>
								</Box>
							</Box>
						) : (
							<Button variant="outlined" component={"label"}>
								이미지를 업로드 해주세요.
								<input hidden accept="image/*" multiple type="file" onChange={onSelectedFile} />
							</Button>
						)}
					</Box>
				</Box>
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle1": { pl: 1, fontSize: "1.3rem", display: "inline" },
						"& .MuiTypography-subtitle2": { mt: 2, p: 2, fontSize: "1.2rem", border: "1px solid #999", borderTop: "2px solid #436ff7", width: "100%", backgroundColor: "white", textAlign: "center" },
						"& .checkBox": { my: 3, p: 2, border: "1px solid #999", backgroundColor: "white" },
						"& .inputBox": { my: 3, border: "1px solid #999", backgroundColor: "white" },
					}}
				>
					<Typography variant={"caption"} component={"span"}>STEP 3.</Typography>
					<Typography variant={"subtitle1"}>입력 요소 선택</Typography>
					<Box className={""}>
						<Typography variant={"subtitle2"}>
							이벤트 참가 신청서
						</Typography>
						<Box className={"checkBox"}>
							<FormGroup row>
								<FormControlLabel control={<Checkbox name={"name"} disabled checked={name} onChange={onChange} />} label={ "이름" } />
								<FormControlLabel control={<Checkbox name={"birth"} checked={birth} onChange={onChange} />} label={ "생년월일" } />
								<FormControlLabel control={<Checkbox name={"tel"} checked={tel} onChange={onChange} />} label={ "연락처" } />
								<FormControlLabel control={<Checkbox name={"email"} checked={email} onChange={onChange} />} label={ "이메일" } />
								<FormControlLabel control={<Checkbox name={"address"} checked={address} onChange={onChange} />} label={ "주소" } />
								<FormControlLabel control={<Checkbox name={"content"} checked={content} onChange={onChange} />} label={ "내용" } />
							</FormGroup>
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
														disabled
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
														disabled
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
														disabled
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
														disabled
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
														disabled
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
														disabled
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
						py: 5,
						textAlign: "center",
						"& .MuiButton-root": { m: 3, p: 1, width: "50%", backgroundColor: "#5672f7" },
					}}
				>
					<Button variant="contained" onClick={onCreateEvent}>
						이벤트 {postID ? "수정" : "생성"}
					</Button>
				</Box>
			</Container>
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Event;
