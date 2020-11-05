import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import OverviewPreviewCard from "../components/OverviewPreviewCard";

// NOTES: ideally we'd create excerpts/snippts in the graphql request - but 'except' doesnt seem to work with gatsby-transformer-json
// as a work around i'm using js truncate directly in the template

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    western:allAloesJson(filter:{location: { in: ["ghana","togo","burkina","benin","nigeria","cameroon","gabon","congo republic"] }}) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
    eastern:allAloesJson(filter:{location: { in: ["tanzania","kenya","somalia","ethiopia","eritrea","south sudan","uganda"] }}) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
    southern:allAloesJson(filter:{location: { in: ["south africa","lesotho","angola","zambia","malawi","zimbabwe","mozambique","nambia","swaziland","botswana"] }}) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
    arabian:allAloesJson(filter:{location: { in: ["yemen","saudi arabia"] }}) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
    madagascan:allAloesJson(filter:{location: { in: ["madagascar"] }}) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }
    hybrid:allAloesJson(filter:{location: { in: ["hybrid"] }}) {
      totalCount
      edges {
        node {
          slug
          title
        }
      }
    }

    regionsMap:file(name: { eq: "map-aloe-regions-africa" }) {
      childImageSharp {
        fixed(width:600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const LocationPage = ({data, location}) => {

  return (
    <Layout pathname={location.pathname}>
      <SEO title="Aloes organized by their native regions" />
      <h2>Aloes organized by their native regions</h2>
      <p>
        Plants of the genus Aloe come from a variety of areas in the Western, Central, Eastern and Southern regions of Africa as well as Madagascar and the Saudi Arabian penninsula.
      </p>
      <section className="aloes-by-region-container">
        <Img
          fixed={data.regionsMap.childImageSharp.fixed}
          alt="Aloe Regions of Africa"
          className="aloe-regions-map"
        />
        <ul className="aloe-regions-list">
          <li>
            <h3 className="eastern legend-item" style={{ color:`#9970ab` }}>East African Aloes</h3>
            <p>Has approximately 200 Aloe species. <Link to="/aloes-from-eastern-africa">{`View ${data.eastern.totalCount} Aloes from Eastern Africa`}</Link></p>
          </li>
          <li>
            <h3 className="southern legend-item" style={{color:`#238b45` }}>Southern African Aloes</h3>
            <p>Has approximately 290 Aloe species. <Link to="/aloes-from-southern-africa">{`View ${data.southern.totalCount} Aloes from Southern Africa`}</Link></p>
          </li>
          <li>
            <h3 className="western legend-item" style={{color:`#78c679`}}>Central and Western African Aloes</h3>
            <p>Has approximately 30 Aloe species. <Link to="/aloes-from-western-africa">{`View ${data.western.totalCount} Aloes from Central and Western Africa`}</Link></p>
          </li>
          <li>
            <h3 className="madagascan legend-item" style={{color:`#dfc27d`}}>Madagascan Aloes</h3>
            <p>Has approximately 50 Aloe species. <Link to="/aloes-from-madagascar">{`View ${data.madagascan.totalCount} Aloes from Madagascar`}</Link></p>
          </li>
          <li>
            <h3 className="arabian legend-item">Saudi Arabian Peninsula Aloes</h3>
            <p>Has approximately 50 Aloe species. <Link to="/aloes-from-the-arabian-peninsula">{`View ${data.arabian.totalCount} Aloes from the Arabian Peninsula`}</Link></p>
          </li>
          <li>
            <h3 className="hybrid legend-item">Hybrid Aloes</h3>
            <p>There are countless hybrid species! <Link to="/aloes-from-hybrids">{`View ${data.hybrid.totalCount} Hybrid Aloes`}</Link></p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default LocationPage
