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
	
	const outputText = () => {
		let returnText = element?.value ? element?.value : element?.placeholder
		
		return returnText?.replaceAll('\n', '<br />');
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
				".boxMore & .MuiTypography-root": {
					lineHeight: "50px",
				},
				".boxLess & .MuiTypography-root": {
					lineHeight: "30px",
				},
				".boxAll &": {
					border: "1px solid gray",
					px: 2,
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
				".fontLeft &": {
					justifyContent: "left",
				},
				".fontCenter &": {
					justifyContent: "center",
				},
				".fontRight &": {
					justifyContent: "right",
				},
				".fontBold & .MuiTypography-root": {
					fontWeight: "bold",
				},
				".fontItalic & .MuiTypography-root": {
					fontStyle: "italic",
				},
				".fontUnderLine & .MuiTypography-root": {
					textDecoration: "underline",
				},
				".fontThrough &": {
					textDecoration: "line-through",
				},
				".font10 & .MuiTypography-root":{
					fontSize: "10px",
				},
				".font11 & .MuiTypography-root":{
					fontSize: "11px",
				},
				".font12 & .MuiTypography-root":{
					fontSize: "12px",
				},
				".font13 & .MuiTypography-root":{
					fontSize: "13px",
				},
				".font14 & .MuiTypography-root":{
					fontSize: "14px",
				},
				".font15 & .MuiTypography-root":{
					fontSize: "15px",
				},
				".font16 & .MuiTypography-root":{
					fontSize: "16px",
				},
				".font17 & .MuiTypography-root":{
					fontSize: "17px",
				},
				".font18 & .MuiTypography-root":{
					fontSize: "18px",
				},
				".font19 & .MuiTypography-root":{
					fontSize: "19px",
				},
				".font20 & .MuiTypography-root":{
					fontSize: "20px",
				},
			}}
			className={`${element?.className}`}
		>
			<Typography component={`div`}>
				<div dangerouslySetInnerHTML={ { __html: outputText() } } />
			</Typography>
		</Box>
	);
};

export default TextBox;
