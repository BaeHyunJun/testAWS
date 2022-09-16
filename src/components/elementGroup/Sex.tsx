import React from "react";
import { NextPage } from "next";

import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Selector from "@components/elements/Selector";

type ItemProps = {
	props: any,
	
	actionRemove:() => void;
};

const Sex: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, value, children } = props;
	
	return (
		<FormControl sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}>
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
