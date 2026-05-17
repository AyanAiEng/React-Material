import Me from "./me"
import Experience from "./Experience"

function About() {
    return (
        <div>
            <h1>This is the about page</h1>
            <Me info = {{name:"Ahmed",Experience:"3+"}}></Me>
            <Experience></Experience>
        </div>
    )
}

export default About