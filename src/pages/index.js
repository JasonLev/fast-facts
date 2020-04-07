import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Gameshow of Fast Facts</h1>
    <p>You can create a new episode with questions and answers (True/False).</p>
    <p>You can also play any of the episodes.</p>
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      </div>*/}
    <div>
      <Link
        to="/new-episode/"
        style={{
          color: `white`,
          textDecoration: `none`,
          margin: `3rem`
        }}
      >
        <Button variant="contained" size="large" color="primary">
          Create An Episode
        </Button>
      </Link>
      <Link
        to="/new-episode/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Button variant="contained" size="large">
          Play
        </Button>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
