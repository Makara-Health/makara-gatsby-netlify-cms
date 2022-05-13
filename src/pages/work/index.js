import * as React from "react";

import Layout from "../../components/Layout";
import WorkRoll from "../../components/WorkRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <section className="px-2 sm:px-4">
              <div className="container max-w-6xl mx-auto">

                  <div className="py-10" style={{ backgroundImage: `url('/img/work-index.jpg')` }}>
                      <h1 className="">Latest Work</h1>
                  </div>

                  <WorkRoll />

              </div>
          </section>
      </Layout>
    );
  }
}
