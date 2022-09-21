import React from "react";
import { NextPage } from "next";

import { InputAdornment, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Text: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder, isPlaceholder = true, endText, variant } = props;
	
	return (
		<TextField
			sx={{
				// my: 1,
				px: 4,
				// py: 1,
				width: "100%",
				"& .MuiInputBase-root": {
					minHeight: "50px",
				},
				"& .removeBtn": {
					cursor: "pointer"
				},
				"& .MuiInputAdornment-root": {
					pl: 2,
					minWidth: "100px",
				},
				".el-left &": {
					pr: 2,
				},
				".el-right &": {
					pl: 2,
				},
				".gridLine .el-left &": {
					pr: 0,
				},
				".gridLine .el-right &": {
					pl: 0,
					ml: "-1px"
				},
				".noPadding &": {
					// my: 0,
					mt: "-1px",
				},
				".noPadding:first-of-type &": {
					mt: 0,
				},
				".border & .MuiInput-root": {
					borderTop: "1px solid gray",
					borderLeft: "1px solid gray",
					borderRight: "1px solid gray",
				},
				".border & .MuiInputAdornment-root": {
					borderRight: "1px solid gray",
					height: "100%",
				},
			}}
			className={`elements e-Text`}
			variant={ variant ? variant : "standard" }
			placeholder={ isPlaceholder ? placeholder ? placeholder : "내용을 입력해주세요." : "" }
			InputProps={{
				startAdornment: label && <InputAdornment position="start">{ label }</InputAdornment>,
				endAdornment: endText ? endText : actionRemove ? <CloseIcon className="removeBtn" onClick={actionRemove} /> : null,
			}}
		/>
	);
};

export default Text;
