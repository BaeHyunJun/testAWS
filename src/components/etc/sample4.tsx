import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";

type ItemProps = {
};

const Sample4: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				m: "50px auto",
				width: "800px",
				textAlign: "center",
				"& *": { color: "black", fontWeight: "500" },
				"& .MuiTypography-root": { m: "25px 0" },
			}}
		>
			<Typography>
				파트너사 찾기
			</Typography>
			<Typography>
				100,769명의 파트너스가 있습니다.
			</Typography>
		</Box>
	);
};

export default Sample4;
