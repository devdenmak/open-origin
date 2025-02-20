import dynamic from 'next/dynamic'
import React from 'react'

const NonSSSRWrapper = ({ children }: { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NonSSSRWrapper), {
  ssr: false,
})
