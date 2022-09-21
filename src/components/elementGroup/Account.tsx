import React from "react";
import { NextPage } from "next";

import Text from "@components/elements/Text"
import { Box, FormControl, FormLabel, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Account: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder, endText } = props;
	
	return (
		<FormControl
			className={`elements eg-Account`}
			sx={{
				px: 4,
				py: 1,
				// p: 0,
				width: "100%",
				".noPadding &": {
					py: 0,
				},
				"& .box": {
					border: "1px solid gray",
					borderBottom: "none",
				},
				"& .box .MuiFormLabel-root": {
					py: 1,
					textAlign: "center",
					display: "inherit",
				},
				"& .box .e-Text": {
					px: 0,
				},
				"& .box .e-Text:last-child": {
					pb: 0,
				},
				"& .box .removeBtn": {
					position: "absolute",
					top: "10px",
					right: "10px",
					cursor: "pointer",
				},
				".border & .MuiInput-root": {
					border: "none",
				},
				".border & .MuiGrid-root.MuiGrid-container:first-of-type": {
					borderTop: "1px solid gray",
				},
			}}
		>
			<Box
				className={`box`}
			>
				<FormLabel>
					<Typography variant={"body1"}>
						{ label }
					</Typography>
					<CloseIcon className="removeBtn" onClick={actionRemove} />
				</FormLabel>
				<Grid container>
					<Grid item xs={12}>
						<Text props={{label: "은행명"}} />
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Text props={{label: "계좌번호"}} />
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Text props={{label: "예금주"}} />
					</Grid>
				</Grid>
			</Box>
		</FormControl>
	);
};

export default Account;
