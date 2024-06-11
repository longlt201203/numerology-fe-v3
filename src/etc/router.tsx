import RootLayout from "@layouts/RootLayout";
import HomePage from "@pages/HomePage";
import NumerologyReadingpage from "@pages/NumerologyReadingPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "",
                element: <HomePage/>
            },
            {
                path: "reading",
                element: <NumerologyReadingpage/>
            }
        ]
    }
]);

export default router;