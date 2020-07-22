import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const OverviewPreviewCard = ({
  edges, axis='overview', axisTitle, truncate, LongReadMoreLinkText, thumbnails
}) => {

  return (
    edges && edges.map(edge => {
      const plant = edge.node;
      const preview = (truncate) ? plant[axis].slice(0, 150) + '...' : plant[axis];
      const readMoreLinkText = LongReadMoreLinkText ? `Read more about ${plant.title}` : 'read more';
      const thumbnail = thumbnails && thumbnails.find(thumbnail => thumbnail.node.childImageSharp.fixed.src.includes(plant.slug))
      
      return (
        <article key={plant.slug} style={{marginBottom: `.75rem`, display:`flex`}}>
          {thumbnail && <Img
            className="plant-thumbnail"
            imgStyle={{borderRadius:`50%`}}
            fixed={thumbnail.node.childImageSharp.fixed}
            title={plant.title}
            alt={plant.title}
          />}
          <div className="plant-overview-info">
            <h2 style={{fontSize:`1rem`, marginTop: `.5rem`, marginBottom: `.25rem`}}>{plant.title}</h2>
            {axisTitle && <h3 style={{fontSize:`1rem`, marginBottom: `.25rem` }}>{axisTitle}</h3>}
            <p style={{marginBottom: `.5rem` }}>{preview} <Link to={`/${plant.slug}/`} title={`Learn more about ${plant.title}`}>{readMoreLinkText}</Link></p>
          </div>
        </article>
      )
    })
  )
}

export default OverviewPreviewCard;
