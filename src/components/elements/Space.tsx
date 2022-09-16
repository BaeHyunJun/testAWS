import React from "react";
import { NextPage } from "next";

import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Space: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, value } = props;
	
	return (
		<Box>
			<CloseIcon className="removeBtn" onClick={actionRemove} />
		</Box>
	);
};

export default Space;
