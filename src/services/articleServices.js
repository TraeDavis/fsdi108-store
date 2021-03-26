var contents = [
  {
    id: 1,
    img: "/images/articles/apple-256261_1920.jpg",
    title: "Health & study",
    headline: "",
    link: "/",
  },
  { 
    id: 2,
    img: "/images/articles/heart-1192662_1920.jpg",
    title: "Go Green",
    headline: "",
    link: "/" },
//   { 
//     id: 3,
//     img: "/images/articles/splashing-165192.jpg",
//     title: "Water Benefits",
//     headline: "",
//     link: "" },
  { 
    id: 4,
    img: "/images/articles/himilayan-blue-poppy-4202825_1920.jpg",
    title: "Tea Recipes",
    headline: "",
    link: "/" },
  { 
    id: 5,
    img: "/images/articles/tempeh-1343291_1920.jpg",
    title: "Healthy Recipes",
    headline: "",
    link: "/" },
];

class ArticleService {
  getArticle() {
    // Logic to connect and retrieve data from a server
    return contents;
  }
}
export default ArticleService;
