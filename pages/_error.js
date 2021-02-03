import Layout from "../components/Layout";

export default ({ statusCode }) => {
  return (
    <Layout title="error">
      {statusCode
        ? `Couldn't load your user data: Status Code${statusCode}`
        : `Couldn't get the page.`}
    </Layout>
  );
};
