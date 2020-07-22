import React from "react";
import { Link, graphql } from "gatsby";
import Loadable from 'react-loadable';

import Layout from "../components/layout";
import OverviewPreviewCard from "../components/OverviewPreviewCard";
import "../components/aloes.css";

//pass matching images into overview card - and pick a match based on slug + possibly '-hero' string
export const query = graphql`
  query($image_hero_regex: String!)
  {
    aloeImages: allFile(filter: {name: {regex: $image_hero_regex}}) {
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
  }
  `

const AloeFunctionalUse = ({ data, pageContext }) => {
  const UseCopy = Loadable({
    loader: () => import(`../components/functionalUses/${pageContext.useName}`),
    loading: ()=> null,
  });
  return (
    <Layout>
      <UseCopy {...pageContext} />
      {pageContext.edges && <OverviewPreviewCard edges={pageContext.edges} axis="use" thumbnails={data.aloeImages.edges} />}
      <p><Link to="/aloes-by-functional-use">Aloes organized by use in the garden</Link></p>
    </Layout>
  )
}

export default AloeFunctionalUse
