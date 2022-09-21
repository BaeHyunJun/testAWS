import React from "react";
import { NextPage } from "next";

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Selector from "@components/elements/Selector";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Sex: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, value, children } = props;
	
	return (
		<FormControl
			className={`elements eg-Sex`}
			sx={{
				borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
				"& .MuiFormGroup-root": {
					height: "100%",
					webkitAlignItems: "center",
					webkitBoxAlign: "center",
					msFlexAlign: "center",
					alignItems: "center",
				},
				".gridLine & .MuiFormLabel-root": {
					marginRight: "12px",
				},
				"& .MuiFormLabel-root": {
					minWidth: "80px",
					height: "32px",
					marginRight: "6px",
				},
				".border & .MuiFormLabel-root": {
					borderRight: "1px solid gray",
				},
				".border & .MuiFormLabel-root > p": {
					mx: "auto"
				}
			}}
		>
			<RadioGroup row defaultValue={value}>
				<FormLabel>
					<Typography variant={"body1"}>
						{ label }
					</Typography>
				</FormLabel>
				
				{children.map((dat:any, idx:number) =>
					<Selector key={idx} props={ dat } />
				)}
			</RadioGroup>
		</FormControl>
	);
};

export default Sex;
