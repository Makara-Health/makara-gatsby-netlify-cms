import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <section className="px-2 sm:px-4">
              <div className="container max-w-6xl mx-auto">

                  <div className="p-10" style={{ backgroundImage: `url('/img/blog-index.jpg')` }}>
                      <h1 className="">Latest Stories</h1>
                  </div>

                  <BlogRoll />

              </div>
          </section>
      </Layout>
    );
  }
}
