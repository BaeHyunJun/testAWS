import React from "react";
import { NextPage } from "next";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardMedia,
	Divider,
	IconButton,
	Menu,
	MenuItem,
	Typography
} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
type ItemProps = {
	title?: string;
	src?: string;
	
	onModal?: () => void;
};

const Recent: NextPage<ItemProps> = ({ title, src, onModal }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	
	return (
		<Card
			sx={{
				mx: 2,
				width: "20%",
				border: " 1px solid #efefef",
				"& .MuiCardMedia-root": { minHeight: "160px", },
				"& .MuiButton-root": { color: "black", backgroundColor: "transparent" },
			}}
		>
			{
				src ?
					<Button
						sx={{
							p: 0,
							m: 0,
							"& .textBox": {
								pt: "125px",
								pb: "5px",
								position: "absolute",
								left: 0,
								right: 0,
								bottom: 0,
								color: "white",
								background: "linear-gradient(rgba(255, 255, 255, 0), 80%, rgba(0, 0, 0, .8))",
							},
							"& .textBox *": {
								mx: 1,
								display: "inline-block"
							},
							"& .textBox .MuiSvgIcon-fontSizeMedium": {
								verticalAlign: "sub",
							}
						}}
						onClick={onModal}
					>
						<CardMedia
							component="img"
							height="140"
							image={ src }
							alt="green iguana"
						/>
						<Box className={"textBox"}>
							<VisibilityIcon />
							<Typography>
								미리보기
							</Typography>
						</Box>
					</Button>
				:
					<CardMedia
						component="div"
						image={"https://moacube.s3.ap-northeast-2.amazonaws.com/icon/new.png"}
						sx={{ p: 10, backgroundColor: "#e2e5ec", backgroundSize: "50%" }}
					/>
			}
			<CardActions>
				{
					title
					?
						<>
							<Button>{ title }</Button>
							<Box sx={{ flexGrow: 1 }} />
							<IconButton onClick={handleClick}>
								<MoreVertIcon />
							</IconButton>
							<Menu
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								transformOrigin={{
									vertical: "bottom",
									horizontal: "center"
								}}
								sx={{
									"& .MuiMenuItem-root": { px: 4 }
								}}
							>
								<MenuItem onClick={handleClose}>
									편집하기
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>
									url 공유
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleClose}>
									삭제하기
								</MenuItem>
							</Menu>
						</>
					:
						<>
							<Button onClick={onModal}>+ 새로 만들기</Button>
						</>
				}
				
			</CardActions>
		</Card>
	);
};

export default Recent;
