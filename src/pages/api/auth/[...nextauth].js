import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId:'Iv23lizHw1uVRJRwH0AF',
            clientSecret:'4ceefddc8d17a776a4aff8084935ba95b2bffea3',
        }),
    ],
};

export default NextAuth(authOptions);
