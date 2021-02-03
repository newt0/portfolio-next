import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>ttttttttttttttttttttttttttttttttttttttttttttttttt</p>
  </Layout>
);

export default withRouter(Post);
