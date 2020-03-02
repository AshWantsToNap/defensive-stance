import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Certs from "../components/certs";
import "../style/normalize.css"
import "../style/all.scss"
import "../style/components/animations.scss"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Projects" keywords={[`career`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Hi, I'm Amy Heyen, a Cyber Security Analyst and student pursuing a degree in Security and Development. 
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>This is me outside the gates to <a href="http://inari.jp/en/" target="_blank" rel="noopener noreferrer">Fushimi Inari Taisha</a> in 2019. I highly recommend vsiting there if you are able to.</figcaption>
          </figure>
          <h3 id="dynamic-styles">Projects & Accomplishments</h3>
          <ul>
              <li>
                  This website/blog is a technical accomplishment of mine. For more information, see my blog post "
                  <a href="../how-to-build-this-website/" alt="How-To: Build this Website">
                    How to Build this Website
                  </a>
                  ."
              </li>
              <li>
                  Obtained CompTIA Security+ (Sec+) and Cyber Security Analyst+ (CySA+) Certifications and created matching study guides.
              </li>
                  <ul style={{marginLeft: `25px`}}>
                      <li>
                        <a href="../sec-study-guide/" alt="Security+ study guide">Sec+ Study Guide</a>
                      </li>
                      <li>
                          <a href="../cysa-study-guide/" alt="CySA+ study guide">CySA+ Study Guide</a>
                      </li>
                  </ul>
              <li>
                  CISSP Certification studying in progress.
              </li>
          </ul>
          <p>
            You can find me on&nbsp;
            <a href="https://www.twitter.com/amyheyen/"
              target="_blank"
              rel="noopener noreferrer">
              Twitter,
            </a>&nbsp;
            <a href="https://www.linkedin.com/in/amy-heyen"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn,
            </a> or&nbsp;
            <a href="https://www.github.com/amyheyen"
              target="_blank"
              rel="noopener noreferrer">
              GitHub.
            </a>
          </p>
        </div>
      </article>
      <div class="projects-wrapper">
          <div style={{ height: `250px`, width: `250px`, marginTop: `20px`, marginBottom:`30px`}}>
              <Certs/>
          </div>
          <div> </div>
        </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "me-mt-inari-shrine.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
