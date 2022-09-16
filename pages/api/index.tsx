import axios, { AxiosError } from "axios";
import { API } from "@config/const";

export const AxiosInstance = axios.create({
	baseURL: API.DOMAIN + API.VERSION,
	withCredentials: true,
});

export async function getFormList() {
	const url = API.FORM;
	
	try {
		const { data } = await AxiosInstance.get(url);
		
		console.log(data);
		
		return data;
	} catch (e) {
		const error = e as AxiosError;
		// return error;
	}
}