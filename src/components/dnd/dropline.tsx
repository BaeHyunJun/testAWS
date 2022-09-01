import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
	DraggableProvided,
	DraggableStateSnapshot,
	Draggable,
	Droppable,
	DroppableProvided,
	DroppableStateSnapshot
} from "react-beautiful-dnd";
import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	InputAdornment, Radio, RadioGroup,
	TextField, Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { moaElements, moaLine } from "@config/const";
import { ReactSortable } from "react-sortablejs";
import DropItem from "@components/dnd/dropitem";

type ItemProps = {
	no: number;
	elGroup: moaElements[];
	
	onRemove:(data:any[], index:number) => void;
};

const DropLine: NextPage<ItemProps> = ({no, elGroup, onRemove}) => {
	
	const [elements, setElements] = useState<moaElements[]>(elGroup ? elGroup : []);
	
	useEffect(() => {
		setElements(elGroup);
	}, [elGroup])
	
	const onRemoveHandle = (index: number) => {
		const temp = elGroup.filter((dat: moaElements, idx:number) => idx != index);
		
		// setElements(temp);
		
		onRemove(temp, no - 1);
	}
	
	// console.log(elements);
	
	return elements.length > 0 ? (
		<Box
			sx={{
				py: 1,
				display: "flex",
				minHeight: "50px",
				"& .elementLine": {
					px: 2,
					width: "100%",
					display: "flex",
				},
				"& .removeBtn": {
					color: "gray",
					cursor: "pointer",
				},
				"& .MuiBox-root": {
					px: 2,
					width: "100%",
					height: "50px",
				},
				"& .MuiFormControl-root": {
					width: "100%",
					height: "100%",
				},
				"& .MuiInputBase-root": {
					height: "100%",
				},
				"& .MuiFormLabel-root": {
					minWidth: "100px",
					display: "inline-flex",
					alignItems: "center",
				},
				"& .MuiInputAdornment-root": {
					minWidth: "100px",
				},
			}}
		>
			<ReactSortable
				group={"shared"}
				className={"elementLine"}
				ghostClass={"highlight"}
				handle={".sortHandle"}
				direction={"horizontal"}
				list={elements}
				setList={(newState: moaElements[]) => setElements(newState)}
			>
				{elements.map((el: moaElements, index: number) => (
					<DropItem key={index} el={el} onRemove={onRemoveHandle} />
				))}
			</ReactSortable>
		</Box>
	): <></>;
};

export default DropLine;
