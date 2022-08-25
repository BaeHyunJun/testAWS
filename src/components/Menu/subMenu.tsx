import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
	AppBar,
	Box, Button, Container, Toolbar, Typography,
} from "@mui/material";
import Image from "next/image";
import { Pages } from "@mui/icons-material";
import { SITE_MENU } from "@config/const";
import Link from "next/link";
import { useRouter } from "next/router";

type ItemProps = { };

const SubMenu: NextPage<ItemProps> = () => {
	const router = useRouter();
	const [pathState, setPathState] = useState<string>("");
	
	useEffect(()=>{
		const pathName = router.pathname.split("/");
		setPathState(pathName[pathName.length - 1])
	}, [router]);
	
	return (
		<AppBar
			position="fixed"
			component={"div"}
			sx={{
				mt: "72px",
				px: 2,
				backgroundColor: "#f4f7ff",
				zIndex: (theme) => theme.zIndex.drawer + 1,
				'& .MuiButton-root': { m: 2, color: 'black', fontSize: "16px" },
				'& .MuiButton-root:hover': { backgroundColor: "transparent" },
			}}
		>
			<Toolbar
				disableGutters
				sx={{
					pl: "150px",
					m: "0 auto",
					width: "1200px",
					"& .MuiButton-root": {
						my: 0
					},
					"& .MuiButton-root.active": {
						color: "#5471f3",
						fontWeight: "900",
						height: "64px",
						borderRadius: 0,
						borderBottom: "2px solid #5471f3"
					}
				}}
			>
				<Box>
					<Button className={pathState == "list" ? "active" : ""}>
						<Link href={ "/register/list" }>
							<a>
								{ "관리하기" }
							</a>
						</Link>
					</Button>
					<Button className={pathState == "analytics" ? "active" : ""}>
						<Link href={ "/analytics" }>
							<a>
								{ "분석하기" }
							</a>
						</Link>
					</Button>
					<Button className={pathState == "store" ? "active" : ""}>
						<Link href={ "/store" }>
							<a>
								{ "스토어" }
							</a>
						</Link>
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default SubMenu;
