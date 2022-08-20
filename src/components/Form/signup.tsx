import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

type ItemProps = {
	onChange: (e?: any) => void;
	onSignUp: () => void;
};

const SignUp: NextPage<ItemProps> = ({ onChange, onSignUp }) => {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "100%", bgcolor: "white" },
				"& .MuiButton-root": { m: 1, width: "100%" },
				"& .MuiFormGroup-root": { m: 2 }
			}}
			noValidate
			autoComplete="off"
		>
			
			<Typography variant="h4" gutterBottom>
				회원가입
			</Typography>
			
			<TextField
				required
				size="small"
				id="email"
				label="E-mail"
				name="email"
				placeholder="이메일을 입력해주세요."
				onChange={onChange}
			/>
			<TextField
				required
				size="small"
				id="password"
				label="Password"
				type="password"
				autoComplete="current-password"
				name="password"
				placeholder="비밀번호를 입력해주세요."
				onChange={onChange}
			/>
			<TextField
				required
				size="small"
				id="check_password"
				label="Check Password"
				type="password"
				autoComplete="current-password"
				name="check_password"
				placeholder="비밀번호를 한번 더 입력해주세요."
				onChange={onChange}
			/>
			
			<FormGroup>
				<FormControlLabel control={<Checkbox />} label="이용약관 동의" />
				<FormControlLabel control={<Checkbox />} label="개인정보처리방침 동의" />
			</FormGroup>
			
			<Button variant="contained" size="large" onClick={onSignUp}>
				가입하기
			</Button>
		</Box>
	);
};

export default SignUp;

// function propsAreEqual(prev: any, next: any) {
// 	return prev.data === next.data;
// }
//
// export default React.memo(SignUp, propsAreEqual);
