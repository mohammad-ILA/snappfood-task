export function convertEnNumToFa(text: string) {
  const splitNumber = text.toString().split("");
  const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return splitNumber
    .map((num) => (/[0-9]/.test(num) ? persianNumber[Number(num)] : num))
    .join("");
}
