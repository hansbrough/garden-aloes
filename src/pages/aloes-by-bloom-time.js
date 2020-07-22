import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OverviewPreviewCard from "../components/OverviewPreviewCard";

// NOTES: ideally we'd create excerpts/snippts in the graphql request - but 'except' doesnt seem to work with gatsby-transformer-json
// as a work around i'm using js truncate directly in the template

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    winter:allAloesJson(filter:{bloom_time: { in: ["winter","early_winter","mid_winter","late_winter"] }}) {
      totalCount
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    spring:allAloesJson(filter:{bloom_time: { in: ["spring","early_spring","late_spring"] }}) {
      totalCount
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    summer:allAloesJson(filter:{bloom_time: { in: ["summer","early_summer","mid_summer"] }}) {
      totalCount
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    fall:allAloesJson(filter:{bloom_time: { in: ["fall","late_fall"] }}) {
      totalCount
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
  }
`

const BloomTimePage = ({data}) => {
  return (
    <Layout>
      <SEO title="Aloes organized by bloom time" />
      <h1>Aloes organized by bloom time</h1>
      <p>
        Are you looking to add some flowers to your waterwise garden at a certain time of year?
        We've done the work for you by organizing over 100 Aloes by their bloom times.
      </p>
      <ul>
        <li>
          <h2>Fall Blooming Aloes ({data.fall.totalCount})</h2>
          <p><Link to="/aloes-that-bloom-in-fall">Show only Aloes that bloom in the Fall</Link></p>
          {data && data.fall.edges &&
            <OverviewPreviewCard edges={data.fall.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h2 style={{fontSize:`1.5rem`, marginBottom: `.5rem` }}>Winter Blooming Aloes  ({data.winter.totalCount})</h2>
          <p><Link to="/aloes-that-bloom-in-winter">Show only Aloes that bloom in the Winter</Link></p>
          {data && data.winter.edges &&
            <OverviewPreviewCard edges={data.winter.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h2>Spring Blooming Aloes ({data.spring.totalCount})</h2>
          <p><Link to="/aloes-that-bloom-in-spring">Show only Aloes that bloom in the Spring</Link></p>
          {data && data.spring.edges &&
            <OverviewPreviewCard edges={data.spring.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h2>Summer Blooming Aloes  ({data.summer.totalCount})</h2>
          <p><Link to="/aloes-that-bloom-in-summer">Show only Aloes that bloom in the Summer</Link></p>
          {data && data.summer.edges &&
            <OverviewPreviewCard edges={data.summer.edges} axis="flowering" truncate />
          }
        </li>
      </ul>
    </Layout>
  )
}

export default BloomTimePage
