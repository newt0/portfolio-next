import Layout from "../components/Layout";
import Link from "next/link";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/newt0");
    const data = await res.json();

    return { user: data };
  }

  render() {
    return (
      <Layout title="about">
        {JSON.stringify(this.props.user)}
        <Link href="/">
          <a>Go to Home</a>
        </Link>
        <p>React Developer</p>
        // <img src="/static/reactlogo.png" alt="" height="200px" />
      </Layout>
    );
  }
}
