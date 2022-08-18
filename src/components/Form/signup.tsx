import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, TextField } from "@mui/material";

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
			}}
			noValidate
			autoComplete="off"
		>
			<div>
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
				<Button variant="contained" size="large" onClick={onSignUp}>
					회원가입
				</Button>
			</div>
		</Box>
	);
};

export default SignUp;

// function propsAreEqual(prev: any, next: any) {
// 	return prev.data === next.data;
// }
//
// export default React.memo(SignUp, propsAreEqual);
