import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

/*--Components--*/
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />

      <section className="hero-card category">
        <Img
          fixed={data.categoryHero.childImageSharp.fixed}
          alt="Tree Aloes"
          className="category-hero-img"
        />
        <div className="hero-overview">
          <h2>Tree Aloes</h2>
          <p>Some grow fast, some grow slow but when they reach a given stature there's no denying their impact in the garden.</p>
          <Link to="/tree-aloes">Tree Aloes</Link>
        </div>
      </section>

      <section className="hero-card flower-color">
        <Img
          fixed={data.flowerHero.childImageSharp.fixed}
          alt="Flower Color"
          className="flower-hero-img"
        />
        <div className="hero-overview">
          <h2>Georgeous Red Flowers!</h2>
          <p>Aloes claim bragging rights for some of the most spectacular flowers (especially since they are Winter bloomers)</p>
          <Link to="/aloes-with-red-flowers">Aloes with Red Flowers</Link>
        </div>
      </section>

      <section className="hero-card region">
        <Img
          fixed={data.regionHero.childImageSharp.fixed}
          alt="Region"
          className="region-hero-img"
        />
        <div className="hero-overview">
          <h2>Aloes of Southern Africa</h2>
          <p>Some of the most beautiful Aloes come the countries that make up Southern Africa.</p>
          <Link to="/aloes-from-southern-africa">See Aloes from Southern Africa</Link>
        </div>
      </section>

      <section className="hero-card functional-use">
        <Img
          fixed={data.functionalUseHero.childImageSharp.fixed}
          alt="Functional Use"
          className="functional-use-hero-img"
        />
        <div className="hero-overview">
          <h2>Focal Point Aloes For Your Garden</h2>
          <p>Focal points are used in garden design to draw and direct the eye before viewers take in the finer points of your garden.</p>
          <Link to="/focal-point-aloes/">Learn about focal point Aloes</Link>
        </div>
      </section>
    </Layout>
  )
}

// results automagically passed to page component as 'data'
export const query = graphql`
  query {
    categoryHero:file(name: { eq: "aloe-barberae-landscape" }) {
      childImageSharp {
        fixed(height:250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    flowerHero:file(name: { eq: "aloe-erik-the-red-2" }) {
      childImageSharp {
        fixed(height:250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    regionHero:file(name: { eq: "map-region-southern" }) {
      childImageSharp {
        fixed(height:250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    functionalUseHero:file(name: { eq: "aloe-capitata-quartziticola-hero" }) {
      childImageSharp {
        fixed(height:250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
