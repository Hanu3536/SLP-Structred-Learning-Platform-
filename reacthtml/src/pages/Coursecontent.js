import { useSearchParams, useLocation } from "react-router-dom";
import React from "react";
import ReactPlayer from 'react-player';


function Coursecontent() {
    const location = useLocation();
    const course = location.state;
    console.log("content is "+JSON.stringify(course));

    return (
        <body>
            <div className="container">
                <h2>{course.name}</h2>
            </div>
            <div className="video-container">
                <ReactPlayer controls="true" url={course.videoUrl} />
            </div>
        </body>
    )
}

export default Coursecontent;

