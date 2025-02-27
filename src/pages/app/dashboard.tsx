import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function Dashboard() {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const newLocal = document.title = "Dashboard | pizza.shop";
      }, []);
    return (
        <>
            <Helmet title="Dashboard"/>
            <h1>Dashboard</h1>
        </>
    )
}