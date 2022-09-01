import React, { useState } from "react";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { Droppable } from "react-beautiful-dnd";
import type { DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";

import { Quote } from "@components/test/types";

type ItemProps = {
	listId?: string,
	listType?: string, //="QUOTE",
	quotes: Quote[],
	style?: Object,
	ignoreContainerClipping?: boolean,
	isDropDisabled?: boolean,
	isCombineEnabled?: boolean,
	useClone?: boolean,
};

const QuoteList: NextPage<ItemProps> = ({
	listId="LIST",
  listType="QUOTE",
	quotes,
	style,
  ignoreContainerClipping ,
  isDropDisabled,
  isCombineEnabled,
	useClone
}) => {
	return (
		<Droppable
			droppableId={listId}
			type={listType}
			ignoreContainerClipping={ignoreContainerClipping}
			isDropDisabled={isDropDisabled}
			isCombineEnabled={isCombineEnabled}
		>
			{(
				dropProvided: DroppableProvided,
				dropSnapshot: DroppableStateSnapshot,
			) => (
				<>
					{quotes.map((quote: Quote, index: number) => (
						<Box key={index}>
							{ quote.content }
						</Box>
					))}
				</>
			)
			}
		</Droppable>
	);
};

export default QuoteList;
