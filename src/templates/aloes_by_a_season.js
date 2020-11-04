import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import OverviewPreviewCard from "../components/OverviewPreviewCard";
import SEO from "../components/seo"
import "../components/aloes.css";

//pass matching images into overview card - and pick a match based on slug + possibly '-hero' string
export const query = graphql`
  query($image_hero_regex: String!)
  {
    aloeImages: allFile(filter: {name: {regex: $image_hero_regex}}) {
      edges {
        node {
          childImageSharp {
            fixed(height:100, width:100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  `

const AloeSeason = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO title={`${pageContext.season_name} blooming Aloes`} />
      <SEO description={`${pageContext.totalCount} ${pageContext.season_name} blooming Aloes that will look great in your garden.`} />
      <h2 style={{textTransform:`capitalize`}}>{pageContext.season_name} blooming Aloes ({pageContext.totalCount})</h2>
      <p>
        Are you looking to add some flowers to your waterwise garden during the {pageContext.season_name}?
        These {pageContext.totalCount} Aloes will add great color and match your bloom time needs.
      </p>
      <p></p>
      <ul style={{marginLeft:`0px`}}>
        <span>{`${pageContext.season_name} blooming Aloes sorted by color:`}</span>
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.season_name}-blooming-aloes-with-orange-flowers`}>Orange</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.season_name}-blooming-aloes-with-red-flowers`}>Red</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.season_name}-blooming-aloes-with-yellow-flowers`}>Yellow</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.season_name}-blooming-aloes-with-salmon-flowers`}>Salmon</Link></li>
      </ul>
      {pageContext.edges && <OverviewPreviewCard edges={pageContext.edges} axis="flowering" thumbnails={data.aloeImages.edges} />}
      <p><Link to="/aloes-by-bloom-time">Aloes organized by seasons</Link></p>
    </Layout>
  )
}

export default AloeSeason
