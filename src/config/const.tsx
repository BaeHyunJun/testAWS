import { createTheme } from "@mui/material/styles";

interface defaultObject {
	[index: string]: any,
}

interface defaultString {
	[index: string]: string,
	label: string,
	link: string,
}


export const YDR_THEME = createTheme({
	palette: {
		// maxWidth: {
		//   default: "none",
		// },
		background: {
			default: "#f0f2f5",
		},
	},
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
		link: "/"
	},
	case : {
		label: "이용사례",
		link: "/"
	},
	partner : {
		label: "파트너사",
		link: "/partners"
	},
	store : {
		label: "스토어",
		link: "/"
	}
};

export const SITE_TYPO = {
	FORM_LOGIN: {
		label: {
			email: "E-mail",
			password: "Password",
		},
		required: {
			err_email: "이메일을 확인해주세요.",
			err_password: "비밀번호를 확인해주세요.",
			chk_password: "비밀번호가 다릅니다. 다시입력해주세요.",
		},
		placeholder: {
			email: "이메일을 입력해주세요.",
			password: "비밀번호를 입력해주세요.",
			chk_password: "비밀번호를 한번 더 입력해주세요.",
		},
		button: {
			login: "로그인",
			signup: "회원가입",
		},
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
