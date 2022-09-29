import React, { useState } from "react";
import { NextPage } from "next";

import { InputAdornment, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const Text: NextPage<ItemProps> = ( {props, actionRemove}) => {
	return (<></>);
};

export default Text;
