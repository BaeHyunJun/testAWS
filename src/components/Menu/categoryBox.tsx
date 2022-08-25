import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Chip, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";

type ItemProps = {
	title?: string;
	data: any;
};

const CategoryBox: NextPage<ItemProps> = ({ title, data }) => {
	return (
		<Box
			sx={{
				p: 2,
				"& .MuiTypography-h5": { mr: 2, display: "inline", verticalAlign: "bottom" },
				"& .MuiChip-root": { mx: 1, p: 1, fontSize: "1rem" },
				"& .MuiChip-root.active": { color: "white", backgroundColor: "#5571f5" },
			}}
		>
			<Typography variant={"h5"}>
				{ title }
			</Typography>
			<Chip className="active" label="전체" />
			{ Object.keys(data).map((dat:any, idx:number) => <Chip key={idx} label={data[dat].label} />) }
		</Box>
	);
};

export default CategoryBox;
