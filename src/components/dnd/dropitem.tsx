import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, ButtonGroup, Container, Divider, Drawer,
	FormControl,
	FormControlLabel,
	FormLabel, Grid, IconButton,
	InputAdornment, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField,
	Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Text from "@components/elements/Text";
import { elementItem, elementLine, moaElements, moaLine } from "@config/const";
import { ReactSortable } from "react-sortablejs";
import Sex from "@components/elementGroup/Sex";
import Notice from "@components/elements/Notice";
import Space from "@components/elements/Space";
import Date from "@components/elementGroup/Date";
import Agree from "@components/elementGroup/Agree";
import Account from "@components/elementGroup/Account";
import Person from "@components/elementGroup/Person";
import Education from "@components/elementGroup/Education";
import License from "@components/elementGroup/License";
import Career from "@components/elementGroup/Career";
import TextBox from "@components/elements/TextBox";

// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';

import BorderAllIcon from '@mui/icons-material/BorderAll';
import BorderClearIcon from '@mui/icons-material/BorderClear';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';
import BorderRightIcon from '@mui/icons-material/BorderRight';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

import GridOnIcon from '@mui/icons-material/GridOn';
import GridViewIcon from '@mui/icons-material/GridView';

import DeleteIcon from '@mui/icons-material/Delete';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { postAction } from "@actions/post";
import InputBox from "@components/elements/InputBox";

type ItemProps = {
	itemData: elementItem;
	className: string;
	isFocus: boolean;
	onClick: (id: number) => void;
	onRemove:(index:number) => void;
};

const DropItem: NextPage<ItemProps> = ({ itemData, className, isFocus, onClick, onRemove }) => {
	const dispatch = useDispatch();
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const [elList, setElList] = useState<elementLine[]>();
	const [item, setItem] = useState<elementItem>();
	const [isDrawer, setIsDrawer] = useState(false);
	
	useEffect(() => {
		setElList(post.line);
	}, [post]);
	
	useEffect(() => {
		// if (!elList) return;
		//
		// const line = elList.filter((f:any) => f.id == lineNo)[0];
		
		// console.log(line);
		
		// const item = line.items.filter((f:any) => f.id == itemNo)[0];
		//
		setItem(itemData);
	}, [itemData])
	
	// console.log(item?.id, item?.options)
	
	// useEffect(() => {
	// 	setItem(elItem);
	// }, [elItem]);
	
	useEffect(()=>{
		setIsDrawer(isFocus);
	},[isFocus]);
	
	const handleClick = (id: any) => {
		onClick(id);
	}
	
	const removeElement = () => {
		if (confirm("정말 삭제하시겠습니까?"))
			onRemove(itemData.id);
	}

	const createElement = () => {
		if (!item) return;
		
		const { element } = item;
		
		switch (element) {
			case "TextBox":
				return <TextBox props={ item } />;
			case "InputBox":
				return <InputBox props={ item } />;
			case "Space":
				return <Space props={ item } />;
			case "Agree":
				return <Agree props={ item } />;
			case "Person":
				return <Person props={ item } />;
			// case "Text":
			// 	return <Text props={ el } actionRemove={ removeElement } />;
			// case "Sex":
			// 	return <Sex props={ el } actionRemove={ removeElement } />;
			// case "Notice":
			// 	return <Notice props={ el } actionRemove={ removeElement } />;
			// case "Date":
			// 	return <Text props={ el } actionRemove={ removeElement } />;
			// case "Account":
			// 	return <Account props={ el } actionRemove={ removeElement } />;
			// case "Education":
			// 	return <Education props={ el } actionRemove={ removeElement } />;
			// case "Career":
			// 	return <Career props={ el } actionRemove={ removeElement } />;
			// case "License":
			// 	return <License props={ el } actionRemove={ removeElement } />;
			default:
				return "";
		}
	}
	
	const handleCloseDrawer = () => {
		handleClick(0);
		setIsDrawer(false);
		
		// 데이터 저장
		if (!elList) return;
		if (!item) return;

		// setElList((prevState: any) => {
			let copyList = [ ...elList ];

			// copyList.filter((f:elementLine) => f.id == lineNo)[0].items = [
			// 	...copyList.filter((f:elementLine) => f.id == lineNo)[0].items.filter((f:any) => f.id != itemNo),
			// 	item,
			// ];
		
			copyList.map((dat:any, idx: number) => {
				if (dat.items.find((f:any) => f.id == itemData.id)) {
					dat.items = [
						...dat.items.filter((f:any) => f.id != itemData.id),
						item,
					]
				}
			})
			
			// setElList(copyList);
			//.filter((f:any) => f.id == itemNo)[0] = item;
			
			// console.log(copyList);
			
			// dispatch(postAction.request(copyList));
			
			// return copyList;
		// })
		
		// let copyList = [ ...elList ];
		//
		// let tempLine = copyList.filter((dat: elementLine, idx:number) => dat.id == lineNo)[0];
		// let tempItem = tempLine.items.filter((dat: elementItem, idx:number) => dat.id == itemNo)[0];
		//
		// console.log(tempLine);
		// console.log(tempItem);
		// console.log(item);
		//
		// // tempLine.items.filter((dat: elementItem, idx:number) => dat.id == itemNo)[0] = item ? item : tempItem;
		//
		// console.log(copyList);
		
		// dispatch(postAction.request(copyList));

		// let copyList = [...elList];
		//
		// let dat1 = copyList.filter((f:any) => f.id == lineNo)[0];
		// let dat2 = dat1.items.filter((f:any) => f.id == itemNo)[0];
		//
		// dat2 = item ? item : dat2;
		//
		// console.log(copyList);
		// console.log(item?.options);
		// console.log(dat2.id, dat2.options);
		//
		// copyList.filter((f:any) => f.id == lineNo)[0].items.filter((f:any) => f.id == itemNo)[0] = dat2
		//
		// console.log(copyList);
		//
		// dispatch(postAction.request(copyList));
	}
	
	const handleChange = (e?: any) => {
		if (!item) return;
		
		const { name, value } = e.target;
		
		setItem({ ...item, [name]: value});
	}
	
	const handleOptionButton = (option: string) => {
		if (!item) return;
		
		const { isBold, isItalic, isUnderLine, isThrough } = item.options;
		
		let optionData = option.split("-");
		let optionKey = optionData[0];
		let optionValue = optionData[1];
		
		let paramKey:string = "";
		let paramValue:any;
		
		switch (optionKey) {
			case "isBold":
				paramKey = "isBold";
				paramValue = !isBold;
				break;
			case "isItalic":
				paramKey = "isItalic";
				paramValue = !isItalic;
				break;
			case "isUnderline":
				paramKey = "isUnderLine";
				paramValue = !isUnderLine;
				break;
			case "isThrough":
				paramKey = "isThrough";
				paramValue = !isThrough;
				break;
			case "align":
				paramKey = "align";
				paramValue = optionValue;
				break;
		}
		
		if (paramKey != "") saveOptions(paramKey, paramValue);
	}
	
	const handleOptionSelect = (e: any) => {
		const { name, value } = e.target;
		
		saveOptions(name, value);
	}
	
	const saveOptions = (key: string, value: any) => {
		if (!item) return;
		
		setItem({ ...item, options: { ...item.options, [key]: value } });
	}

	const personPanel = () => {
		if (!item) return;
		
		const { label, value } = item;
		const {
			isBold,
			isItalic,
			isUnderLine,
			isThrough,
			isGrid,
			fontSize,
			align,
			border,
			unfold,
		} = item.options;
		
		return (
			<Grid container>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						타이틀 영역
					</Typography>
					<ButtonGroup
						variant="contained"
						sx={{
							mr: 2,
						}}
					>
						<IconButton name={`isBold`} className={`${isBold ? "active" : ""}`} onClick={() => handleOptionButton("isBold")}>
							<FormatBoldIcon />
						</IconButton>
						<IconButton name={`isItalic`} className={`${isItalic ? "active" : ""}`} onClick={() => handleOptionButton("isItalic")}>
							<FormatItalicIcon />
						</IconButton>
						
						<FormControl fullWidth>
							<InputLabel>Size</InputLabel>
							<Select
								name={`fontSize`}
								value={fontSize}
								label="Age"
								onChange={handleOptionSelect}
								sx={{
									"& .MuiSelect-select": {
										py: 1.2,
									}
								}}
							>
								<MenuItem value={10}>10</MenuItem>
								<MenuItem value={11}>11</MenuItem>
								<MenuItem value={12}>12</MenuItem>
								<MenuItem value={13}>13</MenuItem>
								<MenuItem value={14}>14</MenuItem>
								<MenuItem value={15}>15</MenuItem>
								<MenuItem value={16}>16</MenuItem>
								<MenuItem value={17}>17</MenuItem>
								<MenuItem value={18}>18</MenuItem>
								<MenuItem value={19}>19</MenuItem>
								<MenuItem value={20}>20</MenuItem>
							</Select>
						</FormControl>
						
						<IconButton name={`isUnderLine`} className={`${isUnderLine ? "active" : ""}`} onClick={() => handleOptionButton("isUnderline")}>
							<FormatUnderlinedIcon />
						</IconButton>
						<IconButton name={`isThrough`} className={`${isThrough ? "active" : ""}`} onClick={() => handleOptionButton("isThrough")}>
							<FormatStrikethroughIcon />
						</IconButton>
					</ButtonGroup>
					
					<ButtonGroup variant="contained">
						<IconButton name={`align-left`} className={`${align == "Left" ? "active" : ""}`} onClick={() => handleOptionButton("align-Left")}>
							<FormatAlignLeftIcon />
						</IconButton>
						<IconButton name={`align-center`} className={`${align == "Center" ? "active" : ""}`} onClick={() => handleOptionButton("align-Center")}>
							<FormatAlignCenterIcon />
						</IconButton>
						<IconButton name={`align-right`} className={`${align == "Right" ? "active" : ""}`} onClick={() => handleOptionButton("align-Right")}>
							<FormatAlignRightIcon />
						</IconButton>
					</ButtonGroup>
					
					<TextField
						label="타이틀 내용"
						// multiline
						// rows={8}
						sx={{
							width: "100%",
						}}
						value={label}
						name={"label"}
						onChange={handleChange}
					/>
				</Grid>
				
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						디자인 영역
					</Typography>
					
					<FormControl>
						<InputLabel>테두리</InputLabel>
						<Select
							name={`border`}
							value={border}
							label="테두리"
							onChange={handleOptionSelect}
							sx={{
								"& .MuiSelect-select": {
									py: 1.2,
								}
							}}
						>
							<MenuItem value={`All`}><BorderAllIcon /></MenuItem>
							<MenuItem value={`Clear`}><BorderClearIcon /></MenuItem>
							<MenuItem value={`Top`}><BorderTopIcon /></MenuItem>
							<MenuItem value={`Left`}><BorderLeftIcon /></MenuItem>
							<MenuItem value={`Right`}><BorderRightIcon /></MenuItem>
							<MenuItem value={`Bottom`}><BorderBottomIcon /></MenuItem>
						</Select>
					</FormControl>
					
					<FormControl>
						<InputLabel>세로</InputLabel>
						<Select
							name={`unfold`}
							value={unfold}
							label="세로"
							onChange={handleOptionSelect}
							sx={{
								"& .MuiSelect-select": {
									py: 1.2,
								}
							}}
						>
							<MenuItem value={`More`}><UnfoldMoreIcon /></MenuItem>
							<MenuItem value={`Less`}><UnfoldLessIcon /></MenuItem>
						</Select>
					</FormControl>
					
					<FormControl>
						<InputLabel>가로</InputLabel>
						<Select
							name={`isGrid`}
							value={isGrid}
							label="가로"
							onChange={handleOptionSelect}
							sx={{
								"& .MuiSelect-select": {
									py: 1.2,
								}
							}}
						>
							<MenuItem value={`${true}`}><GridOnIcon /></MenuItem>
							<MenuItem value={`${false}`}><GridViewIcon /></MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		)
	}
	
	const inputPanel = () => {
		if (!item) return;
		
		const { label, value, placeholder } = item;
		const {
			isBold,
			isItalic,
			isUnderLine,
			isThrough,
			isGrid,
			fontSize,
			align,
			border,
			unfold,
		} = item.options;
		
		return (
			<Grid
				container
				sx={{
					"& .MuiIconButton-root.active": {
						background: "rgba(0,0,255,.2)",
						borderRadius: 0,
					}
				}}
			>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						데이터 영역
					</Typography>
					<ButtonGroup
						variant="contained"
						sx={{
							mr: 2,
						}}
					>
						<IconButton name={`isBold`} className={`${isBold ? "active" : ""}`} onClick={() => handleOptionButton("isBold")}>
							<FormatBoldIcon />
						</IconButton>
						<IconButton name={`isItalic`} className={`${isItalic ? "active" : ""}`} onClick={() => handleOptionButton("isItalic")}>
							<FormatItalicIcon />
						</IconButton>
						
						<FormControl fullWidth>
							<InputLabel>Size</InputLabel>
							<Select
								name={`fontSize`}
								value={fontSize}
								label="Age"
								onChange={handleOptionSelect}
								sx={{
									"& .MuiSelect-select": {
										py: 1.2,
									}
								}}
							>
								<MenuItem value={10}>10</MenuItem>
								<MenuItem value={11}>11</MenuItem>
								<MenuItem value={12}>12</MenuItem>
								<MenuItem value={13}>13</MenuItem>
								<MenuItem value={14}>14</MenuItem>
								<MenuItem value={15}>15</MenuItem>
								<MenuItem value={16}>16</MenuItem>
								<MenuItem value={17}>17</MenuItem>
								<MenuItem value={18}>18</MenuItem>
								<MenuItem value={19}>19</MenuItem>
								<MenuItem value={20}>20</MenuItem>
							</Select>
						</FormControl>
						
						<IconButton name={`isUnderLine`} className={`${isUnderLine ? "active" : ""}`} onClick={() => handleOptionButton("isUnderline")}>
							<FormatUnderlinedIcon />
						</IconButton>
						<IconButton name={`isThrough`} className={`${isThrough ? "active" : ""}`} onClick={() => handleOptionButton("isThrough")}>
							<FormatStrikethroughIcon />
						</IconButton>
					</ButtonGroup>
					
					<ButtonGroup variant="contained">
						<IconButton name={`align-left`} className={`${align == "Left" ? "active" : ""}`} onClick={() => handleOptionButton("align-Left")}>
							<FormatAlignLeftIcon />
						</IconButton>
						<IconButton name={`align-center`} className={`${align == "Center" ? "active" : ""}`} onClick={() => handleOptionButton("align-Center")}>
							<FormatAlignCenterIcon />
						</IconButton>
						<IconButton name={`align-right`} className={`${align == "Right" ? "active" : ""}`} onClick={() => handleOptionButton("align-Right")}>
							<FormatAlignRightIcon />
						</IconButton>
					</ButtonGroup>
					
					<TextField
						label="라벨 내용"
						sx={{
							width: "100%",
						}}
						value={label}
						name={"label"}
						onChange={handleChange}
					/>
					
					<TextField
						label="보여주기 내용"
						sx={{
							width: "100%",
						}}
						value={placeholder}
						name={"placeholder"}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						디자인 영역
					</Typography>
					
					<Box
						sx={{
							display: "flex",
							"& .MuiDivider-root": {
								mx: 2,
							}
						}}
					>
						<FormControl>
							<InputLabel>테두리</InputLabel>
							<Select
								name={`border`}
								value={border}
								label="테두리"
								onChange={handleOptionSelect}
								sx={{
									"& .MuiSelect-select": {
										py: 1.2,
									}
								}}
							>
								<MenuItem value={`All`}><BorderAllIcon /></MenuItem>
								<MenuItem value={`Clear`}><BorderClearIcon /></MenuItem>
								<MenuItem value={`Top`}><BorderTopIcon /></MenuItem>
								<MenuItem value={`Left`}><BorderLeftIcon /></MenuItem>
								<MenuItem value={`Right`}><BorderRightIcon /></MenuItem>
								<MenuItem value={`Bottom`}><BorderBottomIcon /></MenuItem>
							</Select>
						</FormControl>
						
						<Divider orientation="vertical" variant="middle" flexItem />
						
						<ButtonGroup variant="contained">
							<FormControl>
								<InputLabel>세로</InputLabel>
								<Select
									name={`unfold`}
									value={unfold}
									label="간격"
									onChange={handleOptionSelect}
									sx={{
										"& .MuiSelect-select": {
											py: 1.2,
										}
									}}
								>
									<MenuItem value={`More`}><UnfoldMoreIcon /></MenuItem>
									<MenuItem value={`Less`}><UnfoldLessIcon /></MenuItem>
								</Select>
							</FormControl>
							
							<FormControl>
								<InputLabel>가로</InputLabel>
								<Select
									name={`isGrid`}
									value={isGrid}
									label="가로"
									onChange={handleOptionSelect}
									sx={{
										"& .MuiSelect-select": {
											py: 1.2,
										}
									}}
								>
									<MenuItem value={`${true}`}><GridOnIcon /></MenuItem>
									<MenuItem value={`${false}`}><GridViewIcon /></MenuItem>
								</Select>
							</FormControl>
						</ButtonGroup>
						
						{/*<Divider orientation="vertical" variant="middle" flexItem />*/}
					</Box>
				</Grid>
			</Grid>
		)
	}
	
	const AgreePanel = () => {
		if (!item) return;
		
		const { value } = item;
		
		return (
			<Grid
				container
				sx={{
					"& .MuiIconButton-root.active": {
						background: "rgba(0,0,255,.2)",
						borderRadius: 0,
					}
				}}
			>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						데이터 영역
					</Typography>
					<TextField
						label="여백 크기"
						sx={{
							width: "100%",
						}}
						value={value}
						name={"value"}
						type={"number"}
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
		)
	}
	
	const SpacePanel = () => {
		if (!item) return;
		
		const { value } = item;
		
		return (
			<Grid
				container
				sx={{
					"& .MuiIconButton-root.active": {
						background: "rgba(0,0,255,.2)",
						borderRadius: 0,
					}
				}}
			>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						데이터 영역
					</Typography>
					<TextField
						label="여백 크기"
						sx={{
							width: "100%",
						}}
						value={value}
						name={"value"}
						type={"number"}
						onChange={handleChange}
					/>
				</Grid>
			</Grid>
		)
	}
	
	const textPanel = () => {
		if (!item) return;
		
		const { value } = item;
		const {
			isBold,
			isItalic,
			isUnderLine,
			isThrough,
			isGrid,
			fontSize,
			align,
			border,
			unfold,
		} = item.options;
		
		return (
			<Grid
				container
				sx={{
					"& .MuiIconButton-root.active": {
						background: "rgba(0,0,255,.2)",
						borderRadius: 0,
					}
				}}
			>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						데이터 영역
					</Typography>
					<ButtonGroup
						variant="contained"
						sx={{
							mr: 2,
						}}
					>
						<IconButton name={`isBold`} className={`${isBold ? "active" : ""}`} onClick={() => handleOptionButton("isBold")}>
							<FormatBoldIcon />
						</IconButton>
						<IconButton name={`isItalic`} className={`${isItalic ? "active" : ""}`} onClick={() => handleOptionButton("isItalic")}>
							<FormatItalicIcon />
						</IconButton>
						
						<FormControl fullWidth>
							<InputLabel>Size</InputLabel>
							<Select
								name={`fontSize`}
								value={fontSize}
								label="Age"
								onChange={handleOptionSelect}
								sx={{
									"& .MuiSelect-select": {
										py: 1.2,
									}
								}}
							>
								<MenuItem value={10}>10</MenuItem>
								<MenuItem value={11}>11</MenuItem>
								<MenuItem value={12}>12</MenuItem>
								<MenuItem value={13}>13</MenuItem>
								<MenuItem value={14}>14</MenuItem>
								<MenuItem value={15}>15</MenuItem>
								<MenuItem value={16}>16</MenuItem>
								<MenuItem value={17}>17</MenuItem>
								<MenuItem value={18}>18</MenuItem>
								<MenuItem value={19}>19</MenuItem>
								<MenuItem value={20}>20</MenuItem>
							</Select>
						</FormControl>
						
						<IconButton name={`isUnderLine`} className={`${isUnderLine ? "active" : ""}`} onClick={() => handleOptionButton("isUnderline")}>
							<FormatUnderlinedIcon />
						</IconButton>
						<IconButton name={`isThrough`} className={`${isThrough ? "active" : ""}`} onClick={() => handleOptionButton("isThrough")}>
							<FormatStrikethroughIcon />
						</IconButton>
					</ButtonGroup>
					
					<ButtonGroup variant="contained">
						<IconButton name={`align-left`} className={`${align == "Left" ? "active" : ""}`} onClick={() => handleOptionButton("align-Left")}>
							<FormatAlignLeftIcon />
						</IconButton>
						<IconButton name={`align-center`} className={`${align == "Center" ? "active" : ""}`} onClick={() => handleOptionButton("align-Center")}>
							<FormatAlignCenterIcon />
						</IconButton>
						<IconButton name={`align-right`} className={`${align == "Right" ? "active" : ""}`} onClick={() => handleOptionButton("align-Right")}>
							<FormatAlignRightIcon />
						</IconButton>
					</ButtonGroup>
					
					<TextField
						label="텍스트 내용"
						multiline
						rows={8}
						sx={{
							width: "100%",
						}}
						value={value}
						name={"value"}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} className={`panelArea`}>
					<Typography variant={"h6"} >
						디자인 영역
					</Typography>
					
					<Box
						sx={{
							display: "flex",
							"& .MuiDivider-root": {
								mx: 2,
							}
						}}
					>
						<FormControl>
							<InputLabel>테두리</InputLabel>
							<Select
								name={`border`}
								value={border}
								label="테두리"
								onChange={handleOptionSelect}
								sx={{
									"& .MuiSelect-select": {
										py: 1.2,
									}
								}}
							>
								<MenuItem value={`All`}><BorderAllIcon /></MenuItem>
								<MenuItem value={`Clear`}><BorderClearIcon /></MenuItem>
								<MenuItem value={`Top`}><BorderTopIcon /></MenuItem>
								<MenuItem value={`Left`}><BorderLeftIcon /></MenuItem>
								<MenuItem value={`Right`}><BorderRightIcon /></MenuItem>
								<MenuItem value={`Bottom`}><BorderBottomIcon /></MenuItem>
							</Select>
						</FormControl>
						
						<Divider orientation="vertical" variant="middle" flexItem />
						
						<ButtonGroup variant="contained">
							<FormControl>
								<InputLabel>세로</InputLabel>
								<Select
									name={`unfold`}
									value={unfold}
									label="세로"
									onChange={handleOptionSelect}
									sx={{
										"& .MuiSelect-select": {
											py: 1.2,
										}
									}}
								>
									<MenuItem value={`More`}><UnfoldMoreIcon /></MenuItem>
									<MenuItem value={`Less`}><UnfoldLessIcon /></MenuItem>
								</Select>
							</FormControl>
							
							<FormControl>
								<InputLabel>가로</InputLabel>
								<Select
									name={`isGrid`}
									value={isGrid}
									label="가로"
									onChange={handleOptionSelect}
									sx={{
										"& .MuiSelect-select": {
											py: 1.2,
										}
									}}
								>
									<MenuItem value={`${true}`}><GridOnIcon /></MenuItem>
									<MenuItem value={`${false}`}><GridViewIcon /></MenuItem>
								</Select>
							</FormControl>
						</ButtonGroup>
					</Box>
				</Grid>
			</Grid>
		)
	}
	
	const drawPanel = () => {
		if (!item) return;
		
		const { element } = item;
		
		let viewerPanel:any;
		
		switch (element) {
			case "TextBox":
				viewerPanel = textPanel;
				break;
			case "InputBox":
				viewerPanel = inputPanel;
				break;
			case "Space":
				viewerPanel = SpacePanel;
				break;
			case "Agree":
				viewerPanel = AgreePanel;
				break;
			case "Person":
				viewerPanel = personPanel;
				break;
			default:
				viewerPanel = SpacePanel;
				break;
		}
		
		return (
			<Box
				sx={{
					mt: 17,
					p: 4,
					width: "635px",
					"& .MuiGrid-container": {
						mt: 4,
					},
					"& .MuiGrid-item" : {
						mb: 2,
					}
				}}
			>
				<Paper
					sx={{
						display: "flex",
						boxShadow: "none",
					}}
				>
					<Typography variant={"h4"} >
						{item.type} Blocks
					</Typography>
					
					<IconButton onClick={removeElement}>
						<DeleteIcon />
					</IconButton>
				</Paper>
				
				<Divider />
				{ viewerPanel() }
			</Box>
		)
	}
	
	const setClassName = () => {
		if (!item) return;
		
		const {
			isBold,
			isItalic,
			isUnderLine,
			isThrough,
			isGrid,
			fontSize,
			align,
			border,
			unfold,
		} = item.options;
		
		let returnClassName = "";
		
		if (isBold) returnClassName += returnClassName == "" ? "fontBold" : " fontBold";
		if (isItalic) returnClassName += returnClassName == "" ? "fontItalic" : " fontItalic";
		if (isUnderLine) returnClassName += returnClassName == "" ? "fontUnderLine" : " fontUnderLine";
		if (isThrough) returnClassName += returnClassName == "" ? "fontThrough" : " fontThrough";
		if (fontSize) returnClassName += returnClassName == "" ? "font"+fontSize : " font"+fontSize;
		if (align) returnClassName += returnClassName == "" ? "font"+align : " font"+align;
		
		if (border) returnClassName += returnClassName == "" ? "box"+border : " box"+border;
		if (unfold) returnClassName += returnClassName == "" ? "box"+unfold : " box"+unfold;
		if (isGrid) returnClassName += returnClassName == "" ? "boxGrid" : " boxGrid";
		
		return returnClassName;
	}
	
	return (
		<>
			<Box
				sx={{
					width: "100%",
					cursor: "pointer",
					"&.focus": {
						backgroundColor: "rgba(0, 0, 0, .1)",
					}
				}}
				className={`${className} ${setClassName()} ${isFocus ? "focus" : ""}`}
				onClick={() => handleClick(itemData.id)}
			>
				{ createElement() }
			</Box>
			
			<Drawer
				anchor={"right"}
				open={isDrawer}
				onClose={handleCloseDrawer}
				sx={{
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, .1)",
					},
					"& .panelArea": {
						p: 1,
						border: "1px solid gray",
					},
					"& .panelArea > * ": {
						mt: 2,
					},
					"& .panelArea h6 ": {
						m: 0,
					}
				}}
			>
				{ drawPanel() }
			</Drawer>
		</>
	);
};

export default DropItem;
