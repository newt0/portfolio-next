import Layout from "../components/Layout";
import Link from "next/link";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
export default class About extends Component {
  static getInitialProps() {
    fetch("https://api.github.com/users/newt0")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    return { user: "user" };
  }

  render() {
    return (
      <Layout title="about">
        <Link href="/">
          <a>Go to Home</a>
        </Link>
        <p>React Developer</p>
        // <img src="/static/reactlogo.png" alt="" height="200px" />
      </Layout>
    );
  }
}
