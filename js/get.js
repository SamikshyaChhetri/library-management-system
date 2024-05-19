// const myfunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data.title);
// };
const func = async () => {
  const response = await fetch(
    "https://lms.sachetsubedi001.com.np/api/auth/register",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Neha",
        email: "nehakakkar@gmail.com",
        password: "hello",
      }),
    }
  );
  const data = await response.json();
  console.log(data);
};
func();
