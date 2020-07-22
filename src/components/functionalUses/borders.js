import React from "react";
import SEO from "../seo";

const FunctionalUseCopy = ({ totalCount }) => {
  return (
    <>
      <SEO
        title="Aloes that make good border plants"
        description={`${totalCount} Aloes that make good border plants.`}
      />
      <h1 style={{textTransform:`capitalize`}}>Aloes that make good border plants</h1>
      <p className="functional-use-copy">
        The plants in border beds and along edging help define areas of the outdoor space and offer a transition from one space to the next.
        Border planting near patios, walkways or driveways soften hardscaping elements and add visual interest to the space.
        The classic edging plants are low-growing plants that form the lowest tier of landscape design. However borders can serve different purposes like taller plants that define the boundary between properties.
        Choose one or more of the {totalCount} Aloes below to create border planting in your garden.
      </p>
    </>
  )
}

export default FunctionalUseCopy
