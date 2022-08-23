import React, { useState } from "react";
import { NextPage } from "next";
import {
	Box, Breadcrumbs,
	Button,
	Card,
	Checkbox,
	Divider,
	FormControlLabel,
	FormGroup,
	TextField,
	Typography
} from "@mui/material";
import { SITE_TYPO } from "@config/const";
import Image from "next/image";
import Link from "next/link";

const { label, placeholder } = SITE_TYPO.FORM_AUTH;

type ItemProps = {
	// eslint-disable-next-line no-unused-vars
	onChange: () => void;
	onSignin: () => void;
	
	linkSignUp: () => void;
};

const Signin: NextPage<ItemProps> = ( { onChange, onSignin, linkSignUp }) => {
	
	return (
		<Box
			component="form"
			sx={{
				m: "0 auto",
				width: "500px",
				textAlign: "center",
				"& h4": { p: 4 },
				"& .MuiTextField-root": { m: 1, width: "100%", backgroundColor: "white" },
				"& .MuiCheckbox-root.Mui-checked": { color: "#5570f2" },
				"& .MuiButton-root": { m: 1, p: 1, fontSize: "1.3rem", width: "100%", backgroundColor: "#5570f2" },
				"& .MuiBreadcrumbs-root": { p: "25px 0 40px", float: "right" },
				"& .areaSignUpLink": { m:1,  display: "inline-flex", border: "gray 1px solid", p: 2, backgroundColor: "white", width: "100%" },
				"& .areaSignUpLink .MuiTypography-root": { fontSize: "1.1rem", margin: "0 auto" },
				"& .areaSignUpLink .MuiTypography-root a": { color: "#5570f2", textDecoration: "underline", ml: 2}
			}}
			noValidate
			autoComplete="off"
		>
			
			<Typography variant="h4" gutterBottom>
				{ label.signin }
			</Typography>
			
			<TextField
				required
				id="email"
				name="email"
				placeholder={ placeholder.email }
				onChange={onChange}
			/>
			<TextField
				required
				id="password"
				type="password"
				autoComplete="current-password"
				name="password"
				placeholder={ placeholder.password }
				onChange={onChange}
			/>
			<Button variant="contained" size="large" onClick={onSignin}>
				{label.signin}
			</Button>
			
			<Breadcrumbs>
				<Link href="/">
					{ label.findEmail }
				</Link>
				<Link href="/">
					{ label.findPassword }
				</Link>
			</Breadcrumbs>
			
			{/*<Button variant="contained" size="large" className="signUpLinkBtn" onClick={linkSignUp}>*/}
			{/*	{label.signup}*/}
			{/*</Button>*/}
			<Box className="areaSignUpLink">
				<Typography>
					계정이 없으신가요?
					<Link href={"/authentication?type=SignUp"}>
						<a>
							이메일 회원가입
						</a>
					</Link>
				</Typography>
			</Box>
		</Box>
		
		//
		// <Box
		// 	component="form"
		// 	sx={{
		// 		textAlign: "center",
		// 		"& .logo": { m: 2 },
		// 		"& .MuiTextField-root": { m: 1, width: "100%", bgcolor: "white" },
		// 		"& .MuiButton-root": { m: 1, width: "100%" },
		// 		"& .MuiTypography-root": { m: 1, cursor: "pointer", color: "black" },
		// 		"& .signUpLinkBtn": { mt: 5 }
		// 	}}
		// 	noValidate
		// 	autoComplete="off"
		// >
		// 	{/*<Box className={"logo"}>*/}
		// 	{/*	<Image alt={"로고?"} src={"/1.jpeg"} width={200} height={200} />*/}
		// 	{/*</Box>*/}
		//
		// 	<TextField
		// 		required
		// 		size="small"
		// 		id="email"
		// 		name="email"
		// 		label={label.email}
		// 		onChange={onChange}
		// 	/>
		// 	<TextField
		// 		required
		// 		size="small"
		// 		id="password"
		// 		name="password"
		// 		label={label.password}
		// 		type="password"
		// 		autoComplete="current-password"
		// 		onChange={onChange}
		// 	/>
		// 	<Button variant="contained" size="large" onClick={onSignin}>
		// 		{label.signin}
		// 	</Button>
		//
		// 	<Box sx={{display: "flex"}} >
		// 		<Typography
		// 			variant="subtitle2"
		// 			gutterBottom
		// 			component="span"
		// 			role={"button"}
		// 			onClick={() => console.log("비밀번호찾기로")}>
		// 			아이디
		// 		</Typography>
		// 		<Divider orientation="vertical" variant="middle" flexItem />
		// 		<Typography
		// 			variant="subtitle2"
		// 			gutterBottom
		// 			component="span"
		// 			role={"button"}
		// 			onClick={() => console.log("비밀번호찾기로")}>
		// 			비밀번호 찾기
		// 		</Typography>
		// 	</Box>
		//
		// 	<Button variant="contained" size="large" className="signUpLinkBtn" onClick={linkSignUp}>
		// 		{label.signup}
		// 	</Button>
		// </Box>
	);
};

export default Signin;

// function propsAreEqual(prev: any, next: any) {
// 	return prev.data === next.data;
// }
//
// export default React.memo(Authentication, propsAreEqual);
