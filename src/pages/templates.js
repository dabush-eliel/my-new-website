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
            Notions Templates:

            <ul>
                <li>
                    <ul>
                        <li>
                            <b>Career Hub</b>
                        </li>
                        <li>
                            Interviews
                        </li>
                        <li>
                            Laptop setup
                        </li>
                        <li>
                            Library - resources, courses, blogs, newsletters
                        </li>
                        <li>
                            Skills / Learning - topics, tools, patterns
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <b>Project Management</b>
                        </li>
                        <li>
                            Tech design
                        </li>
                        <li>
                            Epics / Tasks list
                        </li>
                        <li>
                            Timelines / priorities
                        </li>
                        <li>
                            Communications & Automations
                        </li>
                    </ul>
                </li>
            </ul>
        </Layout>
    );
}

export default TestPage;
