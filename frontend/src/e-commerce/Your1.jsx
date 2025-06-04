import React from 'react'

export const Your1 = ({dd}) => {
  return (
    <div>{dd.map((item)=><>{item.name}</>)}</div>
  )
}
