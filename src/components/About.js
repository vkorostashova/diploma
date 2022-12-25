import React from "react";
import Communication from "./Communication";
import CompanyInformation from "./CompanyInformation";
import './Home.css'
import Location from "./Location";
function About() {
    return <>
        <Location />
        <CompanyInformation />
        <Communication />
    </>
}

export default About;