import { NextPage } from "next";
import { Box, Button, Card, CardActions, CardHeader, Container, CssBaseline, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { elementItem, YDR_THEME } from "@config/const";
import Text from "@components/elements/Text";
import Sex from "@components/elementGroup/Sex";
import Notice from "@components/elements/Notice";
import Space from "@components/elements/Space";
import Account from "@components/elementGroup/Account";
import Person from "@components/elementGroup/Person";
import Education from "@components/elementGroup/Education";
import Career from "@components/elementGroup/Career";
import License from "@components/elementGroup/License";
import { ThemeProvider } from "@mui/material/styles";
import { SagaStore, wrapper } from "@store/index";
import { END } from "redux-saga";
import { addFormUserAction, getPostAction } from "@actions/post";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import TextBox from "@components/elements/TextBox";
import InputBox from "@components/elements/InputBox";
import Agree from "@components/elementGroup/Agree";
import { useRouter } from "next/router";
import { addMoaFormUser } from "@api/index";

const Forms: NextPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const [title, setTitle] = useState<string>("");
	const [form, setForm] = useState<any>([]);
	
	useEffect(() => {
		const id = router.query.id;
		
		if (id != undefined) dispatch(getPostAction.request(id));
	}, [router, dispatch]);
	
	useEffect(() => {
		setForm(post.line);
		setTitle(post.title);
	}, [post]);
	
	return form ? (
		<ThemeProvider
			theme={ YDR_THEME }
			// sx={{
			// 	display: "flex",
			// 	justifyContent: "center",
			// 	alignItems: "center",
			// }}
		>
			<CssBaseline />
			
			<Container
				sx={{
					"html": {
						backgroundColor: "#f0f2f5",
					}
				}}
			>
				<Card
					sx={{
						mx: "auto",
						position: "relative",
						border: "1px solid",
						minHeight: "700px",
						maxWidth: "600px",
						"& .MuiCardActions-root": {
							mt: 3,
							background: "#5471f3",
							color: "white",
						},
						"& .MuiCardActions-root > .MuiButton-root": {
							width: "100%",
							color: "white",
							fontWeight: "bold",
							fontSize: "14px",
						}
					}}
				>
					<CardHeader title={"신청이 완료되었습니다."} />
						<Box>
							<Grid container>
								<Grid item xs={12}>
									{title} 신청이 완료되었습니다.
								</Grid>
							</Grid>
						</Box>
				</Card>
			</Container>
		</ThemeProvider>
	) : <></>;
}

export default Forms;