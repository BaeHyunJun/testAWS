import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { colors } from "@atlaskit/theme";
import { Draggable } from "react-beautiful-dnd";

import { Quote } from "@components/test/types";
import QuoteList from "@components/test/quotelist";

type ItemProps = {
	title: string,
	quotes: Quote[],
	index: number,
};

const Column: NextPage<ItemProps> = ({ title, quotes, index }) => {
	return (
		<Draggable draggableId={title} index={index}>
			{(provided, snapshot) => (
				<Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
					<Typography variant={"h4"}>
						{ title }
					</Typography>
					{/*<QuoteList*/}
					{/*	listId={title}*/}
					{/*	listType="QUOTE"*/}
					{/*	quotes={quotes}*/}
					{/*	style={{*/}
					{/*		backgroundColor: snapshot.isDragging ? colors.G50 : null,*/}
					{/*	}}*/}
					{/*/>*/}
				</Box>
			)}
		</Draggable>
	);
};

export default Column;
