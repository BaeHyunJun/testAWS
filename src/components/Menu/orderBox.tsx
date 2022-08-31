import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Chip, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";

type ItemProps = {
	data: any
};

const OrderBox: NextPage<ItemProps> = ({ data }) => {
	return (
		<Box
			sx={{
				p: 2,
				textAlign: "right",
				"& .MuiChip-root": { m: 1, borderRadius: "8px" },
			}}
		>
			{ Object.keys(data).map((dat: any, idx: number) => <Chip key={idx} label={data[dat]} />) }
		</Box>
	);
};

export default OrderBox;
