export function isValidCard(number) {
  const str = String(number).replace(/\s/g, "");
  return /^\d{13,16}$/.test(str);
}

export function formatTotal(cents) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(cents / 100);
}

export function createCharge(cardNumber, cents) {
  if (!isValidCard(cardNumber)) throw new Error("invalid card");
  return { id: "chg_" + cents, amount: cents, status: "succeeded" };
}
export const currency = "INR";
