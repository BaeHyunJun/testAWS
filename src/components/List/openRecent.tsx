import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Container,
	Grid,
	Modal,
	Table,
	TableBody, TableCell,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import Recent from "@components/Item/recent";
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import { Alert } from "@mui/lab";
import ModalPreview from "@components/Modal/preview";
import ModalSelector from "@components/Modal/selectType";

type ItemProps = {
};

const OpenRecent: NextPage<ItemProps> = () => {
	const [openPreview, setOpenPreview] = useState(false);
	const [openSelector, setOpenSelector] = useState(false);
	const handlePreview = () => setOpenPreview(true);
	const handleClosePreview = () => setOpenPreview(false);
	const handleSelecType = () => setOpenSelector(true);
	const handleCloseSelecType = () => setOpenSelector(false);
	
	const a:any = {
		a: { label: "+ 새로 만들기", onSeletor: handleSelecType },
		b: { label: "동아리 모집 신청서", src: "/banner_listBottom.png", onPreview: handlePreview },
		c: { label: "강의평가", src: "/banner_listBottom.png", onPreview: handlePreview },
		d: { label: "이벤트 진행", src: "/banner_listBottom.png", onPreview: handlePreview },
		e: { label: "서포터즈 모집", src: "/banner_listBottom.png", onPreview: handlePreview }
	};
	
	return (
		<Box
			className={"recent"}
			sx={{
				p: 8,
				backgroundColor: "white",
				borderTop: "1px solid #efefef"
			}}
		>
			<Container sx={{ display: "flex" }}>
				{
					Object.keys(a).map((dat:any, idx: number) =>
						<Recent key={idx} title={a[dat].label} src={a[dat].src} onModal={a[dat].src ? a[dat].onPreview : a[dat].onSeletor} />
					)
				}
			</Container>
			
			<ModalPreview open={openPreview} handleClose={handleClosePreview} />
			<ModalSelector open={openSelector} handleClose={handleCloseSelecType} />
		</Box>
	);
};

export default OpenRecent;
