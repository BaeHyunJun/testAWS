import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";

type ItemProps = {
	title: string,
	description: string,
};

const SubHeader: NextPage<ItemProps> = ({title, description}) => {
	return (
		<Box
			sx={{
				mt: 6,
				pb: 2,
				borderBottom: "2px solid ",
				"& h5.MuiTypography-h5": { display: "inline" },
				"& h6.MuiTypography-subtitle1": { ml: 2,  display: "inline", color: "gray" },
			}}
		>
			<Typography variant={"h5"}>
				{ title }
			</Typography>
			<Typography variant={"subtitle1"}>
				{ description }
			</Typography>
		</Box>
	);
};

export default SubHeader;
