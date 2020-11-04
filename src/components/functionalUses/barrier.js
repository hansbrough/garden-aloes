import React from "react";
import SEO from "../seo";

const FunctionalUseCopy = ({ totalCount }) => {
  return (
    <>
      <SEO
        title="Aloes that grow to create a Living Fence"
        description={`${totalCount} Aloes that will grow to create a living fence.`}
      />
      <h2 style={{textTransform:`capitalize`}}>Aloes that will grow to create a living fence</h2>
      <p className="functional-use-copy">
        A living fence is a permanent hedge tight enough and tough enough to serve almost any of the functions of a manufactured fence. They also offer additional benefits like providing 'edge habitat' that supports ecological diversity, reducing soil drying and wind erosion by acting as a windbreak, as well as bringing ever-changing beauty to your garden as the seasons change.
        Choose one or more of the {totalCount} Aloes below to create a living barrier for your garden.
      </p>
    </>
  )
}

export default FunctionalUseCopy
