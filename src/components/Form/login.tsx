import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { SITE_TYPO } from "@config/const";

const { label, button } = SITE_TYPO.FORM_LOGIN;

type ItemProps = {
	// eslint-disable-next-line no-unused-vars
	onChange: () => void;
	onLogin: () => void;
};

const Login: NextPage<ItemProps> = ({ onChange, onLogin }) => {
	
	return (
		<Box
			component="form"
			sx={{
				"& .MuiTextField-root": { m: 1, width: "100%", bgcolor: "white" },
				"& .MuiButton-root": { m: 1, width: "100%" },
				"& .MuiTypography-root": { m: 1, cursor: "pointer", color: "#1876d2" },
			}}
			noValidate
			autoComplete="off"
		>
			<div>
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
				<Button variant="contained" size="large" onClick={onLogin}>
					{button.login}
				</Button>
			</div>
		</Box>
	);
};

export default Login;

// function propsAreEqual(prev: any, next: any) {
// 	return prev.data === next.data;
// }
//
// export default React.memo(Login, propsAreEqual);
