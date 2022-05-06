import * as React from "react";

import Layout from "../../components/Layout";
import CareersRoll from "../../components/CareersRoll";

export default class CareersIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="px-2 sm:px-4">
                    <div className="container max-w-6xl mx-auto">

                        <div className="p-10" style={{ backgroundImage: `url('/img/team-index.jpg')` }}>
                            <h1>Careers</h1>
                        </div>

                        <CareersRoll />

                    </div>
                </section>
            </Layout>
        );
    }
}
