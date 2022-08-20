import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, ImageList, ImageListItem, Typography,
} from "@mui/material";
import Image from "next/image";

type ItemProps = {
};

const Sample3: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				textAlign: "center",
				"& *": { color: "black", fontWeight: "500" },
				"& .MuiTypography-root": { m: "25px 0" },
				"& .MuiTypography-h4": { fontSize: "3rem" },
				"& .MuiButton-root": { mt: "10px", p: "5px 80px", borderColor: "black" }
			}}
		>
			<Typography variant="h5" gutterBottom component="div">
				주요 기능 사용법
			</Typography>
			<ImageList sx={{ width: "90%", m: "0 auto" }} cols={3} rowHeight={164}>
				<ImageListItem>
					<img
						src={`/1.jpeg?w=150&h=150&fit=crop&auto=format`}
						// srcSet={`/1.jpeg?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
						alt="로고"
						loading="lazy"
					/>
				</ImageListItem>
			</ImageList>
		</Box>
	);
};

export default Sample3;
