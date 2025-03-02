import React from "react";

function Home()
{
    return(
        <div>
            <section id="home" className="section">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my work and learn more about me.</p>
            </section>

            <section id="about" className="section">
                <h1>About Me</h1>
                <p>I am a passionate web developer with experience in building dynamic websites.</p>
            </section>

            <section id="projects" className="section">
                <h1>My Projects</h1>
                <p>Here are some of the projects I've worked on:</p>
                {/* Add project details */}
            </section>

            <section id="contact" className="section">
                <h1>Contact Me</h1>
                <p>If you want to get in touch, feel free to reach out!</p>
                {/* Add contact form or details */}
            </section>
        </div>
    )
}

export default Home