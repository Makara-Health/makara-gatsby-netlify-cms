import * as React from "react";

import Layout from "../../components/Layout";
import TeamRoll from "../../components/TeamRoll";

export default class TeamIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <section className="px-2 sm:px-4">
                    <div className="container max-w-6xl mx-auto">

                        <div className="p-10" style={{ backgroundImage: `url('/img/team-index.jpg')` }}>
                            <h1>Meet the Team</h1>
                        </div>

                        <TeamRoll />

                    </div>
                </section>
            </Layout>
        );
    }
}
