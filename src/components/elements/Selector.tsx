import React from "react";
import { NextPage } from "next";

import { FormControlLabel, Radio } from "@mui/material";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Selector: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, value } = props;
	
	return (
		<FormControlLabel
			className={`elements e-Selector`}
			value={value}
			control={<Radio />}
			label={label}
		/>
	);
};

export default Selector;
