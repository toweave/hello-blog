import React from "react"
import { Link, graphql } from "gatsby"
import "antd/dist/antd.css"
import { DatePicker, Button, Radio, Icon } from "antd"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const size = "large"
  return (
    <Layout location={location} title={'Hello Toweave!'}>
      <SEO title="All posts" />
      <Bio />
      <div>
        <DatePicker />
        <br />
        <br />
        <Radio.Group value={size}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <br />
        <br />
        <Button size={size}>Normal</Button>
        <br />
        <br />
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <br />
        <Button type="danger" size={size}>
          Danger
        </Button>
        <br />
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <br />
        <Button type="primary" icon="download" size={size} />
        <br />
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size} />
        <br />
        <br />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <br />
        <br />
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    </Layout>
  )
}

export default BlogIndex