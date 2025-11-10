export function validaCPF(cpf) {
  if (!cpf) return false;
  const str = cpf.replace(/[^\d]/g, "");
  if (str.length !== 11) return false;
  if (/^(\d)\1+$/.test(str)) return false;
  const calc = (t) => {
    let sum = 0;
    for (let i = 0; i < t - 1; i++) sum += parseInt(str.charAt(i)) * (t + 1 - i);
    const d = (sum * 10) % 11;
    return d === 10 ? 0 : d;
  };
  const d1 = calc(10);
  const d2 = calc(11);
  return d1 === parseInt(str.charAt(9)) && d2 === parseInt(str.charAt(10));
}
