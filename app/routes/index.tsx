import { MetaFunction, useLoaderData, LoaderFunction } from "remix";

type DogSearchResult = {
  message: string[];
  status: "success";
};

export const meta: MetaFunction = () => {
  return {
    title: "Remix Doge",
    description: "Welcome to Remix Doge!",
  };
};

export const loader: LoaderFunction = async () => {
  const resp = await fetch(`https://dog.ceo/api/breed/shiba/images/random/2`);
  return (await resp.json()) as DogSearchResult;
};

export default function Index() {
  const { message } = useLoaderData<DogSearchResult>();
  return (
    <section>
      {message.map((imagePath) => (
        <img key={imagePath} src={imagePath} alt="Dog" />
      ))}
    </section>
  );
}
