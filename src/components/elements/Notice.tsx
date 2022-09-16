import React from "react";
import { NextPage } from "next";

import { InputAdornment, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove:() => void;
};

const Notice: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder } = props;
	
	return (
		<TextField
			className={`elements`}
			variant="standard"
			placeholder={ placeholder ? placeholder : "내용을 입력해주세요." }
			InputProps={{
				endAdornment: <CloseIcon className="removeBtn" onClick={actionRemove} />,
			}}
		/>
	);
};

export default Notice;
