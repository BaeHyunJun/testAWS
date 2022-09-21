import React, { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";

import { Box, Chip, Divider, Icon, IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import { elementItem, elementLine, moaElements, moaLine } from "@config/const";
import { ReactSortable } from "react-sortablejs";
import DropItem from "@components/dnd/dropitem";

import GridOnIcon from '@mui/icons-material/GridOn';
import GridViewIcon from '@mui/icons-material/GridView';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	no: number;
	elLine: elementLine;
	
	onRemove:(data:any[], index:number) => void;
};

const DropLine: NextPage<ItemProps> = ({no, elLine, onRemove}) => {
	const [line, setLine] = useState<elementLine>(elLine);
	const [items, setItems] = useState<elementItem[]>(elLine.items);
	
	const [style1, setStyle1] = useState(false);
	const [style2, setStyle2] = useState(false);
	const [style3, setStyle3] = useState(false);
	
	const [height, setHeight] = useState(0);
	
	useEffect(() => {
		setLine(elLine);
		setItems(elLine.items);
	}, [elLine]);
	
	const onRemoveHandle = (index: number) => {
		const temp = items.filter((dat: elementItem, idx:number) => dat.id != index);
		
		onRemove(temp, line.id);
	}
	
	const onChangeSpace = (e?:any) => {
		const target = e?.target;
		const { value } = target;
		
		const changeItems = items.filter((el:any, idx:number) => el.element == "Space")
														 .map((el:any, idx:number) => {
															 el.value = value;
															 
															 if (value < 30) {
																 el.value = 30;
															 }
															 
															 return el;
														 });
		
		setItems(changeItems);
		
	}
	
	// console.log(items);
	
	return items.length > 0 ? (
		<Box
			className={`${style2 ? "noPadding" : ""} ${style3 ? "border" : ""}`}
			sx={{
				py: 1,
				// display: "flex",
				// minHeight: "50px",
				"&.noPadding": {
					p: 0,
					mt: "-1px",
				},
				// "&.noPadding:first-child": {
				// 	m: 0,
				// },
				// "&.border .MuiBox-root > .elements": {
				// 	borderTop: "1px solid gray",
				// 	borderLeft: "1px solid gray",
				// 	borderRight: "1px solid gray",
				// },
				// "&.border .MuiInputAdornment-root": {
				// 	borderRight: "1px solid gray",
				// 	height: "100%",
				// },
				// "&.border .MuiInputAdornment-root > p": {
				// 	mx: "auto",
				// },
				"& .elementLine": {
					position: "relative",
					// px: 4,
					// py: 1,
					width: "100%",
					display: "flex",
				},
				"& .MuiBox-root.options": {
					p: 0,
					position: "absolute",
					textAlign: "center",
					left: 0,
					right: 0,
					top: "-16px",
					width: "auto",
					height: "auto",
					display: "none",
				},
				"& .MuiBox-root.optionBox": {
					p: .5,
					background: "#efefef",
					borderRadius: "15px"
				},
				"& .elementLine:hover": {
					px: 0,
					// mx: 2,
					border: "1px solid blue",
					boxSizing: "border-box",
				},
				"& .elementLine:hover .options": {
					display: "block",
				},
				// "& .gridLine .MuiBox-root:nth-child(1)": {
				// 	pr: 0,
				// },
				// "& .gridLine .MuiBox-root:nth-child(2)": {
				// 	ml: "-1px",
				// 	pl: 0,
				// },
				// "& .removeBtn": {
				// 	color: "gray",
				// 	cursor: "pointer",
				// },
				// "& .MuiBox-root": {
				// 	// px: 2,
				// 	width: "100%",
				// 	// height: "50px",
				// },
				// "& .MuiFormControl-root": {
				// 	width: "100%",
				// 	height: "100%",
				// },
				// "& .MuiInputBase-root": {
				// 	height: "100%",
				// },
				// "& .MuiFormLabel-root": {
				// 	minWidth: "100px",
				// 	display: "inline-flex",
				// 	alignItems: "center",
				// },
				
				// "& .MuiInputAdornment-root": {
				// 	minWidth: "100px",
				// },
			}}
		>
				<ReactSortable
					group={"shared"}
					className={`${style1 ? "gridLine" : ""} elementLine`}
					ghostClass={"highlight"}
					handle={".sortHandle"}
					direction={"horizontal"}
					list={items}
					setList={(newState: elementItem[]) => {
						const newItems = newState.filter((f:any) => !items.includes(f));
						if (!newItems.length) return;
						
						const newElType = newItems[0].type;
						
						let errMsg = "";
						
						if (newState.length > 2) {
							errMsg = "하나의 라인에는 최대 2개의 항목만 생성 가능합니다.";
						}
						
						switch (newElType) {
							case "Text":
								break;
							case "Space":
								break;
							case "Address":
								errMsg = "주소 항목은 하나의 라인을 다 사용해야 합니다.";
								break;
						}
						
						if (errMsg) {
							alert(errMsg);
						} else {
							setItems(newState)
						}
					}}
				>
					<Fragment>
						{items.sort((a:any, b:any) => a.order - b.order).map((el: elementItem, index: number) => (
							<DropItem key={index} el={el} loc={items.length > 1 ? ( index ? "el-right" : "el-left") : ""} onRemove={onRemoveHandle} />
						))}
						<Box className={"options"}>
							<Box className={"optionBox"} component={"span"}>
								{
									items.length > 1 && (
										<IconButton size="small" onClick={ () => setStyle1 (!style1) }>
											{ style1 ? <GridViewIcon/> : <GridOnIcon/> }
										</IconButton>
									)
								}
								{
									items[0]?.element == "Space" && (
										<TextField
											variant={ "outlined" }
											value={ items[0]?.value }
											size={ "small" }
											type={ "number" }
											onChange={ onChangeSpace }
											sx={{
												width: "75px",
												"& .MuiInputBase-root": {
													pl: 1,
													height: "25px",
												},
												"& .MuiInputAdornment-root > p": {
													fontSize: "12px",
												},
												"& .MuiInputBase-input": {
													p: 0,
													fontSize: "14px",
												},
											}}
											InputProps={{
												startAdornment: <InputAdornment position="start">크기</InputAdornment>,
											}}
										/>
									)
								}
								{
									items[0]?.element != "Space" && (
										<>
											<IconButton size="small" onClick={() => setStyle2(!style2)}>
												{style2 ? <UnfoldMoreIcon /> : <UnfoldLessIcon /> }
											</IconButton>
											<IconButton size="small" onClick={() => setStyle3(!style3)}>
												{style3 ? <BorderBottomIcon /> : <BorderAllIcon /> }
											</IconButton>
										</>
									)
								}
								{/*<IconButton size="small" onClick={() => console.log("삭제")}>*/}
								{/*	<CloseIcon className="removeBtn" />*/}
								{/*</IconButton>*/}
							</Box>
						</Box>
					</Fragment>
				</ReactSortable>
		</Box>
	): <></>;
};

export default DropLine;
