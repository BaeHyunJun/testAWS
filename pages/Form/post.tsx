import { NextPage } from "next";
import { Box, Button, Card, CardActions, CardHeader, Container, CssBaseline, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { elementItem, YDR_THEME } from "@config/const";
import Text from "@components/elements/Text";
import Sex from "@components/elementGroup/Sex";
import Notice from "@components/elements/Notice";
import Space from "@components/elements/Space";
import Date from "@components/elementGroup/Date";
import Account from "@components/elementGroup/Account";
import Person from "@components/elementGroup/Person";
import Education from "@components/elementGroup/Education";
import Career from "@components/elementGroup/Career";
import License from "@components/elementGroup/License";
import { ThemeProvider } from "@mui/material/styles";
import { SagaStore, wrapper } from "@store/index";
import { END } from "redux-saga";
import { getPostAction } from "@actions/post";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "@redux/reducers";
import TextBox from "@components/elements/TextBox";
import InputBox from "@components/elements/InputBox";
import Agree from "@components/elementGroup/Agree";

const Forms: NextPage = () => {
	const post = useSelector((state: RootState) => state.post, shallowEqual);
	
	const [title, setTitle] = useState<string>("");
	const [form, setForm] = useState<any>([]);
	
	useEffect(() => {
		setForm(post.line);
		setTitle(post.title);
	}, [post])
	
	console.log(post);
	
	const createElements = (props: elementItem) => {
		const { element } = props;
		
		switch (element) {
			case "TextBox":
				return <TextBox props={ props } />;
			case "InputBox":
				return <InputBox props={ props } />;
			case "Space":
				return <Space props={ props } />;
			case "Agree":
				return <Agree props={ props } />;
			case "Person":
				return <Person props={ props } />;
			//
			// case "Text":
			// 	return <Text props={ props } />;
			// case "Sex":
			// 	return <Sex props={ props } />;
			// case "Notice":
			// 	return <Notice props={ props } />;
			// case "Space":
			// 	return <Space props={ props } />;
			// case "Date":
			// 	return <Date props={ props }  />;
			// case "Account":
			// 	return <Account props={ props } />;
			// case "Person":
			// 	return <Person props={ props }  />;
			// case "Education":
			// 	return <Education props={ props }  />;
			// case "Career":
			// 	return <Career props={ props }  />;
			// case "License":
			// 	return <License props={ props }  />;
			default:
				return "";
		}
	}
	
	const setClassName = (props: elementItem) => {
		if (!props) return;
		
		const {
			isBold,
			isItalic,
			isUnderLine,
			isThrough,
			isGrid,
			fontSize,
			align,
			border,
			unfold,
		} = props.options;
		
		let returnClassName = "";
		
		if (isBold) returnClassName += returnClassName == "" ? "fontBold" : " fontBold";
		if (isItalic) returnClassName += returnClassName == "" ? "fontItalic" : " fontItalic";
		if (isUnderLine) returnClassName += returnClassName == "" ? "fontUnderLine" : " fontUnderLine";
		if (isThrough) returnClassName += returnClassName == "" ? "fontThrough" : " fontThrough";
		if (fontSize) returnClassName += returnClassName == "" ? "font"+fontSize : " font"+fontSize;
		if (align) returnClassName += returnClassName == "" ? "font"+align : " font"+align;
		
		if (border) returnClassName += returnClassName == "" ? "box"+border : " box"+border;
		if (unfold) returnClassName += returnClassName == "" ? "box"+unfold : " box"+unfold;
		if (isGrid) returnClassName += returnClassName == "" ? "boxGrid" : " boxGrid";
		
		return returnClassName;
	}
	
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
					<CardHeader title={title} />
					{form.sort((a:any, b:any)=>a.order-b.order).map((dat:any, idx:number) => {
						const length = dat.items.length;
						
						return (
							<Box key={idx}>
								<Grid container>
									{dat.items.map((da:any, id:number) => {
										return (
											<Grid key={id} item xs={12 / length} className={`${setClassName(da)} ${dat.items.length > 1 ? id ? "el-right" : "el-left" : ""}`}>
												{ createElements(da) }
											</Grid>
										);
									})}
								</Grid>
							</Box>
						);
					})}
					<CardActions>
						<Button size="small">등록하기</Button>
					</CardActions>
				</Card>
			</Container>
		</ThemeProvider>
	) : <></>;
}

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ res, req, params }) => {
// 	if (!params) return { props: {} };
//
// 	const { id } = params;
//
// 	try {
// 		store.dispatch(getPostAction.request(id));
// 		store.dispatch(END);
// 		await (store as SagaStore).sagaTask?.toPromise();
// 	} catch (e) {
// 		// console.log(e);
// 	}
//
// 	return {
// 		props: {},
// 	};
// });

export default Forms;