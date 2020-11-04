import React from "react"
import { Link, graphql } from "gatsby"
import LocationUtil from "../../utils/locationUtil";
import FunctionalUseUtil from "../../utils/FunctionalUseUtil";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import "../components/aloes.css"
// Notes: aliased image query only way I could figure out how to pass a variable image name
// into gatsby-image. all examples on line show hardwired filename strings using "useStaticQuery"

export const query = graphql`
  query(
    $slug: String!, $image_hero_regex: String!,
    $image_regex: String!, $category_name: String!)
  {
    aloesJson(slug: { eq: $slug }) {
      title
      aka
      overview
      description
      flowering
      origin_history
      care_cultivation
      frost
      use
      location
      function
      usda_hardiness
      sources
      purchase
    }

    aloeCategory: categoriesJson(name: {eq: $category_name}) {
      title
    }

    functionalUses: allFile(filter: {relativePath: {regex: "/components/functionalUses/"}}) {
      edges {
        node {
          name
        }
      }
    }

    aloeThumbnails: allFile(filter: {name: {regex: $image_hero_regex}}) {
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

    aloeImages: allFile(filter: {name: {regex: $image_regex}}) {
      edges {
        node {
          childImageSharp {
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const Aloe = ({ data, pageContext }) => {
  const getNextImage = () => {
    const nextImage = data.aloeImages.edges && data.aloeImages.edges.splice(0,1);
    return nextImage && nextImage.map(image => (
      <Img
        key={image.node.childImageSharp.fixed.src}
        fixed={image.node.childImageSharp.fixed}
        title={aloe.title}
        alt={aloe.overview.slice(0,100)}
      />
    ))
  }

  const aloe = data.aloesJson;
  const builtUses = data.functionalUses.edges;
  const akaText = !!aloe.aka.length && `Also Known As: ${aloe.aka.join(", ")}`
  return (
    <Layout>
      <SEO
        title={aloe.title}
        description={aloe.overview.slice(0,150)}
      />

      <article>
        <section className="plant-heading-group">
          {data.aloeThumbnails.edges && data.aloeThumbnails.edges[0] &&
            <Img
              className="plant-thumbnail"
              imgStyle={{borderRadius:`50%`}}
              fixed={data.aloeThumbnails.edges[0].node.childImageSharp.fixed}
              title={aloe.title}
              alt={aloe.overview.slice(0,100)}
            />
          }
          <div>
            <h2 className="plant-title">{aloe.title}</h2>
            <p className="plant-alias plant-attribute">{akaText}</p>
            <p className="aloe-category plant-attribute">Category: {data.aloeCategory.title}</p>
            <p className="usda-hardiness plant-attribute">USDA Hardiness Zones: {aloe.usda_hardiness}</p>
          </div>
        </section>

        <section><h3>Overview</h3>{aloe.overview}</section>
        <section className="plant-description-container">
          <h3>Description</h3>
          {getNextImage()}
          {aloe.description}
        </section>
        <section><h3>Flowering</h3>{aloe.flowering}</section>
        <section className="plant-history-container">
          <h3>Origin / History</h3>
          {getNextImage()}
          {aloe.origin_history}
          <p>
            <Link to={LocationUtil.getRegionUrlPathByLocation(aloe.location)}>{`Discover more ${LocationUtil.getRegionTitleByLocation(aloe.location)} Aloes`}</Link>
          </p>
        </section>
        <section><h3>Care / Cultivation</h3>{aloe.care_cultivation}</section>
        <section><h3>Frost Tenderness</h3>{aloe.frost}</section>
        <section>
          <h3>Use in the Garden</h3>
          {aloe.use}
          <p>
            <Link to={FunctionalUseUtil.getUrlPath(aloe.function,builtUses)}>{FunctionalUseUtil.getTitle(aloe.function,builtUses)}</Link>
          </p>
        </section>
        <section className="plant-gallery">
        {
          data.aloeImages.edges.map(image => (
            <Img
              key={image.node.childImageSharp.fixed.src}
              fixed={image.node.childImageSharp.fixed}
              title={aloe.title}
              alt={aloe.overview.slice(0,100)}
            />
          ))
        }
        </section>
        <section>
          {!!aloe.sources.length
            && (
              <>
              <h3>Learn More</h3>
              <p style={{marginBottom:`.5rem`}}>
                The information on this page about {aloe.title} has been gathered and summarized from the sources below.
                Visit these pages to learn more.
              </p>
              <ul className="resource-list" style={{marginLeft:`0px`}}>
              {aloe.sources.map(source => (
                <li
                  key={source}
                  className="plant-resource"
                  style={{listStyle:`none`, marginBottom:`.5rem`}}>
                  <OutboundLink href={source} rel="nofollow noopener noreferrer" target="_blank">{source}</OutboundLink>
                </li>
              ))}
              </ul>
              </>
            )}

          {!!aloe.purchase.length
            && (
              <>
              <h3>{aloe.title} for sale</h3>
              <p style={{marginBottom:`.5rem`}}>Buy {aloe.title} for your garden.</p>
              <ul className="resource-list" style={{marginLeft:`0px`}}>
              {aloe.purchase.map(source => (
                <li
                  key={source}
                  className="plant-resource"
                  style={{listStyle:`none`, marginBottom:`.5rem`}}>
                  <OutboundLink href={source} rel="nofollow noopener noreferrer" target="_blank">{source}</OutboundLink>
                </li>
              ))}
              </ul>
              </>
            )}
        </section>
      </article>

      <p><Link to="/">Back to all Aloes</Link></p>
    </Layout>
  )
}

export default Aloe
