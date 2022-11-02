import React, {useState, useEffect} from "react";
import HomesCard from "./HomesCard"

const homesUrl = "http://localhost:8000/flwHomes"

function HomesContainer () {

    const [homes, setHomes] = useState([])

    useEffect (() => {
        fetch(homesUrl)
        .then(resp => resp.json())
        .then(homeData => setHomes(homeData))
    }, [])

    const renderHomes = homes.map((home) => {
        return(
            <HomesCard home={home}/>
        )
    })


    return (
        <div>
            {renderHomes} this is HomesContainer
        </div>
    )
};

export default HomesContainer;