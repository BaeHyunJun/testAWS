import React, { useState } from "react";
import { NextPage } from "next";

import { InputAdornment, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Text: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const [element, setElement] = useState(props);
	
	const { isLabel, label, placeholder, isPlaceholder = true, endText, variant, className } = element;
	
	const onChange = (e?: any) => {
		setElement({ ...element, "value": e.target.value});
	}
	
	return (
		<TextField
			sx={{
				px: 4,
				width: "100%",
				"& .MuiInputBase-root": {
					minHeight: "50px",
				},
				"&.title .MuiInputBase-input": {
					fontSize: "24px",
					textAlign: "center",
				},
				"&.notice .MuiInputBase-root": {
					height: "30px",
					minHeight: "30px",
				},
				"&.notice .MuiInputBase-root:before": {
					border: "none",
				},
				"&.notice .MuiInputBase-input": {
					textAlign: "center",
				},
				"& .removeBtn": {
					cursor: "pointer"
				},
				"& .MuiInputAdornment-root": {
					pl: {
						xs: 1,
						sm: 2,
					},
					minWidth: {
						xs: "50px",
						sm: "100px",
					},
				},
				".el-left &": {
					pr: {
						xs: 1,
						sm: 2,
					},
				},
				".el-right &": {
					pl: {
						xs: 1,
						sm: 2,
					},
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
					mt: 0, //"-1px",
				},
				".noPadding:first-of-type &": {
					mt: 0,
				},
				".border & .MuiInput-root": {
					borderTop: "1px solid gray",
					borderLeft: "1px solid gray",
					borderRight: "1px solid gray",
					height: "50px",
				},
				".border &.notice .MuiInputBase-root": {
					height: "30px",
					borderBottom: "1px solid gray"
				},
				".border & .MuiInputAdornment-root": {
					borderRight: "1px solid gray",
					height: "100%",
					maxHeight: "none",
				},
			}}
			className={`elements e-Text ${className ? className : ""}`}
			variant={ variant ? variant : "standard" }
			placeholder={ isPlaceholder ? placeholder ? placeholder : "내용을 입력해주세요." : "" }
			InputProps={{
				startAdornment: isLabel && label && <InputAdornment position="start">{ label }</InputAdornment>,
				// endAdornment: endText ? endText : actionRemove ? <CloseIcon className="removeBtn" onClick={actionRemove} /> : null,
			}}
			onChange={onChange}
			disabled
		/>
	);
};

export default Text;
