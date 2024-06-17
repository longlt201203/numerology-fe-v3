import RootLayout from "@layouts/RootLayout";
import AboutPage from "@pages/public/AboutPage";
import AuthLoginGoogle from "@pages/auth/AuthLoginGoogle";
import AuthRoute from "@pages/auth/AuthRoute";
import DashboardPage from "@pages/admin/DashboardPage";
import HomePage from "@pages/public/HomePage";
import LoginPage from "@pages/auth/LoginPage";
import NumerologyManagementPage from "@pages/admin/NumerologyManagementPage";
import NumerologyReadingpage from "@pages/public/NumerologyReadingPage";
import NumerologyCalculatingPage from "@pages/public/NumerologyYearCalculatingPage";
import { createBrowserRouter } from "react-router-dom";
import UnauthorizedErrorPage from "@pages/public/UnauthorizedErrorPage";
import NotFoundErrorPage from "@pages/public/NotFoundErrorPage";
import UserDataPage from "@pages/admin/UserDataPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "",
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
                        path: "year-calculating",
                        element: <NumerologyCalculatingPage/>
                    },
                    {
                        path: "about",
                        element: <AboutPage/>
                    },
                ]
            },
            {
                path: "admin",
                element: <AuthRoute/>,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage/>
                    },
                    {
                        path: "numerology",
                        element: <NumerologyManagementPage/>
                    },
                    {
                        path: "user-data",
                        element: <UserDataPage />
                    }
                ]
            },
            {
                path: "auth",
                children: [
                    {
                        path: "login",
                        element: <LoginPage />
                    },
                    {
                        path: "login-google",
                        element: <AuthLoginGoogle />
                    }
                ]
            },
            {
                path: "error",
                children: [
                    {
                        path: "401",
                        element: <UnauthorizedErrorPage/>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFoundErrorPage/>
            }
        ]
    }
]);

export default router;