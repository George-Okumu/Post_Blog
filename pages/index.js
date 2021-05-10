import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { siteTitle } from "../components/layout";

const name = "George";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Hello, this is {name} </p>
        <p>
          <b>{name}</b> is an innovative and proactive Front-End Developer, successful in developing
          elegant, groundbreaking website and application designs for demanding
          clients. Talented in project management, team leadership and
          independent problem-solving. <br/>Highly organized multitasking with
          expertise in scheduling projects, enhancing designs, learning and
          verifying code. Prepared to offer my skills and abilities to the team.
        </p>

        <p>
          For more information about my projects, here is my portfolio link: <br/> <a href="https://george-okumu.github.io/myPortfolio/">{name} Portfolio</a>
        </p>
      </section>

      <footer>
  
        <a href="/posts/first-post">Check my Posts</a>

      </footer>
    </Layout>

  );
}
