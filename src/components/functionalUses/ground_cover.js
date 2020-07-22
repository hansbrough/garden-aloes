import React from "react";
import SEO from "../seo";

const FunctionalUseCopy = ({ totalCount }) => {
  return (
    <>
      <SEO
        title="Ground Cover Aloes"
        description={`${totalCount} Aloes that will make a great ground cover plant in your garden.`}
      />
      <h1 style={{textTransform:`capitalize`}}>Aloes for use as a ground cover</h1>
      <p className="functional-use-copy">
        Using Aloes as a ground cover will make a beautiful and practical addition to your water-wise garden. These plants can fill in gaps in your garden, prevent erosion, suppress weeds, act as a transitional element as well as add color and texture to your landscape. Steep slopes that are difficult to mow may also be a good area to plant Aloe as a ground cover.
        Choose one or more of the {totalCount} Aloes below that works for your garden.
      </p>
    </>
  )
}

export default FunctionalUseCopy
