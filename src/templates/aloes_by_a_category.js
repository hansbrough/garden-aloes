import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import OverviewPreviewCard from "../components/OverviewPreviewCard";
import SEO from "../components/seo"
import "../components/aloes.css";

// Notes:

export const query = graphql`
  query($category_name: String!) {
    allAloesJson(filter:{category: { eq: $category_name }}) {
      totalCount
      edges {
        node {
          slug
          title
          overview
        }
      }
    }
  }
`

const Aloe = ({ data, pageContext }) => {

  return (
    <Layout>
      <SEO
        title={`A list of ${pageContext.category_title}`}
        description={`${data.allAloesJson.totalCount} ${pageContext.category_title} that will look great in your garden.`}
      />
      <h1>{pageContext.category_title}</h1>
      <p>{pageContext.category_description}</p>
      <p></p>
      <ul style={{marginLeft:`0px`}}>
        <li style={{listStyle:`none`}}><Link to="/aloe-categories">All Aloe Categories</Link></li>
        <span>{`See ${pageContext.category_title} with flowers sorted by color:`}</span>
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.category_slug}-with-orange-flowers`}>Orange</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.category_slug}-with-yellow-flowers`}>Yellow</Link></li>|
        <li style={{listStyle:`none`,margin:`0px .25rem`,display:`inline`}}><Link to={`/${pageContext.category_slug}-with-red-flowers`}>Red</Link></li>|
      </ul>
      {data && data.allAloesJson.edges && <OverviewPreviewCard edges={data.allAloesJson.edges} LongReadMoreLinkText/>}
      <p><Link to="/aloe-categories">Back to All Aloe Categories</Link></p>
    </Layout>
  )
}

export default Aloe
