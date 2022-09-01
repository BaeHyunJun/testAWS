import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment, Radio, RadioGroup,
	TextField, Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { moaElements, moaLine } from "@config/const";
import { ReactSortable } from "react-sortablejs";

type ItemProps = {
	el: moaElements;
	onRemove:(index:number) => void;
};

const DropItem: NextPage<ItemProps> = ({ el, onRemove }) => {
	
	const [element, setElement] = useState<moaElements>(el);
	
	useEffect(() => {
		if (el !== element) {
			setElement(el);
		}
	}, [el, element]);
	
	const removeElement = () => {
		onRemove(element.id - 1);
	}
	
	// console.log(element)
	
	const createElements = (props: moaElements) => {
		const { label, el, placeholder } = props;
		
		switch (el) {
			case "TextField":
				return (
					<TextField
						variant="standard"
						placeholder={ placeholder ? placeholder : "내용을 입력해주세요." }
						InputProps={{
							startAdornment: <InputAdornment position="start">{ label }</InputAdornment>,
							endAdornment: <CloseIcon className="removeBtn" onClick={removeElement} />,
						}}
					/>
				);
			case "Sex":
				return (
					<FormControl sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.42)" }}>
						<RadioGroup row defaultValue="female">
							<FormLabel>
								<Typography variant={"body1"}>
									{ label }
								</Typography>
							</FormLabel>
							<FormControlLabel value="female" control={<Radio />} label="남자" />
							<FormControlLabel value="male" control={<Radio />} label="여자" />
						</RadioGroup>
					</FormControl>
				)
			default:
				return "";
		}
	}
	
	return (
		<Box>
			{ createElements (element) }
		</Box>
	);
};

export default DropItem;
