import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { siteTitle } from "../components/layout";
import axios from "axios";

const name = "MealDB";
const name2 =
  "Welcome to Random Meal DB, where you get to know recipe instructions";

export default function Mealaxios({ meals, error }) {
  if (error) {
    return <div>An error occurred. {error.message}</div>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {Mealaxios ? (
          <>
            <Image
              priority
              src="/images/mealdb.jpeg"
              className={styles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : (
          <>
            <a>
              <Image
                priority
                src="images/mealdb.jpeg"
                className={styles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
            <h2 className={styles.headingLg}>
              <a className={styles.colorInherit}>{name}</a>
            </h2>
          </>
        )}
      </header>
      <h1 className={styles.heading2Xl}>{name2}</h1>
      {/* Used map to itterate through the meals array response,  */}
      {meals.map((result) => (
        <div>
          <h1 key="{meals.idMeal}">Meal Name: {result.strMeal}</h1>
          <p>Meal Instructions: {result.strInstructions}</p>
        </div>
      ))}
    </div>
  );
}
Mealaxios.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const meals = res.data;
    return { meals: meals.meals };
  } catch (error) {
    return { error };
  }
};
