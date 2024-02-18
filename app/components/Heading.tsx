import React from 'react'

type HeadingProps = {
  children: React.ReactNode
}

function Heading({ children }: HeadingProps) {
  return <h2 className="text-center text-3xl font-medium capitalize mb-8">{children}</h2>
}

export default Heading
