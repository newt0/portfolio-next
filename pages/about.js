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
    const { user } = this.props;
    return (
      <Layout title="about">
        {user.name}
        <img src={user.avatar_url} alt="Newt0" height="200px" />
      </Layout>
    );
  }
}
