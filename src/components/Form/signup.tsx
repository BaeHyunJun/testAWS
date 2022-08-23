import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import { SITE_TYPO } from "@config/const";

type ItemProps = {
	onChange: (e?: any) => void;
	onSignUp: () => void;
};

const { label, placeholder } = SITE_TYPO.FORM_AUTH;

const SignUp: NextPage<ItemProps> = ({ onChange, onSignUp }) => {
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
				"& .MuiButton-root": { m: 1, mt: 4, p: 1, fontSize: "1.3rem", width: "100%", backgroundColor: "#5570f2" },
				"& .MuiFormGroup-root": { m: 2 }
				
			}}
			noValidate
			autoComplete="off"
		>
			
			<Typography variant="h4" gutterBottom>
				{ label.signup }
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
				placeholder={ placeholder.password + label.checkCountPassword }
				onChange={onChange}
			/>
			<TextField
				required
				id="check_password"
				type="password"
				autoComplete="current-password"
				name="check_password"
				placeholder={ placeholder.chk_password }
				onChange={onChange}
			/>
			
			<FormGroup row>
				<FormControlLabel control={<Checkbox />} label={ label.agree1 } />
				<FormControlLabel control={<Checkbox />} label={ label.agree2 } />
			</FormGroup>
			
			<Button variant="contained" size="large" onClick={onSignUp}>
				{ label.signupBtn }
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
