import React, { useState } from "react";
import { NextPage } from "next";

import {
	Box, Button, Container, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import Link from "next/link";

type ItemProps = {
};

const ListBottom: NextPage<ItemProps> = () => {
	return (
		<Box
			sx={{
				py: 8,
				px: 16,
				fontSize: 0,
				position: "relative",
				backgroundColor: "white",
				boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
				"& .areaBtn": { position: "absolute", left: 0, right: 0, top: "55%", textAlign: "center" },
				"& .MuiButton-root": {
					width: "200px",
					height: "50px",
					fontSize: "1.4rem",
					borderRadius: "25px",
					color: "#6f86f8",
					fontWeight: "bold",
					backgroundColor: "white",
				}
			}}
		>
			<Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/banner_listBottom.png"} alt={"배너"} width={1600} height={320} />
			
			<Box className={"areaBtn"}>
				<Button>
					<Link href={"/authentication?type=SignIn"}>
						<a>
							지금 시작하기
						</a>
					</Link>
				</Button>
			</Box>
		</Box>
	);
};

export default ListBottom;
