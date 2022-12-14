import React from "react";
import { NextPage } from "next";

import { InputAdornment, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Date: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder, endText } = props;
	
	return (
		<TextField
			className={`elements`}
			variant="standard"
			placeholder={ placeholder ? placeholder : "내용을 입력해주세요." }
			InputProps={{
				startAdornment: <InputAdornment position="start">{ label }</InputAdornment>,
				endAdornment: endText ? endText : <CloseIcon className="removeBtn" onClick={actionRemove} />,
			}}
		/>
	);
};

export default Date;
