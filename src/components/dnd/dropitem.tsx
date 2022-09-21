import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment, Radio, RadioGroup,
	Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Text from "@components/elements/Text";
import { elementItem, moaElements, moaLine } from "@config/const";
import { ReactSortable } from "react-sortablejs";
import Sex from "@components/elementGroup/Sex";
import Notice from "@components/elements/Notice";
import Space from "@components/elements/Space";
import Date from "@components/elementGroup/Date";
import Account from "@components/elementGroup/Account";
import Person from "@components/elementGroup/Person";
import Education from "@components/elementGroup/Education";
import License from "@components/elementGroup/License";
import Career from "@components/elementGroup/Career";

type ItemProps = {
	el: elementItem;
	loc: string;
	onRemove:(index:number) => void;
};

const DropItem: NextPage<ItemProps> = ({ el, loc, onRemove }) => {
	
	const removeElement = () => {
		onRemove(el.id);
	}

	const createElements = (props: elementItem) => {
		const { label, element, placeholder } = props;
		
		switch (element) {
			case "Text":
				return <Text props={ el } actionRemove={ removeElement } />;
			case "Sex":
				return <Sex props={ el } actionRemove={ removeElement } />;
			case "Notice":
				return <Notice props={ el } actionRemove={ removeElement } />;
			case "Space":
				return <Space props={ el } actionRemove={ removeElement } />;
			case "Date":
				return <Date props={ el } actionRemove={ removeElement } />;
			case "Account":
				return <Account props={ el } actionRemove={ removeElement } />;
			case "Person":
				return <Person props={ el } actionRemove={ removeElement } />;
			case "Education":
				return <Education props={ el } actionRemove={ removeElement } />;
			case "Career":
				return <Career props={ el } actionRemove={ removeElement } />;
			case "License":
				return <License props={ el } actionRemove={ removeElement } />;
			default:
				return "";
		}
	}
	
	return (
		<Box
			sx={{
				width: "100%",
			}}
			className={loc}
		>
			{ createElements (el) }
		</Box>
	);
};

export default DropItem;
