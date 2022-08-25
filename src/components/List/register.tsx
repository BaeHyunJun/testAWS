import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Container, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import Partner from "@components/Item/partner";
import Link from "next/link";

type ItemProps = {
};

const listData:any = {
	a: {
		no: "1",
		date: "2022.08.11",
		title: "모아 동아리 3기 모집",
		count: "3",
	},
	b: {
		no: "2",
		date: "2022.08.11",
		title: "이벤트 모집",
		count: "11",
	}
}

const Partners: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				py: 8,
				"& .MuiTypography-root": { textAlign: "center" },
				"& .MuiTableCell-head": { py:.5, backgroundColor: "rgba(224, 224, 224, 1)" }
			}}
		>
			<Table>
				<colgroup>
					<col width={"10%"}/>
					<col width={"20%"}/>
					<col/>
					<col width={"10%"}/>
					<col width={"30%"}/>
				</colgroup>
				<TableHead>
					<TableRow>
						<TableCell>
							<Typography>
								순번
							</Typography>
						</TableCell>
						<TableCell>
							<Typography>
								작성일
							</Typography>
						</TableCell>
						<TableCell>
							<Typography>
								제목
							</Typography>
						</TableCell>
						<TableCell>
							<Typography>
								문의
							</Typography>
						</TableCell>
						<TableCell>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Object.keys(listData).reverse().map((dat:any, idx:number) => (
						<TableRow key={idx}>
							<TableCell>
								<Typography>
									{ listData[dat].no }
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{ listData[dat].date }
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{ listData[dat].title }
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{ listData[dat].count }
								</Typography>
							</TableCell>
							<TableCell>
								<Grid container>
									<Grid item xs={3}>
										<Typography variant={"body2"}>
											결과확인
										</Typography>
									</Grid>
									<Grid item xs={3} sx={{ color: "blue", textDecoration: "underline"}}>
										<Link href={"#"}>
											<a>
												<Typography variant={"body2"}>
													다운로드
												</Typography>
											</a>
										</Link>
									</Grid>
									<Grid item xs={3} sx={{ color: "#666" }}>
										<Typography variant={"body2"}>
											안내
										</Typography>
									</Grid>
									<Grid item xs={3}>
										<Button variant="outlined" color="error" size={"small"}>
											삭제
										</Button>
									</Grid>
								</Grid>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			
			<Box
				sx={{
					p: 8,
					textAlign: "center",
					"& button": { color: "black", borderColor: "black" }
				}}
			>
				<Button variant="outlined">
					<KeyboardArrowDownIcon />
					더보기 (1/3)
				</Button>
			</Box>
		</Box>
	);
};

export default Partners;
