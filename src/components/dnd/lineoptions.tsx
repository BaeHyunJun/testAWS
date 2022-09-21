import React from "react";
import { NextPage } from "next";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import GridOnIcon from "@mui/icons-material/GridOn";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import BorderBottomIcon from "@mui/icons-material/BorderBottom";
import BorderAllIcon from "@mui/icons-material/BorderAll";

type ItemProps = {
	props: any,
};

const Education: NextPage<ItemProps> = ({ props }) => {
	const { label, items } = props;
	
	return (
		<Box className={"options"}>
			<Box className={"optionBox"} component={"span"}>
				{/*{*/}
				{/*	items.length > 1 && (*/}
				{/*		<IconButton size="small" onClick={ () => setStyle1 (!style1) }>*/}
				{/*			{ style1 ? <GridViewIcon/> : <GridOnIcon/> }*/}
				{/*		</IconButton>*/}
				{/*	)*/}
				{/*}*/}
				{/*{*/}
				{/*	items[0]?.element == "Space" && (*/}
				{/*		<TextField*/}
				{/*			className={ "" }*/}
				{/*			variant={ "outlined" }*/}
				{/*			value={ items[0]?.value }*/}
				{/*			size={ "small" }*/}
				{/*			type={ "number" }*/}
				{/*			onChange={onChangeSpace}*/}
				{/*			sx={{*/}
				{/*				width: "75px",*/}
				{/*				"& .MuiInputBase-root": {*/}
				{/*					pl: 1,*/}
				{/*					height: "25px",*/}
				{/*				},*/}
				{/*				"& .MuiInputAdornment-root > p": {*/}
				{/*					fontSize: "12px",*/}
				{/*				},*/}
				{/*				"& .MuiInputBase-input": {*/}
				{/*					p: 0,*/}
				{/*					fontSize: "14px",*/}
				{/*				},*/}
				{/*			}}*/}
				{/*			InputProps={{*/}
				{/*				startAdornment: <InputAdornment position="start">크기</InputAdornment>,*/}
				{/*			}}*/}
				{/*		/>*/}
				{/*	)*/}
				{/*}*/}
				{/*{*/}
				{/*	items[0]?.element != "Space" && (*/}
				{/*		<>*/}
				{/*			<IconButton size="small" onClick={() => setStyle2(!style2)}>*/}
				{/*				{style2 ? <UnfoldMoreIcon /> : <UnfoldLessIcon /> }*/}
				{/*			</IconButton>*/}
				{/*			<IconButton size="small" onClick={() => setStyle3(!style3)}>*/}
				{/*				{style3 ? <BorderBottomIcon /> : <BorderAllIcon /> }*/}
				{/*			</IconButton>*/}
				{/*		</>*/}
				{/*	)*/}
				{/*}*/}
				{/*<IconButton size="small" onClick={() => console.log("삭제")}>*/}
				{/*	<CloseIcon className="removeBtn" />*/}
				{/*</IconButton>*/}
			</Box>
		</Box>
	);
};

export default Education;
