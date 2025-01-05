import ArticleItemList from "@/components/article-list-item";
import { getCategorisedArticles } from "@/lib/articles";
import Image from 'next/image';

const HomePage = () => {

  const articles = getCategorisedArticles();

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
          <h1>my thoughts</h1>
        </header>
      </div>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles[article]}
              key={article}
            />
          ))}
      </section>
    </section>
  )
}

export default HomePage;