import { NextPage } from "next";
import { Box, Card, CardHeader, Container, CssBaseline, Grid } from "@mui/material";
import React, { Fragment } from "react";
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

const title = "테스트용";
const testObject = [
	{
		id: 9,
		order: 1,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 9,
		order: 1,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 9,
		order: 1,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 9,
		order: 1,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 9,
		order: 1,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 12,
		order: 2,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			},
			{
				id: 5,
				type: "Email",
				label: "이메일",
				element: "Text",
				placeholder: "moacube@gmail.com",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 11,
		order: 2,
		items: [
			{
				id: 1,
				type: "Name",
				label: "이름",
				element: "Text",
				placeholder: "김모아",
				chosen: false,
				selected: false
			},
			{
				id: 3,
				type: "Address",
				label: "주소",
				element: "Text",
				placeholder: "부산광역시 연제구 법원남로 9번길 17",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 13,
		order: 4,
		items: [
			{
				id: 7,
				type: "Space",
				label: "여백",
				element: "Space",
				value: "157",
				chosen: false,
				selected: false
			}
		],
		selected: false,
		chosen: false
	},
	{
		id: 14,
		order: 5,
		items: [
			{
				id: 12,
				type: "Person",
				label: "인적사항",
				element: "Person",
				chosen: false,
				selected: false
			}
		],
		chosen: false,
		selected: false
	}
]

const Forms: NextPage = () => {
	
	const createElements = (props: elementItem) => {
		const { element } = props;
		
		switch (element) {
			case "Text":
				return <Text props={ props } />;
			case "Sex":
				return <Sex props={ props } />;
			case "Notice":
				return <Notice props={ props } />;
			case "Space":
				return <Space props={ props } />;
			case "Date":
				return <Date props={ props }  />;
			case "Account":
				return <Account props={ props } />;
			case "Person":
				return <Person props={ props }  />;
			case "Education":
				return <Education props={ props }  />;
			case "Career":
				return <Career props={ props }  />;
			case "License":
				return <License props={ props }  />;
			default:
				return "";
		}
	}

	return (
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
					}}
				>
					<CardHeader title={title} />
			{testObject.sort((a,b)=>a.order-b.order).map((dat:any, idx:number) => {
				const length = dat.items.length;
				
				return (
					<Box key={idx}>
						<Grid container>
							{dat.items.map((da:any, id:number) => {
								return (
									<Grid key={id} item xs={12 / length} className={dat.items.length > 1 ? id ? "el-right" : "el-left" : ""}>
										{ createElements(da) }
									</Grid>
								);
							})}
						</Grid>
					</Box>
				);
			})}
				</Card>
			</Container>
		</ThemeProvider>
	)
}

export default Forms;