import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import OverviewPreviewCard from "../components/OverviewPreviewCard";
import SEO from "../components/seo"
import "../components/aloes.css";

//pass matching images into overview card - and pick a match based on slug + possibly '-hero' string
//this is duplicated code... refactor later
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
        title={`${pageContext.category_name} Aloes with ${pageContext.color_name} colored flowers`}
        description={`${pageContext.totalCount} ${pageContext.color_name} Aloes with ${pageContext.season_name} flowers that will look great in your garden.`}
      />
      <h1>{`${pageContext.category_name.split('-').join(' ')} Aloes with ${pageContext.color_name} flowers`} ({pageContext.totalCount})</h1>
      <p>
        Are you looking to add some {pageContext.color_name} color to your waterwise garden?
        Here's a handy list of {pageContext.totalCount} {pageContext.category_name} Aloes that are good candidates.
      </p>
      {pageContext.edges && <OverviewPreviewCard edges={pageContext.edges} axis="overview" thumbnails={data.aloeImages.edges} />}
      <p><Link to="/aloes-by-flower-color">Aloes organized by flower color</Link></p>
    </Layout>
  )
}

export default AloesOrganizedByATrait
