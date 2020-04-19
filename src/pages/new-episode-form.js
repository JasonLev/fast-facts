import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeForm from "../components/EpisodeForm"

const NewEpisodeContainer = () => (
  <Layout>
    <SEO title="New episode" />
    <h1>New Episode Form</h1>
    <EpisodeForm />
  </Layout>
)

export default NewEpisodeContainer
