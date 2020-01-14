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

  return (
    <>
      <h1>Auth example</h1>
      <ul>
        <li>open dev tools console</li>
        <li>
          the signup api call is commented out above, the db already has this
          user
        </li>
        <li>should see login details in console</li>
        <li>should see entries data in console after 2000ms delay</li>
        <li>response should be 200 OK</li>
        <br />
        <li>
          try changing the sign in details in the code to fake ones, response
          should be 401 - remember to undo changes after.
        </li>
        <li>
          you may see multiple calls being made in repetition - This is clearly
          not the place to be making the api call in react/next.js
        </li>
      </ul>
    </>
  );
};
