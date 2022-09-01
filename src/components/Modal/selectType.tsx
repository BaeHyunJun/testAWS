import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader, CardMedia,
	Container, Divider,
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
import Link from "next/link";

type ItemProps = {
	open: boolean;
	handleClose: () => void;
};

const SelectType: NextPage<ItemProps> = ({ open, handleClose }) => {
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
					width: 400,
					boxShadow: 24,
					backgroundColor: "white",
					// "& .MuiCard-root": { px: 5, py: 3 },
				}}
			>
				<Grid container sx={{
					p: 3,
					textAlign: "center",
					"& .MuiButton-root": { p: 4, pb: 2, display: "flow-root", border: "1px solid #98a8fa", backgroundColor: "#f4f7ff", color: "black" },
					"& .MuiTypography-caption": { mt: 2, display: "block", fontSize: "1.2rem", fontWeight: "500" }
				}}>
					<Grid item xs={6}>
						<Button>
							<Link href={"/register/post"}>
								<a>
									<Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/register.png"} alt={"모집신청"} width={100} height={100} />
									<Typography variant={"caption"}>모집신청</Typography>
								</a>
							</Link>
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button sx={{ ml:"auto" }}>
							<Link href={"/register/event"}>
								<a>
									<Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/event.png"} alt={"이벤트"} width={100} height={100} />
									<Typography variant={"caption"}>이벤트</Typography>
								</a>
							</Link>
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	);
};

export default SelectType;
