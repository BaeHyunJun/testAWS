import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
	DragDropContext,
	Droppable,
	Draggable,
	DroppableProvided,
	DraggableProvided,
	DraggableStateSnapshot,
	resetServerContext,
	DroppableStateSnapshot
} from "react-beautiful-dnd";
import type { DropResult } from "react-beautiful-dnd";
import Column from "@components/test/column";
import { Author, Quote } from "@components/test/types";
import { colors } from "@atlaskit/theme";
import { Box, Container } from "@mui/material";

const jake: Author = {
	id: "1",
	name: 'Jake',
	url: 'http://adventuretime.wikia.com/wiki/Jake',
	// avatarUrl: jakeImg,
	colors: {
		soft: colors.Y50,
		hard: colors.N400A,
	},
};

const BMO: Author = {
	id: "2",
	name: 'BMO',
	url: 'http://adventuretime.wikia.com/wiki/BMO',
	// avatarUrl: bmoImg,
	colors: {
		soft: colors.G50,
		hard: colors.N400A,
	},
};

const finn: Author = {
	id: "3",
	name: 'Finn',
	url: 'http://adventuretime.wikia.com/wiki/Finn',
	// avatarUrl: finnImg,
	colors: {
		soft: colors.B50,
		hard: colors.N400A,
	},
};

const princess: Author = {
	id: "4",
	name: 'Princess bubblegum',
	url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
	// avatarUrl: princessImg,
	colors: {
		soft: colors.P50,
		hard: colors.N400A,
	},
};

export const initial_quotes: Quote[] = [
	{
		id: "1",
		content: 'Sometimes life is scary and dark',
		author: BMO,
	},
	{
		id: "2",
		content:
			'Sucking at something is the first step towards being sorta good at something.',
		author: jake,
	},
	{
		id: '3',
		content: "You got to focus on what's real, man",
		author: jake,
	},
	{
		id: '4',
		content: 'Is that where creativity comes from? From sad biz?',
		author: finn,
	},
	{
		id: '5',
		content: 'Homies help homies. Always',
		author: finn,
	},
	{
		id: '6',
		content: 'Responsibility demands sacrifice',
		author: princess,
	},
	{
		id: '7',
		content: "That's it! The answer was so simple, I was too smart to see it!",
		author: princess,
	},
	{
		id: '8',
		content:
			"People make mistakes. It's all a part of growing up and you never really stop growing",
		author: finn,
	},
	{
		id: '9',
		content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
		author: finn,
	},
	{
		id: '10',
		content: 'I should not have drunk that much tea!',
		author: princess,
	},
	{
		id: '11',
		content: 'Please! I need the real you!',
		author: princess,
	},
	{
		id: '12',
		content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
		author: princess,
	},
];


const boxs = [
	{
		id: "1",
		content: 'first',
	},
	{
		id: "2",
		content: 'second',
	},
]

const getQuotes = () => {
	const large: Quote = {
		...initial_quotes[0],
		content: Array.from({ length: 20 })
		.map(() => 'some really long text')
		.join(' '),
	};
	
	const quotes: Quote[] = [large, ...initial_quotes.slice(1)];
	return quotes;
}

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	
	return result;
};

const Post: NextPage = () => {
	const [uiState, setUiState] = useState<boolean>(false);
	const [quotes, setQuotes] = useState(() => getQuotes());
	
	useEffect(() => {
		setUiState(true)
	}, [])
	
	
	// resetServerContext();
	
	const isCombineEnabled: boolean = false;
	
	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}
		setQuotes(reorder(quotes, result.source.index, result.destination.index));
	}
	
	console.log(quotes);
	
	return uiState ? (
		<Box
			sx={{
				m: 5,
				p: 5,
				"& .MuiContainer-root": {
					p: 2,
					display: "flex",
					border: "1px solid",
				},
				"& .MuiBox-root": {
					m: 1,
					p: 3,
					width: "300px",
				},
				"& .MuiBox-root.first": {
					borderColor: "blue",
					backgroundColor: "rgba(0, 0, 255, .3)",
				},
				"& .MuiBox-root.second": {
					borderColor: "green",
					backgroundColor: "rgba(0, 255, 0, .3)",
				}
			}}
		>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="board" direction="horizontal">
					{(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
						<Container
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{/* 박스 만들기 ???? */}
							{ quotes.map((box: any, index: number) => (
								<Draggable key={box.id} draggableId={box.id.toString()} index={index}>
									{(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
										<Box
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											className={ box.content }
										>
											{ box.content }
										</Box>
									)}
								</Draggable>
								// <Column title={"quote test"} quotes={quotes} index={1} />
							)) }
							{provided.placeholder}
						</Container>
					)}
				</Droppable>
			</DragDropContext>
		</Box>
	) : <></>;
};

export default Post;



// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//
// 	resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
//
// 	return {props: { data : []}}
//
// }