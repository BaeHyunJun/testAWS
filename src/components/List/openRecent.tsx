import React, { useEffect, useState } from "react";
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
import useSWR from 'swr'
import ModalPreview from "@components/Modal/preview";
import ModalSelector from "@components/Modal/selectType";
import { useRouter } from "next/router";
import axios from "axios";

type ItemProps = {
	data: any
};

const OpenRecent: NextPage<ItemProps> = ({ data }) => {
	const [openPreview, setOpenPreview] = useState(false);
	const [openSelector, setOpenSelector] = useState(false);
	const handlePreview = () => setOpenPreview(true);
	const handleClosePreview = () => setOpenPreview(false);
	const handleSelecType = () => setOpenSelector(true);
	const handleCloseSelecType = () => setOpenSelector(false);
	
	const a:any = {
		// a: { label: "+ 새로 만들기", onSeletor: handleSelecType },
		b: { label: "동아리 모집 신청서", src: "/banner_listBottom.png", onPreview: handlePreview },
		c: { label: "강의평가", src: "/banner_listBottom.png", onPreview: handlePreview },
		d: { label: "이벤트 진행", src: "/banner_listBottom.png", onPreview: handlePreview },
		e: { label: "서포터즈 모집", src: "/banner_listBottom.png", onPreview: handlePreview }
	};
	
	const router = useRouter();
	
	// const fetcher = (url: string) => axios.get(url).then((res) => res.data);
	// const { data, error } = useSWR("https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form", fetcher);
	//
	// console.log(data);
	
	useEffect(() => {
		// const fetchPhoto = async () => {
		// 	const res = await fetch("https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form");
		//
		// 	console.log(res);
		// };
		// fetchPhoto();
	}, []);
	
	// console.log(data);
	
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
				<Recent onModal={handleSelecType} />
				{
					data?.map((dat:any, idx: number) =>
						<Recent key={idx} data={dat} title={dat.title} src={dat.thumb} onModal={handlePreview} />
					)
				}
			</Container>
			
			<ModalPreview open={openPreview} handleClose={handleClosePreview} />
			<ModalSelector open={openSelector} handleClose={handleCloseSelecType} />
		</Box>
	);
};

export default OpenRecent;
