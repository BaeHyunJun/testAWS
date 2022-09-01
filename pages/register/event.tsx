import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

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
import { YDR_THEME } from "@config/const";

import Footer from "@components/Menu/footer";
import Header from "@components/Menu/header";
import Sample1 from "@components/etc/sample1";
import Sample2 from "@components/etc/sample2";
import Sample3 from "@components/etc/sample3";
import Loading from "@components/etc/Loading";
import Sample4 from "@components/etc/sample4";
import SubMemu from "@components/Menu/subMenu";
import Image from "next/image";

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
						<Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/event.png"} alt={""} width={30} height={30} />
						<TextField
							variant="standard"
							placeholder="새로운 이벤트 작성하기"
							InputProps={{
								endAdornment: <Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/pencil.png"} alt={""} width={30} height={30} />
							}}
						/>
					</Box>
				</Container>
			</Box>
			
			<Container
				sx={{
					pt: 5,
					width: 950,
					"& .MuiChip-root": { m: 1, p: 3, minWidth: "130px", border: "1px solid #666", borderRadius: 1, backgroundColor: "white", color: "black" }
				}}
			>
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-subtitle1": { px: 2, fontSize: "1.3rem" },
						"& .MuiChip-root": { m: 0, my: 2, p: 4.5, width: "100%", fontSize: "1.4rem" }
					}}
				>
					<Typography variant={"subtitle1"}>제목</Typography>
					<Chip label={"모아 동아리 3기 모집 신청서"}/>
				</Box>
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle1": { fontSize: "1.3rem", display: "inline" },
						"& .imageBox": { m: 0, my: 2, p: 0, width: "100%", height: "500px" }
					}}
				>
					<Typography variant={"caption"} component={"span"}>STEP 1.</Typography>
					<Typography variant={"subtitle1"}>이미지 업로드</Typography>
					<Box className={"imageBox"}>
						<Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/thumb.png"} width={950} height={500}/>
					</Box>
				</Box>
				<Box
					sx={{
						mb: 5,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle1": { fontSize: "1.3rem", display: "inline" },
						"& .imageBox": { m: 0, my: 2, p: 0, textAlign: "center", width: "100%", height: "500px", backgroundColor: "white", border: "1px solid #436ff7" },
						"& .MuiTypography-body1": { fontSize: "1.2rem", color: "#999", lineHeight: "500px" },
					}}
				>
					<Typography variant={"caption"} component={"span"}>STEP 2.</Typography>
					<Typography variant={"subtitle1"}>제출용 업로드</Typography>
					<Box className={"imageBox"}>
						<Typography variant={"body1"}>
							이미지를 업로드 해주세요.
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						mb: 3,
						"& .MuiTypography-caption": { pl: 2, mb: 2, fontSize: "1.2rem", letterSpacing: .1, color: "#436ff7" },
						"& .MuiTypography-subtitle1": { fontSize: "1.3rem", display: "inline" },
						"& .MuiTypography-subtitle2": { mt: 2, p: 2, fontSize: "1.2rem", border: "1px solid #999", borderTop: "2px solid #436ff7", width: "100%", backgroundColor: "white", textAlign: "center" },
						"& .checkBox": { my: 3, p: 2, border: "1px solid #999", backgroundColor: "white" },
						"& .inputBox": { my: 3, border: "1px solid #999", backgroundColor: "white" },
					}}
				>
					<Typography variant={"caption"} component={"span"}>STEP 3.</Typography>
					<Typography variant={"subtitle1"}>참가 신청서</Typography>
					<Box className={""}>
						<Typography variant={"subtitle2"}>
							이벤트 참가 신청서
						</Typography>
						<Box className={"checkBox"}>
							<FormGroup row>
								<FormControlLabel control={<Checkbox />} label={ "이름" } />
								<FormControlLabel control={<Checkbox />} label={ "생년월일" } />
								<FormControlLabel control={<Checkbox />} label={ "연락처" } />
								<FormControlLabel control={<Checkbox />} label={ "이메일" } />
								<FormControlLabel control={<Checkbox />} label={ "주소" } />
							</FormGroup>
						</Box>
						<Box className={"inputBox"}>
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
											연락처
										</TableCell>
										<TableCell>
											010-1234-5678
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
					<Button variant="contained">
						제출하기
					</Button>
				</Box>
			</Container>
			
			<Footer/>
		</ThemeProvider>
	}
};

export default Home;
