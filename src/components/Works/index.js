import { useState } from 'react'
import { Container } from '../Grid'
import Work from "../Work"


const index = ( {works} ) => {


    return (
            <> 
            
             {works.map((work) => (
                 <Work key={work.id} work={work} />)
                 )}
            </>
    )
}

export default index