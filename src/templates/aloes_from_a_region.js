import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import OverviewPreviewCard from "../components/OverviewPreviewCard";
import SEO from "../components/seo"
import "../components/aloes.css";

//pass matching images into overview card - and pick a match based on slug + possibly '-hero' string
//this is duplicated code... refactor later
export const query = graphql`
  query($image_hero_regex: String!, $image_map_regex: String!)
  {
    regionMaps: allFile(filter: {name: {regex: $image_map_regex}}) {
      edges {
        node {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
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

const AloeRegion = ({ data, pageContext }) => {
  const isHybridPage = pageContext.regionTitle === 'Hybrid';
  const descriptionPrefix = (isHybridPage) ?
  `Hybrid Aloes can be created from several plants and do not neccessarily come from any one place.` :
  `Here is a list of ${pageContext.totalCount} ${pageContext.regionTitle} Aloes that grow in one or more of the following places: `;
  //todo: create more unique hybrid meta decription string - include some plant names?
  const metaDescriptionSuffix = (isHybridPage) ?
  `each created from several parent plants.` :
  `from countries like ${pageContext.regionCountries.slice(0,3).join(', ')} and more.`;
  const regionMap = data.regionMaps.edges[0];

  return (
    <Layout>
      <SEO
        title={`${pageContext.regionTitle} Aloes`}
        description={`${pageContext.totalCount} ${pageContext.regionTitle} Aloes ${metaDescriptionSuffix}`}
      />
      <h1 style={{textTransform:`capitalize`}}>{pageContext.regionTitle} Aloes</h1>
      {regionMap && <Img
        className="plant-region-map"
        fluid={regionMap.node.childImageSharp.fluid}
      />}
      <p className="aloe-region-description">
        {descriptionPrefix} {!isHybridPage && <span style={{textTransform:`capitalize`}}>{pageContext.regionCountries.join(', ')}</span>}
      </p>
      {pageContext.edges && <OverviewPreviewCard edges={pageContext.edges} axis="origin_history" thumbnails={data.aloeImages.edges} />}
      <p><Link to="/aloes-by-location">Back to Aloes organized by regions</Link></p>
    </Layout>
  )
}

export default AloeRegion
