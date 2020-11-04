import React from "react";
import SEO from "../seo";

const FunctionalUseCopy = ({ totalCount }) => {
  return (
    <>
      <SEO
        title="Aloes that make good accent plants"
        description={`${totalCount} Aloes that make good accent plants.`}
      />
      <h2 style={{textTransform:`capitalize`}}>Aloes that make good accent plants</h2>
      <p className="functional-use-copy">
        Accent plants contrast with their neighbors through a variety of characteristics such as color, texture, size, placement, and form. Their contrasting characteristics can be used to draw attention to a particular feature in the landscape. An accent plant adds special interest to the garden but often it's main purpose is to accentuate a specimen plant.
        Choose one or more of the {totalCount} Aloes below as an accent plant in your garden.
      </p>
    </>
  )
}

export default FunctionalUseCopy
