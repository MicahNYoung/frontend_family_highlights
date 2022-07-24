// import { useState } from "react";

// export function ErrorMessage({ errors }) {
//   console.log(errors);
//   const [errorMessages, setErrorMessages] = useState([]);

//   for (let error in errors) {
//     if (errors[error] !== 0 && !errorMessages.includes(errors[error])) {
//       errorMessages.push(errors[error]);
//     }
//   }
//   let errorMessageElements = errorMessages.map((message) => {
//     return <h4>{message}</h4>;
//   });
//   console.log(errorMessages);
//   return <div>{errorMessageElements}</div>;
// }
