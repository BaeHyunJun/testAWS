import React, { useState } from "react";
import { NextPage } from "next";

import {
	AppBar,
	Box,
	Button, Divider, Grid,
	Toolbar, Typography,
} from "@mui/material";
import Image from "next/image";

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
				'& .MuiToolbar-root': { width: "1200px", m: "0 auto" },
				'& .fnb': { flexGrow: 1, display: "flex" },
				'& .areaText': { p: "10px 20px 30px" },
				'& .MuiButton-root': { m: 2, color: 'black', display: 'block', fontSize: "16px", backgroundColor: "transparent" },
				'& .MuiButton-root:hover': { backgroundColor: "transparent" },
			}}
		>
			<Toolbar disableGutters>
				<Box className={"fnb"}>
					<Button>이용약관</Button>
					<Button>개인정보처리방침</Button>
					<Button>회사소개</Button>
					<Button>문의하기</Button>
				</Box>
			</Toolbar>
			<Toolbar disableGutters>
				<Box className={"areaText"}>
					<img src={"https://moacube.s3.ap-northeast-2.amazonaws.com/logo.png"} alt={"로고"} width={70} height={20} />
					<Grid container>
						<Grid item xs={2.5}>
							<Typography variant={"subtitle1"}>대표 : 강상훈</Typography>
						</Grid>
						<Grid item xs>
							<Typography variant={"subtitle1"}>사업자등록번호 : 000-00-00000</Typography>
						</Grid>
					</Grid>
					
					<Typography variant={"subtitle1"}>주소 : 부산광역시 연제구 법원남로 9번길 17, 동해선 거제역사 2층 연제청년창업나래센터 (거제동)</Typography>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

function propsAreEqual(prev: any, next: any) {
	return prev.data === next.data;
}

export default React.memo(Header, propsAreEqual);
