import Layout from "../components/Layout";
import Link from "next/link";
import { Component } from "react";
export default class About extends Component {
  state = {
    user: null,
  };
  componentDidMount() {
    fetch("https://api.github.com/users/newt0")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          user: data,
        });
      });
  }
  render() {
    return (
      <Layout title="about">
        {JSON.stringify(this.state.user)}
        <Link href="/">
          <a>Go to Home</a>
        </Link>
        <p>React Developer</p>
        // <img src="/static/reactlogo.png" alt="" height="200px" />
      </Layout>
    );
  }
}
