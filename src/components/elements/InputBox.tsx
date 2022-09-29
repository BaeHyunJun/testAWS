import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { elementItem } from "@config/const";

type ItemProps = {
	props: any;
	
	// onClick:(id: number) => void;
};

const TextBox: NextPage<ItemProps> = ({props}) => {
	const [element, setElement] = useState<any>();
	
	useEffect(() => {
		setElement(props);
	}, [props])
	
	const handleChange = (e?: any) => {
		setElement({ ...element, "value": e.target.value});
	}
	
	const handleClick = () => {
		// onClick(element.id);
	}
	
	return (
		<Box
			sx={{
				mx: 4,
				// px: 2,
				cursor: "pointer",
				// width: "100%",
				// height: "50px",
				// lineHeight: "50px",
				display: "flex",
				"& *": {
					cursor: "pointer"
				},
				".boxGrid.el-left &": {
					mr: 0,
				},
				".boxGrid.el-right &": {
					ml: "-1px",
				},
				"& .MuiInputBase-input.MuiInput-input.Mui-disabled":{
					textFillColor: "rgba(0, 0, 0, .6)",
				},
				"& .MuiInputBase-root:before": {
					border: "none !important",
				},
				"& .MuiInputAdornment-root": {
					pr: 2,
					minWidth: "100px",
					height: "100%",
					maxHeight: "none",
				},
				".boxMore & .MuiInputBase-root": {
					lineHeight: "50px",
					height: "50px",
				},
				".boxLess & .MuiInputBase-root": {
					lineHeight: "30px",
					height: "30px",
				},
				".boxAll &": {
					border: "1px solid gray",
					px: 2,
				},
				".boxAll & .MuiInputAdornment-root": {
					borderRight: "1px solid gray",
				},
				".boxClear &": {
					border: "none",
				},
				".boxTop &": {
					borderTop: "1px solid gray",
				},
				".boxLeft &": {
					borderLeft: "1px solid gray",
					px: 2,
				},
				".boxRight &": {
					borderRight: "1px solid gray",
					px: 2,
				},
				".boxBottom &": {
					borderBottom: "1px solid gray",
				},
				".fontLeft & .MuiInputAdornment-root": {
					justifyContent: "left",
				},
				".fontCenter & .MuiInputAdornment-root": {
					justifyContent: "center",
				},
				".fontRight & .MuiInputAdornment-root": {
					justifyContent: "right",
				},
				".fontBold & .MuiInputAdornment-root > .MuiTypography-root": {
					fontWeight: "bold",
				},
				".fontItalic & .MuiInputAdornment-root > .MuiTypography-root": {
					fontStyle: "italic",
				},
				".fontUnderLine & .MuiInputAdornment-root > .MuiTypography-root": {
					textDecoration: "underline",
				},
				".fontThrough & .MuiInputAdornment-root": {
					textDecoration: "line-through",
				},
				".font10 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "10px",
				},
				".font11 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "11px",
				},
				".font12 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "12px",
				},
				".font13 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "13px",
				},
				".font14 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "14px",
				},
				".font15 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "15px",
				},
				".font16 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "16px",
				},
				".font17 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "17px",
				},
				".font18 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "18px",
				},
				".font19 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "19px",
				},
				".font20 & .MuiInputAdornment-root > .MuiTypography-root":{
					fontSize: "20px",
				},
			}}
			className={`${element?.className}`}
		>
			<TextField
				fullWidth
				disabled={false}
				variant={ "standard" }
				placeholder={ element?.placeholder ? element?.placeholder : "내용을 입력해주세요." }
				value={element?.value}
				InputProps={{
					startAdornment: element?.isLabel && element?.label && <InputAdornment position="start">{ element?.label }</InputAdornment>,
					// endAdornment: endText ? endText : actionRemove ? <CloseIcon className="removeBtn" onClick={actionRemove} /> : null,
				}}/>
		</Box>
	);
};

export default TextBox;
