export default function authHeader(users) {
  const currentToken = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : "";
  if (currentToken && currentToken) {
    return {
      authorization: `Bearer ${currentToken.state.access_token}`,
    };
  } else {
    return {};
  }
}