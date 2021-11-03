import React from "react"
import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name:"Unform 2",
    description:"description" ,
    link:"https://github.com/jonathancsr/recuperacao-da-informacao",
}


export function RepositoryList(){
    return (
        <section className='repository-list'>
            <h1>Repository list</h1>
            <ul>
               <RepositoryItem 
                    repository={repository}
                />
               <RepositoryItem/>
               <RepositoryItem/>
               <RepositoryItem/>
            </ul>
        </section>
    )
}