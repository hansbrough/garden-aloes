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

const AloesOrganizedByATrait = ({ data, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={`Aloes with ${pageContext.color_name} colored flowers`}
        description={`${pageContext.totalCount} ${pageContext.color_name} blooming Aloes that will look great in your garden.`}
      />
      <h1>{`Aloes with ${pageContext.color_name} colored flowers`} ({pageContext.totalCount})</h1>
      <p>
        Are you looking to add some {pageContext.color_name} color to your waterwise garden?
        Here's a handy list of {pageContext.totalCount} Aloes to match your needs.
      </p>
      <ul style={{marginLeft:`0px`}}>
        <span>{`See Aloes with ${pageContext.color_name} flowers sorted by season:`}</span>
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/winter-blooming-aloes-with-${pageContext.color_name}-flowers`}>Winter</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/spring-blooming-aloes-with-${pageContext.color_name}-flowers`}>Spring</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/summer-blooming-aloes-with-${pageContext.color_name}-flowers`}>Summer</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/fall-blooming-aloes-with-${pageContext.color_name}-flowers`}>Fall</Link></li>
        <br/><span>{`See Aloes with ${pageContext.color_name} flowers sorted by category:`}</span>
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/tree-aloes-with-${pageContext.color_name}-flowers`}>Tree</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/branching-aloes-with-${pageContext.color_name}-flowers`}>Branching</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/clumping-aloes-with-${pageContext.color_name}-flowers`}>Sm to Med Clumping</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/large-clumping-aloes-with-${pageContext.color_name}-flowers`}>Large Clumping</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/single-head-tree-aloes-with-${pageContext.color_name}-flowers`}>Single Head Tree</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/maculate-aloes-with-${pageContext.color_name}-flowers`}>Spotted</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/red-aloes-with-${pageContext.color_name}-flowers`}>Red</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/grass-aloes-with-${pageContext.color_name}-flowers`}>Grass</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/single-head-stemless-aloes-with-${pageContext.color_name}-flowers`}>Single Head Stemless</Link></li>|
      </ul>
      {pageContext.edges && <OverviewPreviewCard edges={pageContext.edges} axis="flowering" thumbnails={data.aloeImages.edges} />}
      <p><Link to="/aloes-by-flower-color">Aloes of all colors</Link></p>
    </Layout>
  )
}

export default AloesOrganizedByATrait
