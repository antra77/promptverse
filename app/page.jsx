import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore and Share
        <br />
        <span className="green_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptverse is an open-source AI prompting tool which provides a
        seamless experience for exploring diverse prompts and sharing your
        creative outputs within a vibrant community of like-minded individuals.
      </p>

      <Feed/>
    </section>
  );
};

export default Home;
