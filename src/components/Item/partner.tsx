import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import {
	Box, Breadcrumbs,
	Chip,
	Divider,
	ListItem,
	ListItemAvatar,
	ListItemText, Rating,
	Table,
	TableBody, TableCell, TableRow,
	Typography
} from "@mui/material";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type ItemProps = {
};

const Partner: NextPage<ItemProps> = () => {
	return (
		<ListItem
			alignItems="flex-start"
			sx={{
				p: 4,
				my: 2,
				boxShadow: "0px 1px 10px 0px",
				"& .MuiListItemAvatar-root": { p: 2, width: "10%", minWidth: "150px" },
				"& .MuiListItemAvatar-root .partnerLogo": { m: "0 auto", width: "80%", borderRadius: "50%", paddingBottom: "80%" },
			}}
		>
			<ListItemAvatar>
				<Image className={"partnerLogo"} src={"/banner_listBottom.png"} alt={"로고"} width={100} height={100} />
			</ListItemAvatar>
			<ListItemText
				sx={{
					"& .MuiTypography-subtitle1": { mr: 1, display: "inline" },
					"& .MuiChip-root": { height: "22px", borderRadius: "5px", color: "white", fontSize: "0.8rem", backgroundColor: "rgb(2 178 127)" }
				}}
				primary={
					<>
						<Typography variant="subtitle1" sx={{ color: "#42a8c5", fontWeight: "bold" }}>jackee</Typography>
						<Chip label="활동가능" />
					</>
				}
				secondary={
					<>
						<Box sx={{
							my: 1,
							display: 'flex',
							alignItems: 'center',
							"& .MuiChip-root": { background: "transparent", color: "black" },
						}}>
							<Chip icon={<KeyboardIcon />} label="개발" />
							<Divider orientation="vertical" flexItem />
							<Chip icon={<ApartmentIcon />} label="법인사업자" />
						</Box>
						{"반갑습니다~! \"설명이 가능하면 제작이 가능합니다\" 저희는 최근 13년간 웹, 모바일, 앱, 오프라인 윈도우, ERP 프로그램만을 해오는 개발전문 회사입니다. 항상 새로운 것에 호기심을 갖고 공부하는 회사입니다. 현재까지 고객과 많은 프로…"}
						<Box sx={{
							mt: 2,
							"& .MuiChip-root": { m: .4, background: "#ddd", color: "black" },
						}}>
							<Chip label="Php,Java,Node.js,..." />
							<Chip label="C#, Java" />
							<Chip label="Jsp" />
							<Chip label="Data Base Setting" />
							<Chip label="C, C++, Vc++, Pro+C..." />
							<Chip label="Erp, Mes" />
							<Chip label=".Net,Asp" />
							<Chip label="Javascript" />
							<Chip label="포토샵, AI" />
							<Chip label="Android, Ios, Unity ..." />
							<Chip label="Android" />
							<Chip label="React.js" />
							<Chip label="C++ Qt, 화상채팅, 아프리카..." />
							<Chip label="Ar, Vr" />
							<Chip label="Ios" />
							<Chip label="Unity" />
							<Chip label="Dart" />
							<Chip label="Figma" />
							<Chip label="React Native" />
							<Chip label="Aws" />
							<Chip label="Node(Express)" />
							<Chip label="Python" />
							<Chip label="Web Rtc 인터넷 음성, 화상..." />
							<Chip label="Wordpress" />
							<Chip label="Flutter" />
							<Chip label="Vue.Js" />
							<Chip label="메타버스" />
							<Chip label="Flutter" />
							<Chip label="라라벨, Laravel" />
						</Box>
					</>
				}
			/>
			<ListItemText
				sx={{
					m: 0,
					p: 2,
					minWidth: "230px"
				}}
				secondary={
					<>
						<Box sx={ {
							my: 1,
							display: 'flex',
							alignItems: 'center',
							"& .MuiTypography-subtitle2": { color: "black" },
							"& .MuiTypography-caption": { fontSize: ".65rem" },
							"& tr": { px: 2 },
							"& td": { px: 0 },
						} }>
							<Table size={"small"}>
								<TableBody>
									<TableRow>
										<TableCell align="left">
											<Rating name="read-only" size={"small"} value={5} readOnly />
										</TableCell>
										<TableCell align="right">
											<Breadcrumbs>
												<Typography variant="subtitle2">4.98</Typography>
												<Typography variant="caption">평가 124개</Typography>
											</Breadcrumbs>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell align="left">계약한 프로젝트</TableCell>
										<TableCell align="right">205 건</TableCell>
									</TableRow>
									<TableRow>
										<TableCell align="left">포트폴리오</TableCell>
										<TableCell align="right">1,359개</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Box>
						<Box sx={{
							mt: 2,
							"& .MuiChip-root": { m: .4, background: "transparent" },
							"& .MuiChip-icon": { fontSize: "1rem" },
							"& .MuiChip-label": { p: 1 },
						}}>
							<Chip icon={<CheckCircleOutlineIcon />} label="신원 인증" />
							<Chip icon={<CheckCircleOutlineIcon />} label="연락처 등록" />
						</Box>
					</>
				}
			/>
		</ListItem>
	);
};

export default Partner;
