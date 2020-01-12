import axios from "axios";

export default () => {
  console.log("hello");

  // axios
  //   .post(
  //     "https://retroflect.herokuapp.com/api/auth/signup",
  //     {
  //       firstName: "yogi",
  //       lastName: "bear",
  //       email: "yogibear@mountain.com",
  //       password: "Bearpassword123!"
  //     },
  //     { withCredentials: true }
  //   )
  //   .then(res => console.log(res.data));
  axios
    .post(
      "https://retroflect.herokuapp.com/api/auth/signin",
      {
        email: "yogibear@mountain.com",
        password: "Bearpassword123!"
      },
      { withCredentials: true }
    )
    .then(res => console.log(res.data))
    .then(
      setTimeout(() => {
        axios
          .get("https://retroflect.herokuapp.com/api/entries", {
            withCredentials: true
          })
          .then(res => console.log(res))
          .catch(e => console.log(e.message));
      }, 2000)
    );

  return <h1>hello</h1>;
};
