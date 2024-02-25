import { Link } from "gatsby";
import * as React from "react"
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css';


export default function Home() {

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Learn, Develop, Deploy... Repeat</h2>
          <h3>Flatiron School Graduate - 2023</h3>
          <p>Full Stack Software Engineer based in Long Beach, California.</p>
          <Link className={btn} to='/projects'>My Portfolio Projects</Link>
        </div>
        <img src="connorpic.jpeg" alt="persona photo" style={{ maxWidth: '100%'}}/>
        <p></p>
      </section>
    </Layout>
  )
}
