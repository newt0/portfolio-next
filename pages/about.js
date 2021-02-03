import Layout from "../components/Layout";
import Link from "next/link";
import { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "./_error";
export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/newt0");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="about">
        {user.name}
        <img src={user.avatar_url} alt="Newt0" height="200px" />
      </Layout>
    );
  }
}
