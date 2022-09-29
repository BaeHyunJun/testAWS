import React from "react";
import { NextPage } from "next";

import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Space: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, value } = props;
	
	return (
		<Box
			className={`elements e-Space`}
			sx={{
				px: 4,
				".moaForm & .MuiTypography-root": {
					color: "rgba(0,0,0,.3)",
					display: "block",
				},
				"& .MuiTypography-root": {
					display: "none",
				},
				".moaForm & .removeBtn": {
					cursor: "pointer",
					position: "absolute",
					top: 0,
					right: "32px",
				},
				"& .MuiGrid-container": {
					minHeight: "30px",
					height: value + "px",
				},
				".moaForm & .MuiGrid-container": {
					border: "1px dashed gray",
				},
				".moaForm & .MuiGrid-item": {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				},
			}}
		>
			<Grid container>
				<Grid item xs={12}>
					{/*{ actionRemove && <CloseIcon className="removeBtn" onClick={ actionRemove }/> }*/}
					<Typography variant={"body1"}>
						{ label }
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Space;
