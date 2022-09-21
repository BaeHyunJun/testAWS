import React, { useState } from "react";
import { NextPage } from "next";

import Text from "@components/elements/Text"
import { Box, FormControl, FormLabel, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Education: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label } = props;
	
	const [cntLine, setCntLine] = useState(2);
	
	const addLine = () => {
		setCntLine(cntLine + 1);
	}
	
	const inputLine = () => {
		let html = []
		
		for (let i = 0; i < cntLine; i++ ) {
			html.push(
				<Grid key={i} container>
					<Grid item xs={3}>
						<Text props={{ isPlaceholder: false }} />
					</Grid>
					<Grid item xs={3}>
						<Text props={{ isPlaceholder: false }} />
					</Grid>
					<Grid item xs={3}>
						<Text props={{ isPlaceholder: false }} />
					</Grid>
					<Grid item xs={3}>
						<Text props={{ isPlaceholder: false }} />
					</Grid>
				</Grid>
			)
		}
		
		return html;
	}
	
	return (
		<FormControl
			className={`elements eg-Account`}
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
				"& .box .addLineBtn": {
					py: "4px",
					cursor: "pointer",
					borderBottom: "1px solid gray",
				},
				"& .MuiTypography-subtitle1": {
					textAlign: "center",
					borderBottom: "1px solid gray"
				},
				"& input": {
					px: 2,
				},
				"& input:-internal-autofill-selected": {
					backgroundColor: "none !important",
				},
				".border & .MuiInput-root": {
					border: "none",
				},
				".border & .MuiGrid-root.MuiGrid-container:first-of-type": {
					borderTop: "1px solid gray",
				},
				".border & .MuiGrid-root.MuiGrid-item": {
					borderLeft: "1px solid gray",
				},
				".border & .MuiGrid-root.MuiGrid-item:first-of-type": {
					borderLeft: "none",
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
					<Grid item xs={3}>
						<Typography variant={"subtitle1"}>
							기간
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant={"subtitle1"}>
							학교명
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant={"subtitle1"}>
							전공
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant={"subtitle1"}>
							졸업여부
						</Typography>
					</Grid>
				</Grid>
				{ inputLine() }
				<FormLabel className={`addLineBtn`} onClick={addLine}>
					<AddCircleOutlineIcon />
				</FormLabel>
			</Box>
		</FormControl>
	);
};

export default Education;
