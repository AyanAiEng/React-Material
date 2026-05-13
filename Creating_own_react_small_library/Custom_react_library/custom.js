/* this is the sasti React library use just to learn things and understand how the things work in recat


this custom_render function is working perfect but it is very messy we can use the loaps instaed 


function custom_render(react_element, main_container) {
    const dom_element = document.createElement
    (react_element.type)
    dom_element.innerHTML = react_element.Children
    dom_element.setAttribute("href", react_element.props.href)
    dom_element.setAttribute("target", react_element.props.target)

    main_container.append(dom_element)
    
    } 
    this is a more better approch we rather then the uppper one
    
    */
const custom_function2 = (recact_element, main_container) => {
    const dom_element2 = document.createElement
        (react_element.type)
    dom_element2.innerHTML = react_element.Children
    for (const prop in react_element.props) {
        if (prop === "children") continue
        dom_element2.setAttribute(prop, react_element.props[prop])
    }
    main_container.appendChild(dom_element2)()
}


const react_element = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Children: "CLick me to visit google"
}

const main_container = document.querySelector("#root")

custom_function2(react_element, main_container)