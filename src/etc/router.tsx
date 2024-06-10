import RootLayout from "@layouts/RootLayout";
import HomePage from "@pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            }
        ]
    }
]);

export default router;