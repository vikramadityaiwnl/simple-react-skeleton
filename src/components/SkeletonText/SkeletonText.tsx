import React from "react"

interface SkeletonTextProps {
  lines?: number,
  half?: boolean
}

function SkeletonText(props: SkeletonTextProps) {
  const lines = props.lines || 1
  return (
    <div className="skeleton-text-container">
      {
        Array.from({ length: lines }).map((_, index) => (
          <div key={index} className={`skeleton-text${props.half ? " half" : ""}`}></div>
        ))
      }
    </div>
  )
}

export default SkeletonText