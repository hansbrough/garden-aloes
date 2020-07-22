import React from "react";
import SEO from "../seo";

const FunctionalUseCopy = ({ totalCount }) => {
  return (
    <>
      <SEO
        title="Specimen Aloes"
        description={`${totalCount} Aloes that can be used as a focal points in your garden.`}
      />
      <h1 style={{textTransform:`capitalize`}}>Focal point Aloes for your garden</h1>
      <p className="functional-use-copy">
        Have you ever wondered why some gardens draw you in for a closer look, while others can be distracting and complicated? Our eyes can get overwhelmed when there are too many things going on and they can’t focus on just one thing. Focal points are used in garden design to tell the viewer what to look at first. Once a viewer's interest is concentrated on a focal point, they can begin to notice other plants and features in the garden.
      </p>
      <p>
        The {totalCount} Aloes below all make excellent focal points for different reasons. Choose the one that's right for your garden and then set them apart with surrounding plants that have contrasting colors, texture or form.
      </p>
    </>
  )
}

export default FunctionalUseCopy
