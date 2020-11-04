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
    allAloesJson(filter:{
      flower_color: { in:["orange"] },
      bloom_time: {in:["winter","early_winter","mid_winter","late_winter"]}
      category: {eq:"clumping"}
    }) {
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

const WinterOrangeBloomsColorPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Winter blooming, clumping Aloes with orange flowers" />
      <h2>Winter blooming, clumping Aloes with orange flowers</h2>
      <p>
        Are you looking to add some clumping aloes with orange blooms to your waterwise garden this Winter?
        Here's a hand picked list of {data.allAloesJson.totalCount} orange blooming Aloes to match your needs!
      </p>
      <section>
        <p><Link to="/aloes-by-flower-color">Back to all flower colors</Link></p>
        {data && data.allAloesJson.edges &&
          <OverviewPreviewCard edges={data.allAloesJson.edges} axis="flowering" truncate />
        }
        <p><Link to="/aloes-by-flower-color">Back to all flower colors</Link></p>
      </section>
    </Layout>
  )
}

export default WinterOrangeBloomsColorPage
