import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Chip, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";

type ItemProps = {
};

const OrderBox: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				p: 2,
				textAlign: "right",
				"& .MuiChip-root": { m: 1, borderRadius: "8px" },
			}}
		>
			<Chip label="기본정렬" />
			<Chip label="업데이트순" />
			<Chip label="평점높은순" />
			<Chip label="포트폴리오순" />
		</Box>
	);
};

export default OrderBox;
