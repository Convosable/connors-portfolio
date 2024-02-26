import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css';


export default function Home( {data} ) {
  
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Learn, Develop, Deploy... Repeat</h2>
          <h3>Flatiron School Graduate - 2023</h3>
          <p>Full Stack Software Engineer based in Long Beach, California.</p>
          <Link className={btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt='connor-pic' />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProfileImage {
    file(relativePath: {eq: "connorpic.jpeg"}) {
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