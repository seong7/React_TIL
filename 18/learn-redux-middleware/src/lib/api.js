import axios from "axios";

// # 포스트 읽기(:id는 1~100 사이 숫자)
export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
/*   response 형태 : 
   {
    body: "et iusto sed quo iure↵voluptatem occaecati omnis eligendi aut ad↵voluptatem doloribus vel accusantium quis pariatur↵molestiae porro eius odio et labore et velit aut"
    id: 3
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
    userId: 1
   } 
*/

// # 모든 사용자 정보 불러오기
export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
/*   response 형태 : 
   [
    {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …},
    {id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: {…}, …},
    {id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: {…}, …},
    {id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: {…}, …},
    {id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: {…}, …},
    {id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: {…}, …},
    {id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: {…}, …},
    {id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: {…}, …},
    {id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: {…}, …},
    {id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: {…}, …},
   ]
*/

// API 값 테스트하기 (아래 함수 복사해서 브라우저에서 사용)
/*
const apiTest = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res));
};
*/
