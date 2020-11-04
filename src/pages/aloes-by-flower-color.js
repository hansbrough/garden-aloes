import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OverviewPreviewCard from "../components/OverviewPreviewCard"

// NOTES: ideally we'd create excerpts/snippts in the graphql request - but 'except' doesnt seem to work with gatsby-transformer-json
// as a work around i'm using js truncate directly in the template

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    yellow:allAloesJson(filter:{flower_color: { in: ["yellow"] }}) {
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    red:allAloesJson(filter:{flower_color: { in: ["red"] }}) {
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    orange:allAloesJson(filter:{flower_color: { in: ["orange"] }}) {
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    green:allAloesJson(filter:{flower_color: { in: ["green"] }}) {
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    salmon:allAloesJson(filter:{flower_color: { in: ["salmon"] }}) {
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    white:allAloesJson(filter:{flower_color: { in: ["white"] }}) {
      edges {
        node {
          slug
          title
          flowering
        }
      }
    }
    coral:allAloesJson(filter:{flower_color: { in: ["coral"] }}) {
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

const FlowerColorPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Aloes organized by flower color" />
      <h2>Aloes organized by flower color</h2>
      <p>Are you looking to add some color to your waterwise garden? We have you covered! We compiled over 100 aloe flowers and divided them by color so you could easily bring a pop of your favorite hue to your backyard.</p>
      <ul>
        <li>
          <h3>White Flowers</h3>
          <Link to="/aloes-with-white-flowers">Show only Aloes with <em>White</em> Flowers</Link>
          {data && data.white.edges &&
            <OverviewPreviewCard edges={data.white.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h3>Orange Flowers</h3>
          <Link to="/aloes-with-orange-flowers">Show only Aloes with <em>Orange</em> Flowers</Link>
          {data && data.orange.edges &&
            <OverviewPreviewCard edges={data.orange.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h3>Red Flowers</h3>
          <Link to="/aloes-with-red-flowers">Show only Aloes with <em>Red</em> Flowers</Link>
          {data && data.red.edges &&
            <OverviewPreviewCard edges={data.red.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h3>Yellow Flowers</h3>
          <Link to="/aloes-with-yellow-flowers">Show only Aloes with <em>Yellow</em> Flowers</Link>
          {data && data.yellow.edges &&
            <OverviewPreviewCard edges={data.yellow.edges} axis="flowering" truncate />
          }
        </li>
        <li>
          <h3>Salmon Flowers</h3>
          <Link to="/aloes-with-salmon-flowers">Show only Aloes with <em>Salmon</em> Flowers</Link>
          {data && data.salmon.edges &&
            <OverviewPreviewCard edges={data.salmon.edges} axis="flowering" truncate />
          }
        </li>
      </ul>
    </Layout>
  )
}

export default FlowerColorPage
