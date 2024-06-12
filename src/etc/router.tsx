import RootLayout from "@layouts/RootLayout";
import AboutPage from "@pages/AboutPage";
import DashboardPage from "@pages/DashboardPage";
import HomePage from "@pages/HomePage";
import NumerologyManagementPage from "@pages/NumerologyManagementPage";
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
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "admin",
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage/>
                    },
                    {
                        path: "numerology",
                        element: <NumerologyManagementPage/>
                    }
                ]
            }
        ]
    }
]);

export default router;