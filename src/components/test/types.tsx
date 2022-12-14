export type Id = string;

export type AuthorColors = {
	soft: string,
	hard: string,
};

export type Author = {
	id: Id,
	name: string,
	avatarUrl?: string,
	url: string,
	colors: AuthorColors,
};

export type Quote = {
	id: Id,
	content: string,
	author: Author,
};