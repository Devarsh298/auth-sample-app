import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId:'Iv23lizHw1uVRJRwH0AF',
            clientSecret:'7e2f9689c78682841f81600a659943cb0d6efae0',
        }),
    ],
};

export default NextAuth(authOptions);
