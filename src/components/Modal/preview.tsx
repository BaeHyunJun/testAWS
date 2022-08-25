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
	TableBody,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import CloseIcon from "@mui/icons-material/Close";

type ItemProps = {
	open: boolean;
	handleClose: () => void;
};

const Preview: NextPage<ItemProps> = ({ open, handleClose }) => {
	return (
		
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box
				sx={{
					position: 'absolute' as 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 600,
					boxShadow: 24,
					"& .MuiCard-root": { px: 5, py: 3 },
					"& .MuiTable-root": { border: "1px solid rgba(224, 224, 224, 1)" }
				}}
			>
				<Card>
					<CardHeader title="동아리 모집 신청서 미리보기" />
					<CardContent>
						<Table>
							<colgroup>
								<col width={"20%"} />
								<col />
							</colgroup>
							<TableBody>
								<TableRow>
									<TableCell>
										이름
									</TableCell>
									<TableCell>
										김모아
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										생년월일
									</TableCell>
									<TableCell>
										1982.08.02
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										연락처
									</TableCell>
									<TableCell>
										010-1234-5678
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										이메일
									</TableCell>
									<TableCell>
										moacube@gmail.com
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										주소
									</TableCell>
									<TableCell>
										부산광역시 연제구 법원남로 9번길 17
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<Box
							sx={{
								py:4,
								textAlign: "center",
								"& .areaDate": { my: 3, mx: "auto", py: "3px", backgroundColor: "#efefef", width: "300px"},
								"& .areaSign": { mt: 10, ml: "auto", py: "3px", backgroundColor: "#efefef", width: "250px"}
							}}
						>
							<Typography variant="body1">모집 신청서를 제출합니다.</Typography>
							
							<Box className={"areaDate"}>
								<Grid container>
									<Grid item xs={3}>(신청일)</Grid>
									<Grid item xs={3}></Grid>
									<Grid item xs={1}>년</Grid>
									<Grid item xs={1.5}></Grid>
									<Grid item xs={1}>월</Grid>
									<Grid item xs={1.5}></Grid>
									<Grid item xs={1}>일</Grid>
								</Grid>
							</Box>
							
							<Box className={"areaSign"}>
								<Grid container>
									<Grid item xs={4}>(성명)</Grid>
									<Grid item xs={4}></Grid>
									<Grid item xs={4}>(서명)</Grid>
								</Grid>
							</Box>
						</Box>
					</CardContent>
					<CardActions
						sx={{
							"& .MuiButton-root": { width: "100%" }
						}}
					>
						<Button variant="contained">
							<DownloadIcon />
							다운로드
						</Button>
						<Button variant="outlined" onClick={handleClose}>
							<CloseIcon/>
							닫기
						</Button>
					</CardActions>
				</Card>
			</Box>
		</Modal>
	);
};

export default Preview;
