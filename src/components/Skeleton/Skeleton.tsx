import "./Skeleton.css"
import SkeletonImage from "../SkeletonImage/SkeletonImage"
import SkeletonText from "../SkeletonText/SkeletonText"
import React from "react"

type AccecptedProps = "img" | "profile" | "text" | "half-text"

interface SkeletonProps {
  propsOrder?: AccecptedProps[],
  children?: React.ReactNode,
  outline?: boolean,
  style?: React.CSSProperties
  dark?: boolean
}

function Skeleton(props: SkeletonProps) {
  if(props.propsOrder) {
    return (
      <div className={`skeleton${props.outline ? " skeleton-outline": ""}${props.dark ? ` dark` : ""}`} style={props.style}>
        {props.propsOrder.map((prop, index) => {
          if(prop === "img") {
            return <SkeletonImage key={index} />
          }
          if(prop === "text") {
            return <SkeletonText key={index} />
          }
          if(prop === "half-text") {
            return <SkeletonText key={index} half />
          }
          if(prop === "profile") {
            return <SkeletonImage key={index} profile />
          }
          return null
        })}
      </div>
    )
  }

  return (
    <div className={`skeleton${props.outline ? " skeleton-outline": ""}${props.dark ? ` dark` : ""}`} style={props.style}>
      {
        props.children
      }
    </div>
  )
}

export default Skeleton