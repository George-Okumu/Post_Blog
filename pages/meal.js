import Image from "next/image";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { siteTitle } from "../components/layout";
import axios from "axios";

const name = "MealDB";
const name2 =
  "Welcome to Random Meal DB, where you get to know recipe instructions";

export default function Meal({ meals, error }) {
  // First display error
  if (error) {
    return <div>An error occurred. {error.message}</div>;
  }
  // Return view if response is success
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
        {Meal ? (
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
        <div className="pt-20 flex justify-center">
      <div class=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
    {/* <img class="w-full bg-cover" src="{result.strMealThumb}" /> */}
    <img class="w-full bg-cover" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" />
    <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="far fa-heart cursor-pointer"></i>
        <span class="text-sm text-gray-400 font-medium">Delicious One</span>
      </div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
      <span class="font-medium mr-2 text-green-600 flex justify-center text-3xl">{result.strMeal}</span>
        </div>
      </div>
      
      <div class="mb-2">
        <div class="mb-2 text-sm">
      <span class="font-medium mr-2 text-purple-600">{result.strInstructions}</span>
      </div>
      </div>
      <div class="text-sm mb-2 text-red-800 cursor-pointer font-medium flex justify-end my-8">View on Youtube: {result.strYoutube}</div>
    </div>
  </div>
        </div>
      ))}
    </div>
    
  );
  
}

// axios uses try and catch method for best response of data
Meal.getInitialProps = async (ctx) => {
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
