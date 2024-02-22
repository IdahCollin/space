// Import the 'Route' component from the 'react-router-dom' library.
import { Route } from "react-router-dom";
// Import various page components used as route elements.
import { Home } from "../pages/Home";
import { About } from "../pages/About";

// Define the 'routes' variable as a JSX expression.
const routes = (
    <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </>
);

// Export the 'routes' variable as the default export of this module.
export default routes;