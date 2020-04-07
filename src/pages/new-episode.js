import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeForm from "../components/episodeForm"

const NewEpisodeContainer = () => (
  <Layout>
    <SEO title="New episode form" />
    <h1>New Episode Form</h1>
    <EpisodeForm />
    <h3>Create</h3>
  </Layout>
)

export default NewEpisodeContainer
