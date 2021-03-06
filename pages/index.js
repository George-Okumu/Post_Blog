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
        {" "}
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Hello, this is {name} </p>
        <p>
          <b>{name}</b> is an innovative and proactive Front-End Developer,
          successful in developing elegant, groundbreaking website and
          application designs for demanding clients. Talented in project
          management, team leadership and independent problem-solving. <br />
          Highly organized multitasking with expertise in scheduling projects,
          enhancing designs, learning and verifying code. Prepared to offer my
          skills and abilities to the team.
        </p>
        <br />
        <p>
          For more information about my projects, here is my portfolio link:{" "}
          <br />{" "}
          <a
            className="text-blue-900"
            href="https://george-okumu.github.io/myPortfolio/"
          >
            {name} Portfolio
          </a>
        </p>
      </section>
      <br />

      <footer>
        <a className="text-blue-900 pt-5" href="/posts/first-post">
          Check my Posts
        </a>
        <br/>
        Or
        <br/>
        <a className="text-blue-900 pt-5" href="/meal">
          <span className="text-green-600 font-bold my-2">Click me to get random instructions of different foods </span>
        </a>
      </footer>
    </Layout>
  );
}
