
export const getUserInfo = async (userId) => {
  let userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  userData = await userData.json();
  return userData;
}