import React from 'react'
import Layout from '../../components/Layout';
import {portfolio, projects} from '../../styles/projects.module.css';
import { Link, graphql } from 'gatsby';

const Projects = ({ data }) => {

  const allProjects = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects I have created:</h3>
        <div className={projects}>
          {allProjects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects;

//export page query
export const pageQuery = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        html
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
  }
`