import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import Partner from "@components/Item/partner";

type ItemProps = {
};

const a = { a: "a", b: "b", c: "c" };

const Partners: NextPage<ItemProps> = () => {
	return (
		<Box sx={{ mb: 10 }}>
			{ Object.keys(a).map((dat:any, idx: number) => <Partner key={idx} />) }
		</Box>
	);
};

export default Partners;
