import React, { useEffect, useState } from "react";
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
	Typography, CardActions, Chip,
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
import { AccountCircle } from "@mui/icons-material";
import Image from "next/image";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

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
						<Image src={"/icon/register.png"} alt={""} width={30} height={30} />
						<TextField
							id="title"
							name="title"
							variant="standard"
							placeholder="새로운 모집 신청 작성하기"
							InputProps={{
								endAdornment: <Image src={"/icon/pencil.png"} alt={""} width={30} height={30} />
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
					"& .MuiCard-root": { border: "1px solid" }
				}}
			>
				<Grid container>
					<Grid item xs={6}>
						<Card>
							<CardHeader title={title ? title : "제목을 입력해주세요."} />
							<CardContent>
								<Table>
									<colgroup>
										<col width={"20%"} />
										<col />
									</colgroup>
									<TableBody>
										<TableRow>
											<TableCell>
												이름
											</TableCell>
											<TableCell>
												김모아
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												생년월일
											</TableCell>
											<TableCell>
												1982.08.02
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												연락처
											</TableCell>
											<TableCell>
												010-1234-5678
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												이메일
											</TableCell>
											<TableCell>
												moacube@gmail.com
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>
												주소
											</TableCell>
											<TableCell>
												부산광역시 연제구 법원남로 9번길 17
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<Box
									sx={{
										py:4,
										textAlign: "center",
										"& .areaDate": { my: 3, mx: "auto", py: "3px", backgroundColor: "#efefef", width: "300px"},
										"& .areaSign": { mt: 10, ml: "auto", py: "3px", backgroundColor: "#efefef", width: "250px"}
									}}
								>
									<Typography variant="body1">모집 신청서를 제출합니다.</Typography>
									
									<Box className={"areaDate"}>
										<Grid container>
											<Grid item xs={3}>(신청일)</Grid>
											<Grid item xs={3}></Grid>
											<Grid item xs={1}>년</Grid>
											<Grid item xs={1.5}></Grid>
											<Grid item xs={1}>월</Grid>
											<Grid item xs={1.5}></Grid>
											<Grid item xs={1}>일</Grid>
										</Grid>
									</Box>
									
									<Box className={"areaSign"}>
										<Grid container>
											<Grid item xs={4}>(성명)</Grid>
											<Grid item xs={4}></Grid>
											<Grid item xs={4}>(서명)</Grid>
										</Grid>
									</Box>
								</Box>
							</CardContent>
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
									"& .moduleList li": { m: "1%", p: 2, textAlign: "center", fontSize: "1rem", border: "1px solid #666", listStyle: "none", width: "30%" }
								}}
							>
								<Typography variant={"subtitle1"}>많이 사용하는 목록</Typography>
								<ul className={"moduleList"}>
									<li>이름</li>
									<li>생년월일</li>
									<li>주소</li>
									<li>연락처</li>
									<li>이메일</li>
									<li>성별</li>
								</ul>
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
								<ul className={"moduleList"}>
									<li>통장</li>
									<li>프로필 사진</li>
									<li>경력</li>
									<li>텍스트</li>
									<li>테두리 없음</li>
									<li>체크 박스</li>
								</ul>
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
