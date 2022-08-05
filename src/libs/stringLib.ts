export const testEmail = (email: string): boolean => /^[A-Za-z0-9.-_]+@+[A-Za-z0-9.-]+\.+[A-Za-z]{2,4}$/.test(email);
export const testPassword = (password: string): boolean => password.length >= 8;
export const validationInput = (email: string, password: string): boolean => testEmail(email) && testPassword(password);

export const timeSimplify = (time: string): string => {
  const localDate = new Date(time);
  return localDate.toLocaleString();
};
