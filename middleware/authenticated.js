import jwt_decode from "jwt-decode";

export default function({ store, redirect }) {
  if (!store.state.auth) {
    return redirect("/login");
  } else {
    const decodedToken = jwt_decode(store.state.auth.accessToken);
    const exp = decodedToken.exp;

    if (exp - Date.now() / 1000 <= 0) {
      return redirect("/login");
    }
  }
}
