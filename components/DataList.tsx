
const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/post", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function DataList() {
  const { posts } = await getPosts();

  return (
    <>
      {posts.map((t:any) => (
        <div
          key={t._id}
          className=" w-2/3 mx-auto bg-slate-100  p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start rounded-md shadow-md"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
          </div>
        </div>
      ))}
    </>
  );
}