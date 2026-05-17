import React from "react";

function Home(props) {
/*     console.log(props.name)
    console.log(props.age)
    console.log(props) 
    */
   console.log(props.userinfo.name)
    return (
        <>
            <h1>Hello i am home page my name is {props.userinfo.name}</h1>
            <></>
        </>
    )
}

export default Home