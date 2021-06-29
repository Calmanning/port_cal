import React from 'react'
import "./card.css"


const index = ({ work }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={work.name} src={work.img} />
        <p><strong>{work.name}</strong> </p>
      </div>
      <div className="content">
        <ul>
          <li>
            <p>{work.blurb}.</p>
          </li>
          <li>
            <strong><a href={work.site} target="_blank">Website</a></strong>
          </li>
          {
            work.repo ? <li>
              <strong><a href={work.repo} target="_blank">GitHub Repo</a></strong>
            </li>
              :
              <> </>

          }
        </ul>
      </div>
    </div>
  )
}

export default index