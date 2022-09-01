import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type ItemProps = {
};

const Sample1: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				fontSize: 0,
				position: "relative",
				"& .areaText": { position: "absolute", left: 0, right: 0, top: "16%", zIndex: 9, textAlign: "center" },
				"& .areaText h3.MuiTypography-root": { fontSize: "2.1rem", lineHeight: "1.2", display: "inline", letterSpacing: "0.02em" },
				"& .areaText .logoText": { display: "inline", verticalAlign: "top" },
				"& .areaText h4.MuiTypography-root": { mt: "11px", fontSize: "1.2rem", letterSpacing: "0.07em" },
				"& .areaText h4.MuiTypography-root:before": { content: '"ㅡ"', marginRight: "15px" },
				"& .areaText h4.MuiTypography-root:after": { content: '"ㅡ"', marginLeft: "15px" },
				"& .areaBtn": { position: "absolute", left: 0, right: 0, bottom: "10%", textAlign: "center" },
				"& .MuiButton-root": {
					width: "100px",
					height: "50px",
					fontSize: "17px",
					borderRadius: "25px",
					color: "white",
					fontWeight: "bold",
					backgroundColor: "#5371f4",
				}
			}}
		>
			{/*<Box className={"areaText"}>*/}
			{/*	<Typography variant="h3">모집이 필요할 때,</Typography>*/}
			{/*	<Box className={"logoText"}>*/}
			{/*		<Image src={"/logo.png"} alt={"로고"} width={150} height={40} />*/}
			{/*	</Box>*/}
			{/*	<Typography variant="h4">쉽고 빠르게 만들고 검색할 수 있습니다.</Typography>*/}
			{/*</Box>*/}
			<Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/main_top.png"} alt={""} width={"1920"} height={"867"} style={{ display: "block" }} />
			<Box className={"areaBtn"}>
				<Button>
					<Link href={"/authentication?type=SignIn"}>
						<a>
							시작하기
						</a>
					</Link>
				</Button>
			</Box>
		</Box>
	);
};

export default Sample1;
