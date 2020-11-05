import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    allCategoriesJson {
      edges {
        node {
          name
          slug
          title
          description
        }
      }
    }
  }
`

const CategoryPage = ({data, location}) => {
  return (
    <Layout pathname={location.pathname}>
      <SEO title="Aloe Categories" />
      <h2>Aloe Categories</h2>

      <ul>
      {data && data.allCategoriesJson.edges.map(edge => {
        const cat = edge.node;
        return (
          <li key={cat.title} style={{marginBottom: `1.5rem` }}>
          <h3 style={{fontSize:`1rem`, marginBottom: `.25rem` }}>{cat.title}</h3>
          <p style={{marginBottom: `.5rem` }}>{cat.description}</p>
          <Link to={`/${cat.slug}`}>See all {cat.title}</Link>
          </li>
        )
      })}
      </ul>
    </Layout>
  )
}

export default CategoryPage
