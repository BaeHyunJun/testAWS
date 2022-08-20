import React from "react";
import { NextPage } from "next";

import {
	Box,
	CircularProgress,
} from "@mui/material";

type ItemProps = {
};

const Loading: NextPage<ItemProps> = () => {
	return (
		<Box sx={{ textAlign: "center", height: "100vh" }}>
			<CircularProgress />
		</Box>
	);
};

export default Loading;
