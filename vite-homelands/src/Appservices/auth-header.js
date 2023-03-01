export default function authHeader(users) {
    const currentToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : ""

/*     console.log(currentToken.state.userinfo.access_token) */

    if (currentToken && currentToken) {
        return {
            authorization: `Bearer ${currentToken.state.userinfo.access_token}`,
        }
    } else {
        return {}
    }
}
