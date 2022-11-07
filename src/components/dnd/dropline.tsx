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
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import { postAction } from "@actions/post";

type ItemProps = {
	lineData: elementLine;
	focusId?: number;
	
	onClick: (id: number) => void;
	onRemove: (data:any[], index:number) => void;
};

const DropLine: NextPage<ItemProps> = ({lineData, focusId, onClick, onRemove}) => {
	// const dispatch = useDispatch();
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const [list, setList] = useState<elementLine[]>();
	const [line, setLine] = useState<elementLine>();
	const [items, setItems] = useState<elementItem[]>();
	
	useEffect(() => {
		// console.log("데이터가 변경됨", recruit);
		const dat = post.line.filter((f:any) => f.id == lineData.id)[0];
		
		setList(post.line);
		setLine(dat);
		setItems(dat.items);
	}, [post, lineData])
	
	// useEffect(() => {
	// 	console.log(lineData);
	//
	// 	// setList(recruit.line);
	// 	setLine(lineData);
	// 	setItems(lineData.items);
	// }, [lineData]);
	
	const handleClick = (id: number) => {
		onClick(id);
	}
	
	const handleRemove = (index: number) => {
		const temp = items?.filter((dat: elementItem, idx:number) => dat.id != index);
		
		temp && line?.id && onRemove(temp, line?.id);
	}
	
	// const onChangeSpace = (e?:any) => {
	// 	const target = e?.target;
	// 	const { value } = target;
	//
	// 	const changeItems = items.filter((el:any, idx:number) => el.element == "Space")
	// 													 .map((el:any, idx:number) => {
	// 														 el.value = value;
	//
	// 														 if (value < 30) {
	// 															 el.value = 30;
	// 														 }
	//
	// 														 return el;
	// 													 });
	//
	// 	setItems(changeItems);
	//
	// }
	
	const handleSortData = (newState: any, sortable: any, store: any) => {
		if (!list) return;
		if (!line) return;
		
		let nextId: number = 0;
		let errMsg: string = "";
		
		let newItems: elementItem[] = newState.filter((f:any) => !line.items.includes(f));
		let oldItems: elementLine[] = newState.filter((f:any) => !newItems.includes(f));
		
		list.map((dat: elementLine, idx: number) => {
			dat.items.map((da: elementItem, id: number) => {
				if (nextId < da.id) {
					nextId = da.id;
				}
			});
		})
		nextId++;
		
		// console.log(nextId);
		// console.log("list : ", list);
		// console.log("newState : ", newState);
		// console.log("line sort new data : ", newItems);
		// console.log("line sort old data : ", oldItems);

		if (newItems.length > 0) {
			let addItem: elementItem = {
				...newItems[0],
				id: nextId,
			}
			
			let copyList = [ ...list ];
			
			const order = newState.findIndex((data: any) => data === newItems[0]) + 1;
			
			copyList.filter((f:elementLine) => f.id == lineData.id)[0].items.splice(order - 1, 0, addItem);
			copyList.filter((f:elementLine) => f.id == lineData.id)[0].items.map((dat:any, idx:number) => dat.order = idx + 1);
			
			// dispatch(postAction.request(copyList));
		}
		
		// if (newState.length > 2) {
		// 	errMsg = "하나의 라인에는 최대 2개의 항목만 생성 가능합니다.";
		// }
		//
		// if (errMsg) {
		// 	alert(errMsg);
		// } else {
		// 	setItems(newState)
		// }
	}
	
	// console.log(items);
	
	return items && items?.length > 0 ? (
		<Box
			sx={{
				py: .1,
				// my: 1,
				"&.noPadding": {
					p: 0,
					mt: "-1px",
				},
				"& .elementLine": {
					position: "relative",
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
				"& .MuiBox-root.optionBox button": {
					p: 0,
					px: .25,
				},
				"& .MuiBox-root.optionBox button .MuiSvgIcon-root":{
					width: ".7em",
				},
				"& .elementLine:hover": {
					px: 0,
					// mx: 2,
					border: "1px solid rgba(0, 0, 255, .5)",
					boxSizing: "border-box",
				},
				"& .elementLine:hover .options": {
					display: "block",
				},
			}}
		>
				<ReactSortable
					group={"shared"}
					className={`elementLine`}
					ghostClass={"highlight"}
					handle={".sortHandle"}
					direction={"horizontal"}
					list={items}
					setList={handleSortData}
				>
					{items.sort((a:any, b:any) => a.order - b.order).map((el: elementItem, index: number) => (
						<DropItem key={index} itemData={el} isFocus={el.id === focusId} className={items.length > 1 ? ( index ? "el-right" : "el-left") : ""} onClick={handleClick} onRemove={handleRemove} />
					))}
				</ReactSortable>
		</Box>
	): <></>;
};

export default DropLine;
