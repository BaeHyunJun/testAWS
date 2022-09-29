import React from "react";
import { NextPage } from "next";

import Text from "@components/elements/Text"
import { Box, FormControl, FormLabel, Grid, InputAdornment, RadioGroup, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Sex from "@components/elementGroup/Sex";
import { eAddress, eBirthDay, eMail, eName, ePhone } from "@config/const";
import Selector from "@components/elements/Selector";

type ItemProps = {
	props: any,
	
	actionRemove?:() => void;
};

const sampleAgree = [
	"1. 개인정보를 제공받는 기관 : 연제구정신건강복지센터, 연제청년창업나래센터, 연제사회적경제지원센터",
	"2. 개인정보 수집 및 이용목적 : 상담 신청접수 및 예약 문자 발송",
	"3. 제공하는 개인정보 항목 : 성명, 성별, 생년월일, 주소, 전화번호, 상담 신청사항",
	"4. 개인정보 보유 및 이용기간 : 수집이용 동의 일로부터 2022년 12월 사업 종료 시까지",
	"5. 본 개인정보는 위의 명시된 목적 이외의 다른 목적으로는 사용되지 않습니다.",
	"6. 위와 같은 개인정보 제공 내용은 동의하지 않을 수 있으며, 동의하지 않을 경우에는 마음건강 상담 서비스 제공이 불가능합니다.",
];

const radioBox = [
	{
		id: 1,
		order: 1,
		label: "동의",
		value: true
	},
	{
		id: 2,
		order: 2,
		label: "비동의",
		value: false
	}
]

const Person: NextPage<ItemProps> = ( {props, actionRemove}) => {
	const { label, placeholder, endText } = props;
	
	return (
		<FormControl
			className={`elements eg-Person`}
			sx={{
				px: 4,
				py: 1,
				width: "100%",
				".noPadding &": {
					py: 0,
				},
				"& .box": {
					textAlign: "center",
					border: "1px solid gray",
				},
				"& .box .MuiFormLabel-root": {
					py: 1,
					textAlign: "center",
					display: "inherit",
				},
				"& .box .e-Text": {
					px: 0,
				},
				"& .box .e-Text:last-child": {
					pb: 0,
				},
				"& .box .removeBtn": {
					position: "absolute",
					top: "10px",
					right: "10px",
					cursor: "pointer",
				},
				".border & .MuiInput-root": {
					border: "none",
				},
				".border & .MuiGrid-root.MuiGrid-container:first-of-type": {
					borderTop: "1px solid gray",
				},
				".border & .el-right": {
					borderLeft: "1px solid gray"
				},
				"& .titleInput input": {
					textAlign: "center",
				},
				"& .agreeText": {
					m: 0,
					px: 4,
					textAlign: "left",
				},
				"& .agreeText *": {
					listStyle: "none",
					fontSize: "15px",
				},
				"& .agreeCheck.MuiFormGroup-root": {
					justifyContent: "center",
				}
			}}
		>
			<Box
				className={`box`}
			>
				<FormLabel>
					<Typography variant={"body1"}>
						{/*<TextField*/}
						{/*	className={`titleInput`}*/}
						{/*	variant={ "standard" }*/}
						{/*	value={ label }*/}
						{/*/>*/}
						{ label }
					</Typography>
				</FormLabel>
				
				<Grid container>
					<Grid item xs={12}>
						<ul className={`agreeText`}>
							{ sampleAgree.map((dat:string, idx: number) => <li key={idx}>{dat}</li>) }
						</ul>
					</Grid>
					<Grid item xs={12}>
						<RadioGroup row className={`agreeCheck`}>
						{radioBox.map((dat:any, idx:number) =>
							<Selector key={idx} props={ dat } />
						)}
						</RadioGroup>
					</Grid>
				</Grid>
			</Box>
		</FormControl>
	);
};

export default Person;
