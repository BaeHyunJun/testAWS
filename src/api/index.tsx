import axios, { AxiosError } from "axios";
import { API, defaultParams } from "@config/const";

export const AxiosInstance = axios.create({
	baseURL: API.DOMAIN + API.VERSION,
	withCredentials: true,
});

export async function addMoaFormUser(userData: any) {
	try {
		const url = "https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form/uuserlist";
		
		const { data } = await axios.post(url, userData);

		return data;
	} catch (e) {
		const error = e as AxiosError;
		// return error;
	}
}

export async function getMoaFormUser(params: defaultParams) {
	try {
		let url = "https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form/uuserlist";
		
		const { id, post, user } = params;

		let paramText = "";

		if (params.id != undefined)    paramText += paramText == "" ? `?id=${id}`      : `&id=${id}`;
		if (params.post != undefined)  paramText += paramText == "" ? `?post=${post}`  : `&post=${post}`;
		if (params.user != undefined)  paramText += paramText == "" ? `?user=${user}`  : `&user=${user}`;

		url += paramText;
		
		const { data } = await axios.get(url);

		return data;
	} catch (e) {
		const error = e as AxiosError;
		// return error;
	}
}

export async function updatePost(postData: any) {
	try {
		// const config = { headers: { "Content-Type": "multipart/form-data" } };
		//
		// const { data } = await AxiosInstance.recruit("", formData, config);
		const url = "https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form";
		
		
		const { data } = await axios.post(url, postData);
		//
		// console.log(url);
		// console.log(data);
		
		return data;
	} catch (e) {
		const error = e as AxiosError;
		// return error;
	}
}

export async function getPost(id?: number) {
	try {
		// const config = { headers: { "Content-Type": "multipart/form-data" } };
		//
		// const { data } = await AxiosInstance.recruit("", formData, config);
		const url = "https://3hyotidvuj.execute-api.ap-northeast-2.amazonaws.com/moacube/v1/form?id=" + id;
		
		const { data } = await axios.get(url);
		
		return data;
	} catch (e) {
		const error = e as AxiosError;
		// return error;
	}
}