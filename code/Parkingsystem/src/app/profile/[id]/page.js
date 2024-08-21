import Layout from '@/app/components/layout/Layout'
import React from 'react'

export default function Profilepage({params}) {
  return (
    <Layout>
        <div>Welcome {params.id}</div>
    </Layout>
  )
}
