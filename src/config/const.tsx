import { createTheme } from "@mui/material/styles";
import { Author, Id } from "@components/test/types";
import { ActionType } from "typesafe-actions";
import * as post from "@actions/post";

export enum API {
	// DOMAIN="http://1.234.5.16:8585/",
	// DOMAIN = "http://211.37.179.192:8585/",
	// DOMAIN = "http://localhost:8585/",
	DOMAIN = "https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/",
	VERSION = "v1",
	FORM = "form",
	// LOGIN = "/user/login",
	// LOGOUT = "/user/logout",
	// CHECKLOGIN = "/user/islogin",
	// FILTER = "/post/filter/",
	// SEARCH = "/auction/search/",
	// PRODUCT = "/auction/",
	// KAKAO_API_KEY = "38606d651a3071f9595b916641be1988",
	// // KAKAO_API_KEY="df5c0cdd518cfe4c738ea669381c19ef",
}

interface defaultObject {
	[index: string]: any,
}

interface defaultString {
	[index: string]: string,
	label: string,
	link: string,
}

export type defaultOptions = {
	isBold?: boolean,
	isItalic?: boolean,
	isUnderLine?: boolean,
	isThrough?: boolean,
	isGrid?: boolean,
	fontSize?: number,
	align?: string,
	
	border?: string,
	unfold?: string,
}

export type elementItem = {
	id: number;
	type: string;
	label: string;
	element: string;
	className?: string;
	isLabel?: boolean;
	order?: number;
	placeholder?: string;
	value?: any;
	children?: any;
	size?: string;
	options: defaultOptions
}

export type elementLine = {
	id: number;
	order?: number;
	items: elementItem[];
}

export const elText: elementItem = {
	id: 0,
	type: "Text",
	label: "텍스트",
	element: "TextBox",
	placeholder: "내용을 입력해주세요.",
	isLabel: false,
	options: {
		isBold: false,
		isItalic: false,
		isUnderLine: false,
		isThrough: false,
		isGrid: true,
		fontSize: 14,
		align: "Left",
		
		border: "All",
		unfold: "More",
	}
};

export const elInput: elementItem = {
	id: 1,
	type: "Input",
	label: "입력박스",
	element: "InputBox",
	placeholder: "내용을 입력해주세요.",
	isLabel: true,
	options: {
		isBold: false,
		isItalic: false,
		isUnderLine: false,
		isThrough: false,
		isGrid: true,
		fontSize: 14,
		align: "Left",
		
		border: "All",
		unfold: "More",
	}
};

export const eTitle: elementItem = {
	id: 0,
	type: "Title",
	label: "제목",
	element: "TextBox",
	placeholder: "제목을 입력해주세요.",
	isLabel: false,
	className: "title",
	size: "full",
	options: {},
};

export const eName: elementItem = {
	id: 1,
	type: "Name",
	label: "이름",
	element: "Text",
	placeholder: "김모아",
	isLabel: true,
	options: {},
};

export const eBirthDay: elementItem = {
	id: 2,
	type: "BirthDay",
	label: "생년월일",
	element: "Text",
	placeholder: "1982.08.02",
	isLabel: true,
	options: {},
};

export const eAddress: elementItem = {
	id: 3,
	type: "Address",
	label: "주소",
	element: "Text",
	placeholder: "부산광역시 연제구 법원남로 9번길 17",
	size: "full",
	isLabel: true,
	options: {},
};

export const ePhone: elementItem = {
	id: 4,
	type: "Phone",
	label: "연락처",
	element: "Text",
	placeholder: "010-1234-5678",
	isLabel: true,
	options: {},
};

export const eMail: elementItem = {
	id: 5,
	type: "Email",
	label: "이메일",
	element: "Text",
	placeholder: "moacube@gmail.com",
	isLabel: true,
	options: {},
};

export const eSex: elementItem = {
	id: 6,
	type: "Sex",
	label: "성별",
	element: "Sex",
	value: "male",
	isLabel: true,
	options: {},
	children: [
		{
			id: 1,
			order: 1,
			label: "남자",
			value: "male"
		},
		{
			id: 2,
			order: 2,
			label: "여자",
			value: "female"
		}
	]
}

export const eSpace: elementItem = {
	id: 7,
	type: "Space",
	label: "여백",
	element: "Space",
	value: "30",
	size: "full",
	options: {
		isBold: false,
		isItalic: false,
		isUnderLine: false,
		isThrough: false,
		isGrid: true,
		fontSize: 14,
		align: "Left",
		
		border: "All",
		unfold: "More",
	}
}

export const eNotice: elementItem = {
	id: 8,
	type: "Notice",
	label: "안내글",
	element: "Text",
	isLabel: false,
	className: "notice",
	size: "full",
	options: {},
	// placeholder: ""
}

export const eAgree: elementItem = {
	id: 9,
	type: "Agree",
	label: "약관",
	element: "Agree",
	size: "full",
	options: {},
}

export const eDate: elementItem = {
	id: 10,
	type: "Date",
	label: "날짜",
	element: "Text",
	options: {},
}

export const eTime: elementItem = {
	id: 16,
	type: "Date",
	label: "시간",
	element: "Text",
	options: {},
}

export const eAccount: elementItem = {
	id: 11,
	type: "Account",
	label: "계좌이체",
	element: "Account",
	size: "full",
	options: {},
}

export const ePerson: elementItem = {
	id: 12,
	type: "Person",
	label: "인적사항",
	element: "Person",
	size: "full",
	options: {},
}

export const eEducation: elementItem = {
	id: 13,
	type: "Education",
	label: "학력사항",
	element: "Education",
	size: "full",
	options: {},
}

export const eCareer: elementItem = {
	id: 14,
	type: "Career",
	label: "경력사항",
	element: "Career",
	size: "full",
	options: {},
}

export const eLicense: elementItem = {
	id: 15,
	type: "License",
	label: "자격사항",
	element: "License",
	size: "full",
	options: {},
}

export const elementsGroup: elementItem[] = [
	elText,
	elInput,
	// eTitle,
	// eName,
	// eBirthDay,
	// eAddress,
	// ePhone,
	// eMail,
	// eSex,
	eSpace,
	// eNotice,
	eAgree,
	// eDate,
	// eTime,
	// eAccount,
	// ePerson,
	// eEducation,
	// eCareer,
	// eLicense,
]

export type postAction = ActionType<typeof post>;

export const sampleList: elementLine[] = [
	{
		id: 1,
		order: 1,
		items: [
			{
				id: 1,
				order: 1,
				type: "Text",
				label: "텍스트",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "TextBox",
				value: "찾아가는 청년 마음건강상담 신청서",
				options: {
					isBold: true,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 20,
					align: "Center",
					
					border: "Clear",
					unfold: "More",
				}
			// },
			// {
			// 	id: 2,
			// 	order: 2,
			// 	type: "Text",
			// 	label: "텍스트",
			// 	isLabel: false,
			// 	placeholder: "내용을 입력해주세요.",
			// 	element: "TextBox",
			// 	value: "찾아가는 청년",
			// 	options: {
			// 		isBold: false,
			// 		isItalic: true,
			// 		isUnderLine: true,
			// 		isThrough: false,
			// 		fontSize: 16,
			// 		align: "Right",
			//
			// 		border: "All",
			// 		unfold: "More",
			// 	}
			}
		]
	},
	{
		id: 2,
		order: 2,
		items: [
			{
				id: 2,
				order: 1,
				type: "Text",
				label: "텍스트",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "TextBox",
				value: "신청자 인적사항",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 16,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 3,
		order: 3,
		items: [
			{
				id: 3,
				order: 1,
				type: "Input",
				label: "이름",
				isLabel: true,
				placeholder: "이름을 입력해주세요.",
				element: "InputBox",
				// value: "이름",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			},
			{
				id: 4,
				order: 2,
				type: "Input",
				label: "생년월일",
				isLabel: true,
				placeholder: "생년월일을 입력해주세요.",
				element: "InputBox",
				// value: "생년월일",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 4,
		order: 4,
		items: [
			{
				id: 5,
				order: 1,
				type: "Input",
				label: "전화번호",
				isLabel: true,
				placeholder: "전화번호를 입력해주세요.",
				element: "InputBox",
				// value: "전화번호",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			},
			{
				id: 6,
				order: 2,
				type: "Input",
				label: "성별",
				isLabel: true,
				placeholder: "성별을 입력해주세요.",
				element: "InputBox",
				// value: "성별",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 5,
		order: 5,
		items: [
			{
				id: 7,
				order: 1,
				type: "Input",
				label: "주소",
				isLabel: true,
				placeholder: "주소를 입력해주세요.",
				element: "InputBox",
				// value: "전화번호",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 6,
		order: 6,
		items: [
			{
				id: 8,
				order: 1,
				type: "Text",
				label: "텍스트",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "TextBox",
				value: "마음건강상담 대상 : 만 18세 ~ 만 34세 청년",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "Less",
				}
			}
		]
	},
	{
		id: 7,
		order: 7,
		items: [
			{
				id: 9,
				order: 1,
				type: "Space",
				label: "여백",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "Space",
				value: 30,
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "Less",
				}
			}
		]
	},
	{
		id: 8,
		order: 12,
		items: [
			{
				id: 10,
				order: 1,
				type: "Agree",
				label: "약관",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "Agree",
				// value: 30,
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "Less",
				}
			}
		]
	},
	{
		id: 9,
		order: 8,
		items: [
			{
				id: 11,
				order: 1,
				type: "Text",
				label: "텍스트",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "TextBox",
				value: "상담 신청사항",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 16,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 10,
		order: 9,
		items: [
			{
				id: 12,
				order: 2,
				type: "Input",
				label: "요청 시간",
				isLabel: true,
				placeholder: "시간을 입력해주세요.",
				element: "InputBox",
				// value: "이름",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			},
			{
				id: 13,
				order: 1,
				type: "Input",
				label: "요청 날짜",
				isLabel: true,
				placeholder: "날짜를 입력해주세요.",
				element: "InputBox",
				// value: "생년월일",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 11,
		order: 10,
		items: [
			{
				id: 14,
				order: 1,
				type: "Text",
				label: "텍스트",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "TextBox",
				value: "연제청년창업지원센터 인포메이션에서 상담 일정 확인 필수 (선착순 마감)",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "Less",
				}
			}
		]
	},
	{
		id: 12,
		order: 11,
		items: [
			{
				id: 15,
				order: 1,
				type: "Space",
				label: "여백",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "Space",
				value: 30,
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "Less",
				}
			}
		]
	},
	{
		id: 13,
		order: 14,
		items: [
			{
				id: 16,
				order: 1,
				type: "Input",
				label: "신청 날짜",
				isLabel: true,
				placeholder: "날짜를 입력해주세요.",
				element: "InputBox",
				// value: "전화번호",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 14,
		order: 15,
		items: [
			{
				id: 17,
				order: 1,
				type: "Input",
				label: "신청인",
				isLabel: true,
				placeholder: "이름을 입력해주세요.",
				element: "InputBox",
				// value: "전화번호",
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "More",
				}
			}
		]
	},
	{
		id: 15,
		order: 13,
		items: [
			{
				id: 18,
				order: 1,
				type: "Space",
				label: "여백",
				isLabel: false,
				placeholder: "내용을 입력해주세요.",
				element: "Space",
				value: 110,
				options: {
					isBold: false,
					isItalic: false,
					isUnderLine: false,
					isThrough: false,
					isGrid: true,
					fontSize: 14,
					align: "Center",
					border: "All",
					unfold: "Less",
				}
			}
		]
	},
	// {
	// 	id: 3,
	// 	order: 3,
	// 	items: [
	// 		{
	// 			id: 1,
	// 			order: 1,
	// 			type: "Address",
	// 			label: "주소",
	// 			placeholder: "부산광역시 연제구 법원남로 9번길 17",
	// 			element: "Text",
	// 		}
	// 	]
	// },
	// {
	// 	id: 4,
	// 	order: 5,
	// 	items: [
	// 		{
	// 			id: 1,
	// 			order: 1,
	// 			type: "Email",
	// 			label: "이메일",
	// 			placeholder: "moacube@gmail.com",
	// 			element: "Text",
	// 		}
	// 	]
	// },
	// {
	// 	id: 5,
	// 	order: 4,
	// 	items: [
	// 		{
	// 			id: 1,
	// 			order: 1,
	// 			type: "Address",
	// 			label: "주소",
	// 			placeholder: "부산광역시 연제구 법원남로 9번길 17",
	// 			element: "Text",
	// 		}
	// 	]
	// }
]

export type moaElements = {
	id: number,
	label: string,
	el: string,
	placeholder?: string,
	isRemove?: boolean,
};

export type moaLine = {
	id: number,
	elGroup: moaElements[],
}

export const elementList: moaElements[] = [
	{
		id: 1,
		label: "통장",
		el: "TextField",
	},
	{
		id: 2,
		label: "프로필 사진",
		el: "TextField",
	},
	{
		id: 3,
		label: "경력",
		el: "TextField",
	},
	{
		id: 4,
		label: "텍스트",
		el: "TextField",
	},
	{
		id: 5,
		label: "테두리 없음",
		el: "TextField",
	},
	{
		id: 6,
		label: "체크 박스",
		el: "Sex",
		// placeholder: "1982.08.02",
	}
]

export const interestElementList: moaElements[] = [
	{
		id: 1,
		label: "이름",
		el: "TextField",
		placeholder: "김모아",
	},
	{
		id: 2,
		label: "생년월일",
		el: "TextField",
		placeholder: "1982.08.02",
	},
	{
		id: 3,
		label: "주소",
		el: "TextField",
		placeholder: "부산광역시 연제구 법원남로 9번길 17",
	},
	{
		id: 4,
		label: "연락처",
		el: "TextField",
		placeholder: "010-1234-5678",
	},
	{
		id: 5,
		label: "이메일",
		el: "TextField",
		placeholder: "moacube@gmail.com",
	},
	{
		id: 6,
		label: "성별",
		el: "Sex",
		// placeholder: "1982.08.02",
	}
]

export const testForm:moaLine[] = [
	{
		id: 1,
		elGroup: [
			{
				id: 1,
				label: "이름",
				el: "TextField",
				placeholder: "김모아",
				isRemove: false,
			}
		]
	},
	// {
	// 	id: 2,
	// 	elGroup: [
	// 		{
	// 			id: 1,
	// 			label: "연락처",
	// 			el: "TextField",
	// 			placeholder: "010-1234-5678",
	// 			isRemove: false,
	// 		},
	// 		{
	// 			id: 2,
	// 			label: "생년월일",
	// 			el: "TextField",
	// 			placeholder: "1982.08.02",
	// 			isRemove: false,
	// 		}
	// 	]
	// },
	// {
	// 	id: 3,
	// 	elGroup: [
	// 		{
	// 			id: 1,
	// 			label: "이메일",
	// 			el: "TextField",
	// 			placeholder: "moacube@gmail.com",
	// 			isRemove: false,
	// 		}
	// 	]
	// },
	// {
	// 	id: 4,
	// 	elGroup: [
	// 		{
	// 			id: 1,
	// 			label: "주소",
	// 			el: "TextField",
	// 			placeholder: "부산광역시 연제구 법원남로 9번길 17",
	// 			isRemove: false,
	// 		}
	// 	]
	// }
]


export const YDR_THEME = createTheme({
	palette: {
		// maxWidth: {
		//   default: "none",
		// },
		// display: {
		// 	default: "flex" ,
		// },
		background: {
			default: "#f0f2f5",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					minWidth: "auto",
					// width: "100%",
					// height: "100%",
					// display: "flex",
					// justifyContent: "center",
					// alignItems: "center",
				}
			}
		}
	}
	// components: {
	//   MuiContainer: {
	//     styleOverrides: {
	//       root: {
	//         maxWidth: "none",
	//       },
	//     },
	//   },
	// },
});

export const SITE_NAME = "모아큐브";
export const SITE_DESCIPTION = "";

export const SITE_URL = {
	home: {
		login: "/",
	},
	admin: {
		dashboard: "/admin",
		profile: "/admin/profile",
	},
};

export const SITE_MESSAGE = {};

export const SITE_MENU:defaultObject = {
	register : {
		label: "등록하기",
		link: "/register"
	},
	case : {
		label: "이용사례",
		link: "/case"
	},
	partner : {
		label: "파트너사",
		link: "/partners"
	},
	store : {
		label: "스토어",
		link: "/store"
	}
};

export const SITE_TYPO = {
	FORM_AUTH: {
		label: {
			signin: "로그인",
			signup: "회원가입",
			email: "E-mail",
			password: "Password",
			agree1: "이용약관 동의",
			agree2: "개인정보처리방침 동의",
			signupBtn: "가입하기",
			checkCountPassword: "(8자리 이상)",
			findEmail: "가입된 이메일 찾기",
			findPassword: "비밀번호 찾기",
		},
		required: {
			err_email: "이메일을 확인해주세요.",
			err_password: "비밀번호를 확인해주세요.",
			chk_password: "비밀번호가 다릅니다. 다시입력해주세요.",
		},
		placeholder: {
			email: "이메일 주소를 입력해주세요.",
			password: "비밀번호를 입력해주세요.",
			chk_password: "비밀번호를 한번 더 입력해주세요.",
		},
		// button: {
		// 	login: "로그인",
		// 	signup: "회원가입",
		// },
	},
	FORM_COMPANY: {
		label: {
			logo: "회사 로고",
			c_name: "회사명",
			c_reg_number: "사업자등록번호",
			ceo: "대표자 명",
			website: "홈페이지",
			tel: "대표 전화번호",
			fax: "대표 팩스번호",
			address: "사업장 주소",
			b_name: "법인명",
			b_reg_number: "법인등록번호",
			reg_file: "사업자 등록증",
			reg_file_tour: "여행 사업자 등록증",
		},
		required: {
			c_name: "회사명은 필수 입력입니다.",
			c_reg_number: "사업자등록번호는 필수 입력입니다.",
			ceo: "대표자 명은 필수 입력입니다.",
			tel: "대표 전화번호는 필수 입력입니다.",
			fax: "대표 팩스번호는 필수 입력입니다.",
			address: "사업장 주소는 필수 입력입력입니다.",
		},
		placeholder: {
			c_name: "회사명을 입력해주세요.",
			c_reg_number: "사업자등록번호를 입력해주세요.",
			ceo: "대표자 명을 입력해주세요.",
			website: "홈페이지를 입력해주세요.",
			tel: "대표 전화번호를 입력해주세요.",
			fax: "대표 팩스번호를 입력해주세요.",
			address: "사업장 주소를 입력해주세요.",
			b_name: "법인명을 입력해주세요.",
			b_reg_number: "법인등록번호를 입력해주세요.",
		},
		button: {
			submit: "정보 변경",
		},
	},
	FORM_MEMBER: {
		label: {
			photo: "담당자 사진",
			email: "메일 주소",
			name: "이름",
			name_eng: "영문 이름",
			department: "부서",
			position: "직위",
			tel: "전화번호",
			fax: "팩스번호",
			sms_yn: "SMS 수신",
			mail_yn: "메일 수신",
		},
		required: {
			email: "메일 주소는 필수 입력입니다.",
		},
		placeholder: {
			name: "이름을 입력해주세요.",
			name_eng: "영문 이름을 입력해주세요.",
			department: "부서 명을 입력해주세요.",
			position: "직위 명을 입력해주세요.",
			tel: "전화번호를 입력해주세요.",
			fax: "팩스번호를 입력해주세요.",
		},
		button: {
			submit: "정보 변경",
		},
	},
};
