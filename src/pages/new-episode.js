import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Episode from "../components/episode"

const NewEpisodeContainer = () => (
  <Layout>
    <SEO title="New episode " />
    <h1>New Episode</h1>
    <Episode />
  </Layout>
)

export default NewEpisodeContainer
