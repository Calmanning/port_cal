import React from 'react'


export function Card({ work }) {
    return (
        <div>
         <div className="card">
                   <img alt={work.name} src={work.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{work.name}</strong> 
          </li>
          <li>
            <strong>Site:</strong> {work.site}
          </li>
          <li>
            <strong><a href={work.repo} target="_blank">GitHub Repo</a></strong>
          </li>
        </ul>
      </div>     
      </div>
    )
}