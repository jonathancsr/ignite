import React, { useEffect, useState } from "react"
import { RepositoryItem } from "../RepositoryItem"

import './style.scss'

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
            const response = fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    },[]);
    

    return (
        <section className='repository-list'>
            <h1>Repository list</h1>
            <ul>
                {repositories.map((repository,index) => 
                    <RepositoryItem key={index} repository={repository}/>
                )}
            </ul>
        </section>
    )
}