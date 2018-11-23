import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import React from "react";
// import {Provider} from 'react-redux';

import '@/assets/scss/layout.scss';

ReactDOM.render(<Routes />, document.getElementById("root"));

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/workbox-sw.js")
//     .then(() => {})
//     .catch(err => {
//       console.warn("err", err);
//     });
// }
