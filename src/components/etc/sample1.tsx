import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Typography,
} from "@mui/material";
import Image from "next/image";

type ItemProps = {
};

const Sample1: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				m: "130px auto",
				width: "800px",
				textAlign: "center",
				"& *": { color: "black", fontWeight: "500" },
				"& .MuiTypography-root": { m: "25px 0" },
				"& .MuiTypography-h4": { fontSize: "3rem" },
				"& .MuiButton-root": { mt: "10px", p: "5px 80px", borderColor: "black" }
			}}
		>
			<Typography variant="h4" gutterBottom component="div">
				모집이 필요할때, 모아큐브
			</Typography>
			<Typography variant="h5" gutterBottom component="div">
				"빠르고 쉽게 만들고 검색할 수 있습니다."
			</Typography>
			<Button variant="outlined">시작하기</Button>
			
			<Box sx={{ pt: "110px" }}>
				<Image alt={'이미지1'} src={"/img1.png"} width={600} height={300} />
			</Box>
		</Box>
	);
};

export default Sample1;
