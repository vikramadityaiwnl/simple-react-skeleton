import React from "react"

interface SkeletonImageProps {
  profile?: boolean
}

function SkeletonImage(props: SkeletonImageProps) {
  return (
    <div className={`skeleton-image ${props.profile ? "profile" : ""}`}></div>
  )
}

export default SkeletonImage