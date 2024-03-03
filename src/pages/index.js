import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import {header} from '../styles/home.module.css';


export default function Home( {data} ) {

  const profileImage = data.profileImage.childImageSharp.gatsbyImageData;

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Learn, Develop, Deploy... Repeat</h2>
          <h3>Flatiron School Graduate</h3>
          <p>Full Stack Software Engineer based in Long Beach, California.</p>
        </div>
        <GatsbyImage image={getImage(profileImage)} alt='connor-pic' />
      </section>
    </Layout>
  )
}

export const Head = () => (
  <>
    <meta charSet="UTF-8"/>
    <meta name="description" content="Connor Vosberg's professional protfolio page."></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Connor Vosberg - Portfolio</title>
  </>
)

export const query = graphql`
  query ProfileImage {
    profileImage: file(relativePath: {eq: "connorpic.jpeg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

