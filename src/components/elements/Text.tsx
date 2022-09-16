import React from "react";
import { NextPage } from "next";

import { InputAdornment, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove:() => void;
};

const Text: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder } = props;
	
	return (
		<TextField
			className={`elements`}
			variant="standard"
			placeholder={ placeholder ? placeholder : "내용을 입력해주세요." }
			InputProps={{
				startAdornment: <InputAdornment position="start">{ label }</InputAdornment>,
				endAdornment: <CloseIcon className="removeBtn" onClick={actionRemove} />,
			}}
		/>
	);
};

export default Text;
