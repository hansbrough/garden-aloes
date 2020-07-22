import React from "react"
import { graphql } from "gatsby"
//import Image from "gatsby-image"

export const query = graphql`
  query {
    allAloesJson {
      edges {
        node {
          slug
          title
          overview
        }
      }
    }
  }
`

const AloesList = ({ data }) => {
  const aloes = data.aloesJson

  return (
    <ul>
      {aloes}
    </ul>
  )
}

export default AloesList
