import React, { useEffect } from "react";
import Layout from "../components/layout";
import Button from "../components/button";

function TestPage() {
    const setEmail = () =>{
        // get email query param 
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        const email = params.email || 'eliel@oribi.io';
        if (email && window.ORIBI) {
            window.ORIBI?.setUserEmail?.(email);
            console.log(`set email: ${email}`);
        } else {
            console.log("window.ORIBI not found");
        }
    };

    return (
        <Layout>
            <Button onClick={setEmail}>SET EMAIL</Button>
            <a href="">Read the blog</a>
        </Layout>
    );
}

export default TestPage;
