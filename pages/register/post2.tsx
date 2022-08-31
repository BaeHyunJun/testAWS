import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { DragDropContext, Droppable, Draggable, resetServerContext } from "react-beautiful-dnd";

export type Id = number;

export type AuthorColors = {
	soft: string,
	hard: string,
	};

export type Author = {
	id: Id,
	name: string,
	// avatarUrl: string,
	url: string,
	// colors: AuthorColors,
};

export type Quote = {
	id: Id,
	content: string,
	author?: Author,
	};


const jake: Author = {
	id: 1,
	name: 'Jake',
	url: 'http://adventuretime.wikia.com/wiki/Jake',
	// avatarUrl: jakeImg,
	// colors: {
	// 	soft: colors.Y50,
	// 	hard: colors.N400A,
	// },
};

const BMO: Author = {
	id: 2,
	name: 'BMO',
	url: 'http://adventuretime.wikia.com/wiki/BMO',
	// avatarUrl: bmoImg,
	// colors: {
	// 	soft: colors.G50,
	// 	hard: colors.N400A,
	// },
};

const finn: Author = {
	id: 3,
	name: 'Finn',
	url: 'http://adventuretime.wikia.com/wiki/Finn',
	// avatarUrl: finnImg,
	// colors: {
	// 	soft: colors.B50,
	// 	hard: colors.N400A,
	// },
};

const princess: Author = {
	id: 4,
	name: 'Princess bubblegum',
	url: 'http://adventuretime.wikia.com/wiki/Princess_Bubblegum',
	// avatarUrl: princessImg,
	// colors: {
	// 	soft: colors.P50,
	// 	hard: colors.N400A,
	// },
};

export const quotes: Quote[] = [
	{
		id: 1,
		content: 'Sometimes life is scary and dark',
		// author: BMO,
	},
	{
		id: 2,
		content:
			'Sucking at something is the first step towards being sorta good at something.',
		// author: jake,
	},
	// {
	// 	id: '3',
	// 	content: "You got to focus on what's real, man",
	// 	author: jake,
	// },
	// {
	// 	id: '4',
	// 	content: 'Is that where creativity comes from? From sad biz?',
	// 	author: finn,
	// },
	// {
	// 	id: '5',
	// 	content: 'Homies help homies. Always',
	// 	author: finn,
	// },
	// {
	// 	id: '6',
	// 	content: 'Responsibility demands sacrifice',
	// 	author: princess,
	// },
	// {
	// 	id: '7',
	// 	content: "That's it! The answer was so simple, I was too smart to see it!",
	// 	author: princess,
	// },
	// {
	// 	id: '8',
	// 	content:
	// 		"People make mistakes. It's all a part of growing up and you never really stop growing",
	// 	author: finn,
	// },
	// {
	// 	id: '9',
	// 	content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
	// 	author: finn,
	// },
	// {
	// 	id: '10',
	// 	content: 'I should not have drunk that much tea!',
	// 	author: princess,
	// },
	// {
	// 	id: '11',
	// 	content: 'Please! I need the real you!',
	// 	author: princess,
	// },
	// {
	// 	id: '12',
	// 	content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
	// 	author: princess,
	// },
];

const Post: NextPage = () => {
	
	resetServerContext();
	
	const onDragEnd = () => {
		console.log("왜..");
	}
	
	return  (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="Goal">
				{provided =>  (
					<div className="goals-list-wrap" {...provided.droppableProps} ref={provided.innerRef}>
						{quotes.map((quote, index) => {
							return (
								<Draggable draggableId={String(quote.id)} index={quote.id} key={index}>
									{provided => (
										<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
											{/*<OrderTodoGoal data={data} index={index}  id={data.goalId} />*/}
											{ quote.content }
										</div>
									)}
								</Draggable>
							)
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Post;



// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//
// 	resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE
//
// 	return {props: { data : []}}
//
// }