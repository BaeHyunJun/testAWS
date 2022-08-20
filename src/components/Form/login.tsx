import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, Card, Divider, TextField, Typography } from "@mui/material";
import { SITE_TYPO } from "@config/const";
import Image from "next/image";

const { label, button } = SITE_TYPO.FORM_LOGIN;

type ItemProps = {
	// eslint-disable-next-line no-unused-vars
	onChange: () => void;
	onSignin: () => void;
	
	linkSignUp: () => void;
};

const Login: NextPage<ItemProps> = ({ onChange, onSignin, linkSignUp }) => {
	
	return (
		<Box
			component="form"
			sx={{
				textAlign: "center",
				"& .logo": { m: 2 },
				"& .MuiTextField-root": { m: 1, width: "100%", bgcolor: "white" },
				"& .MuiButton-root": { m: 1, width: "100%" },
				"& .MuiTypography-root": { m: 1, cursor: "pointer", color: "black" },
				"& .signUpLinkBtn": { mt: 5 }
			}}
			noValidate
			autoComplete="off"
		>
			<Box className={"logo"}>
				<Image alt={"로고?"} src={"/1.jpeg"} width={200} height={200} />
			</Box>
		
			<TextField
				required
				size="small"
				id="email"
				name="email"
				label={label.email}
				onChange={onChange}
			/>
			<TextField
				required
				size="small"
				id="password"
				name="password"
				label={label.password}
				type="password"
				autoComplete="current-password"
				onChange={onChange}
			/>
			<Button variant="contained" size="large" onClick={onSignin}>
				{button.login}
			</Button>
			
			<Box sx={{display: "flex"}} >
				<Typography
					variant="subtitle2"
					gutterBottom
					component="span"
					role={"button"}
					onClick={() => console.log("비밀번호찾기로")}>
					아이디
				</Typography>
				<Divider orientation="vertical" variant="middle" flexItem />
				<Typography
					variant="subtitle2"
					gutterBottom
					component="span"
					role={"button"}
					onClick={() => console.log("비밀번호찾기로")}>
					비밀번호 찾기
				</Typography>
			</Box>
			
			<Button variant="contained" size="large" className="signUpLinkBtn" onClick={linkSignUp}>
				{button.signup}
			</Button>
		</Box>
	);
};

export default Login;

// function propsAreEqual(prev: any, next: any) {
// 	return prev.data === next.data;
// }
//
// export default React.memo(Authentication, propsAreEqual);
