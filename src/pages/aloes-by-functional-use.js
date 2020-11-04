import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// NOTES: ideally we'd create excerpts/snippts in the graphql request - but 'except' doesnt seem to work with gatsby-transformer-json
// as a work around i'm using js truncate directly in the template

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    accent:allAloesJson(filter:{function: { eq: "accent" }}) {
      totalCount
      edges {
        node {
          slug
        }
      }
    }
    barrier:allAloesJson(filter:{function: { eq: "barrier" }}) {
      totalCount
      edges {
        node {
          slug
        }
      }
    }
    borders:allAloesJson(filter:{function: { eq: "borders" }}) {
      totalCount
      edges {
        node {
          slug
        }
      }
    }
    ground_cover:allAloesJson(filter:{function: { eq: "ground_cover" }}) {
      totalCount
      edges {
        node {
          slug
        }
      }
    }
    specimen:allAloesJson(filter:{function: { eq: "specimen" }}) {
      totalCount
      edges {
        node {
          slug
        }
      }
    }

    border:file(name: { eq: "aloe-david-verity-colony" }) {
      childImageSharp {
        fixed(width:200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    groundcover:file(name: { eq: "aloe-cynthia-giddy-hero" }) {
      childImageSharp {
        fixed(width:200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    livingFence:file(name: { eq: "aloe-arborescens-hero" }) {
      childImageSharp {
        fixed(width:200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    focalpoint:file(name: { eq: "aloe-erik-the-red-hero" }) {
      childImageSharp {
        fixed(width:200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    accentPlants:file(name: { eq: "aloe-rubroviolacea-flower" }) {
      childImageSharp {
        fixed(width:200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const LocationPage = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Aloes organized by their functional use in the garden"
        description="Find Aloes that can be used as ground cover, focal points, borders, accent plants and more in your garden."
      />
      <h2>Aloes organized by their garden use</h2>
      <blockquote cite="https://www.canr.msu.edu/resources/a_guide_for_the_selection_and_use_of_plants_in_the_landscape_e2941">
        <p>
          "Function" refers to the purpose that the plant serves in the landscape. The shade of a tree canopy, the filtered screen from a hedge, or the erosion control of a ground cover addresses the specific objectives of the planting. Plants serve three major functions in our landscapes: architectural, engineering and environmental. We can liken the development of our landscape to the development of rooms in our homes – each room is shaped for its intended use and is accessorized accordingly.
        </p>
        <footer>Robert Schutzki, <cite>Michigan State University</cite></footer>
      </blockquote>
      <section className="aloes-by-use-container">
        <ul className="aloe-functional-use-list">
          <li>
            <Img
              fixed={data.livingFence.childImageSharp.fixed}
              alt="Aloe used as a garden fence"
              className="aloe-by-use-hero"
            />
            <div>
             <h3 className="barrier">Living Fence or Barrier</h3>
             <p>A living fence is a permanent hedge tight enough and tough enough to serve almost any of the functions of a manufactured fence. <Link to="/barrier-aloes/" className="view-more">{`View ${data.barrier.totalCount} Aloes that grow to create a living fence`}</Link></p>
            </div>
          </li>
          <li>
            <Img
              fixed={data.border.childImageSharp.fixed}
              alt="Aloe used as a garden border"
              className="aloe-by-use-hero"
            />
            <div>
              <h3 className="border">Borders</h3>
              <p>The plants in border beds and along edging help define areas of the outdoor space and offer a transition from one space to the next. <Link to="/aloes-for-use-in-border-planting/" className="view-more">{`View ${data.borders.totalCount} Aloes that make good border plants`}</Link></p>
            </div>
          </li>
          <li>
            <Img
              fixed={data.groundcover.childImageSharp.fixed}
              alt="Aloes used as a ground cover"
              className="aloe-by-use-hero"
            />
            <div>
             <h3 className="ground-cover">Ground Covers</h3>
             <p>Using Aloes as a ground cover will make a beautiful and practical addition to your water-wise garden. <Link to="/ground-cover-aloes/" className="view-more">{`View ${data.ground_cover.totalCount} Ground Cover Aloes`}</Link></p>
            </div>
          </li>
          <li>
            <Img
              fixed={data.focalpoint.childImageSharp.fixed}
              alt="Aloes used as garden focal point"
              className="aloe-by-use-hero"
            />
            <div>
              <h3 className="focal-points">Garden Focal Points</h3>
              <p>Focal points are used in garden design to draw and direct the eye. They act as a visual starting point before viewers take in the finer points of your garden. <Link to="/focal-point-aloes/" className="view-more">{`View ${data.specimen.totalCount} Focal point Aloes`}</Link></p>
            </div>
          </li>
          <li>
            <Img
              fixed={data.accentPlants.childImageSharp.fixed}
              alt="Aloes used as garden accent plant"
              className="aloe-by-use-hero"
            />
            <div>
              <h3 className="focal-points">Accent Plants for the Garden</h3>
              <p>Accent plants contrast with their neighbors through a variety of characteristics such as color, texture, size, placement, and form. <Link to="/aloes-for-use-as-accent-plants/" className="view-more">{`View ${data.accent.totalCount} Accent Aloes`}</Link></p>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default LocationPage
