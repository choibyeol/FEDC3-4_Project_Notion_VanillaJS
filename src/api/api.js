import { API_END_POINT } from "../../config.js";

export const request = async (url, options = {}) => {
	try {
		const res = await fetch(`${API_END_POINT}${url}`, {
			...options,
			headers: {
				"Content-Type": "application/json",
				"x-username": "roto",
			},
		});
		if (res.ok) {
			return await res.json();
		}
		throw new Error("API 호출 실패!!!!!!!");
	} catch (error) {
		alert(error);
	}
};
