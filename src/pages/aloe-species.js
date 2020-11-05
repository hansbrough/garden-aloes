import React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

const AloeSpeciesPage = ({data, location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Aloe Species List" />
      <h2>Aloe Species List</h2>
      <ul>
      {data && data.allAloesJson.edges.map(edge => {
        const aloe = edge.node;
        return (<li key={aloe.slug}><Link to={`/${aloe.slug}`}>{aloe.title}</Link></li>)
      })}
      </ul>
    </Layout>
  )
}

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    allAloesJson(sort: {fields: title order: ASC})
    {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export default AloeSpeciesPage;
