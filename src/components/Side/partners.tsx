import React from "react";

import { NextPage } from "next";

import {
	Box, Checkbox,
	Divider, FormControlLabel,
	FormGroup,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader
} from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

type ItemProps = {
};

const Partners: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				border: "1px solid gray",
				borderRadius: "8px",
				"& div.MuiListSubheader-root": { p: 1, textAlign: "center", color: "black", fontSize: "1.2rem", backgroundColor: "transparent" }
			}}
		>
			<nav aria-label="main mailbox folders">
				<List
					subheader={
						<ListSubheader component="div" id="nested-list-subheader">
							파트너사 필터
						</ListSubheader>
					}
					sx={{
						pb: 3,
					}}
				>
					<Divider variant="middle" sx={{ borderColor: "black" }}  />
					<ListSubheader sx={{ px: 4, pt: 2, color: "black", fontSize: "1.1rem" }}>
						파트너사 직종
					</ListSubheader>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "기획" } />
						} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "디자인" } />
						} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "개발" } />
						} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "크리에이터" } />
						} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "교육" } />
						} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "행사 / 이벤트" } />
						} />
					</ListItem>
					<ListItem disablePadding>
						<ListItemText sx={{ px: 4 }} primary={
							<FormControlLabel control={<Checkbox />} label={ "박람회" } />
						} />
					</ListItem>
				</List>
			</nav>
		</Box>
	);
};

export default Partners;