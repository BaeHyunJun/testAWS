import React, { useState } from "react";
import { NextPage } from "next";

import {
	AppBar,
	Box,
	Button,
	Toolbar,
} from "@mui/material";

type ItemProps = {

};

const Header: NextPage<ItemProps> = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	
	return (
		<AppBar
			position="relative"
			component="footer"
			sx={{
				backgroundColor: "white",
				color: "#333",
				zIndex: (theme) => theme.zIndex.drawer + 1,
				'& .fnb': { flexGrow: 1, display: "flex" },
				'& .MuiButton-root': { m: 2, color: 'black', display: 'block', fontSize: "16px" },
				'& .MuiButton-root:hover': { backgroundColor: "transparent" },
			}}
		>
			<Toolbar disableGutters>
				<Box className={"fnb"}>
					<Button>이용약관</Button>
					<Button>개인정보처리방침</Button>
				</Box>
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { xs: "flex" } }}>
					<Button>로그인 / 회원가입</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

function propsAreEqual(prev: any, next: any) {
	return prev.data === next.data;
}

export default React.memo(Header, propsAreEqual);
