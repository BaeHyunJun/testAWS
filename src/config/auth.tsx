import { Auth } from "aws-amplify";

export const authCurrentUser = async () => {
	try {
		await Auth.currentAuthenticatedUser();
		
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}

export const authSignin = async (email:string, password:string) => {
	try {
		await Auth.signIn(email, password);
		
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
};

export const authSignOut = async () => {
	try {
		await Auth.signOut();
		
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}