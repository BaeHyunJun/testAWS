import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Typography,
} from "@mui/material";
import Image from "next/image";

type ItemProps = {
};

const Sample2: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				color: "white",
				fontSize: "2rem",
				fontWeight: "bold",
				p: "80px",
				// m: "50px auto",
				// width: "800px",
				textAlign: "center",
				// "& *": { color: "black", fontWeight: "500" },
				// "& .MuiTypography-root": { m: "25px 0" },
				"& h5": { p: "50px", fontSize: "2rem", fontWeight: "bold" },
			}}
		>
			<Typography variant="h5" gutterBottom>
				주요 기능 사용법
			</Typography>
			
			<Box>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/JaamuJV6sNA" title="YouTube video player"
				        frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowFullScreen></iframe>
			</Box>
		</Box>
	);
};

export default Sample2;
