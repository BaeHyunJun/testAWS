import React from "react";
import { NextPage } from "next";

import Text from "@components/elements/Text"
import { Box, FormControl, FormLabel, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Sex from "@components/elementGroup/Sex";
import { eAddress, eBirthDay, eMail, eName, ePhone } from "@config/const";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Person: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder, endText } = props;
	
	return (
		<FormControl
			className={`elements eg-Person`}
			sx={{
				px: 4,
				py: 1,
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
				".border & .el-right": {
					borderLeft: "1px solid gray"
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
					{/*{ actionRemove && <CloseIcon className="removeBtn" onClick={ actionRemove }/> }*/}
				</FormLabel>
				{/*<Grid container>*/}
				{/*	<Grid item xs={2}>*/}
				{/*	</Grid>*/}
				{/*	<Grid item xs={10}>*/}
						<Grid container>
							<Grid item xs={6} className={`el-left`}>
								<Text props={eName} />
							</Grid>
							<Grid item xs={6} className={`el-right`}>
								<Text props={eBirthDay} />
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={6} className={`el-left`}>
								<Text props={eMail} />
							</Grid>
							<Grid item xs={6} className={`el-right`}>
								<Text props={{label: "성별", isLabel: true}} />
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={12}>
								<Text props={ePhone} />
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={12}>
								<Text props={eAddress} />
							</Grid>
						</Grid>
				{/*	</Grid>*/}
				{/*</Grid>*/}
			</Box>
		</FormControl>
	);
};

export default Person;
