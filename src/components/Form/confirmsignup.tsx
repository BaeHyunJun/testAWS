import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, TextField } from "@mui/material";

type ItemProps = {
	onChange: (e?: any) => void;
	onSignUp: () => void;
};

const ConfirmSignUp: NextPage<ItemProps> = ({ onChange, onSignUp }) => {
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "100%" },
				"& .MuiButton-root": { m: 1, width: "100%" },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
				<TextField
					required
					size="small"
					id="authCode"
					label="인증 번호"
					name="authCode"
					placeholder="인증번호를 입력해주세요."
					sx={{ bgcolor: "white" }}
					onChange={onChange}
				/>
				<Button variant="contained" size="large" onClick={onSignUp}>
					인증
				</Button>
			</div>
		</Box>
	);
};

export default ConfirmSignUp;

// function propsAreEqual(prev: any, next: any) {
// 	return prev.data === next.data;
// }
//
// export default React.memo(SignUp, propsAreEqual);
