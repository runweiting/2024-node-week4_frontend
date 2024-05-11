import axios from "axios";

export default function isUserSignIn() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return !!token;
}
