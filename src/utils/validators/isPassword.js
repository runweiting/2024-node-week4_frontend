export default function isPassword(value) {
  if (!value) {
    return "password為必填";
  }
  if (value.length < 8) {
    return "password需至少8碼";
  }
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  if (!hasLetter) {
    return "password需至少一個英文字母";
  }
  if (!hasNumber) {
    return "password需至少一個數字";
  }
  return true;
}
