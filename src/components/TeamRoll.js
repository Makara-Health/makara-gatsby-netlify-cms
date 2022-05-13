import React from 'react'
import PropTypes from 'prop-types'
import {graphql, StaticQuery, withPrefix} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Shuffle from 'shufflejs';


class TeamRollTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            department: 'all',
            isActive: false,
        };
        this.element = React.createRef();
        this.sizer = React.createRef();
    }

    /**
     * Fake and API request for a set of images.
     * @return {Promise<Object[]>} A promise which resolves with an array of objects.
     */
    _fetchPhotos() {
        return new Promise((resolve) => {
            resolve([
                {
                    id: 4,
                    username: '@stickermule',
                    name: 'Sticker Mule',
                    groups: '["directors"]',
                    src: `${withPrefix("/")}img/apple-touch-icon.png`,
                },
                {
                    id: 5,
                    username: '@prostoroman',
                    name: 'Roman Logov',
                    groups: '["directors"]',
                    src: `${withPrefix("/")}img/apple-touch-icon.png`,
                },
                {
                    id: 6,
                    username: '@richienolan',
                    name: 'Richard Nolan',
                    groups: '["directors","accounts"]',
                    src: `${withPrefix("/")}img/apple-touch-icon.png`,
                },
                {
                    id: 7,
                    username: '@wexor',
                    name: 'Wexor Tmg',
                    groups: '["creative"]',
                    src: `${withPrefix("/")}img/apple-touch-icon.png`,
                },
            ]);
        });
    }

    /**
     * Resolve a promise when all the photos in an array have loaded.
     * @param {Object[]} photos Photos to load.
     * @return {Promise<Object[]>} Loaded images.
     */
    _whenPhotosLoaded(photos) {
        return Promise.all(
            photos.map(
                (photo) =>
                    new Promise((resolve) => {
                        const image = document.createElement('img');
                        image.src = photo.src;

                        if (image.naturalWidth > 0 || image.complete) {
                            resolve(photo);
                        } else {
                            image.onload = () => {
                                resolve(photo);
                            };
                        }
                    }),
            ),
        );
    }

    filterDepartment = (event) => {
        const currentState = this.state.isActive;
        this.setState({
            department: event.target.value,
            active: !currentState
        })

        if(event.target.value === 'all'){
            this.shuffle.filter();
        }else{
            this.shuffle.filter(event.target.value);
        }
    }

    componentDidMount() {

        // The elements are in the DOM, initialize a shuffle instance.
        this.shuffle = new Shuffle(this.element.current, {
            itemSelector: '.photo-item',
            /*sizer: this.sizer.current,*/
        });

        setTimeout(function(){
            that.shuffle.resetItems();
            that.shuffle.layout();
        },500)

        const that = this;
/*
        // Kick off the network request and update the state once it returns.
        this._fetchPhotos()
            .then(this._whenPhotosLoaded.bind(this))
            .then((photos) => {
                this.setState({ photos });

                setTimeout(function(){
                    that.shuffle.resetItems();
                    that.shuffle.layout();
                },500)

            });*/
    }

    componentDidUpdate() {
        // Notify shuffle to dump the elements it's currently holding and consider
        // all elements matching the `itemSelector` as new.
        this.shuffle.resetItems();
        this.shuffle.layout();
    }

    componentWillUnmount() {
        // Dispose of shuffle when it will be removed from the DOM.
        this.shuffle.destroy();
        this.shuffle = null;
    }


    render() {
        const {data} = this.props
        const {edges: teamMembers} = data.allMarkdownRemark
        const { department } = this.state;

        const formatTags = (tags) => {
            return tags.map(tag => {
                return `"${tag}"`
            }).toString();
        }

        return (
                <div className="">
                    <div>
                        <button data-state={department === 'all' ? 'active': null} value="all" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>All</button>
                        <button data-state={department === 'directors' ? 'active': null} value="directors" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>Directors</button>
                        <button data-state={department === 'cst' ? 'active': null} value="cst" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>Client Services</button>
                        <button data-state={department === 'accounts' ? 'active': null} value="accounts" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>Account/Project leads</button>
                        <button data-state={department === 'writing' ? 'active': null} value="writing" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>Scientific writing</button>
                        <button data-state={department === 'digital' ? 'active': null} value="digital" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>Digital</button>
                        <button data-state={department === 'creative' ? 'active': null} value="creative" className="bg-grey-300 px-8 py-2 mr-1 uppercase text-[12px] text-grey-500" onClick={this.filterDepartment}>Creative</button>
                    </div>

                    <div className="container mt-8">
                        <div ref={this.element} className="my-shuffle">
                            {teamMembers && teamMembers.map(({node: teamMember}) => (
                                <div key={teamMember.id} className="photo-item w-1/4" data-groups={"["+formatTags(teamMember.frontmatter.tags)+"]"}>
                                    <div className="grayscale mr-4">
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: teamMember.frontmatter.memberImage,
                                                alt: teamMember.frontmatter.title,
                                            }}
                                        />
                                    </div>
                                    <p className="mt-2"><strong>{teamMember.frontmatter.title.split(" ")[0]}</strong></p>
                                    <p className="mb-2">{teamMember.frontmatter.jobTitle}</p>
                                    {/*<p>{teamMember.excerpt}</p>*/}
                                </div>
                            ))}
                            <div ref={this.sizer} className="w-1/6 mr-2 photo-grid__sizer"/>
                        </div>
                    </div>

            </div>
        )
    }
}

TeamRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}


export default function TeamRoll() {
    return (
           <StaticQuery
               query={graphql`
           query TeamRollQuery {
             allMarkdownRemark(
               sort: { order: DESC, fields: [frontmatter___date] }
               filter: { frontmatter: { templateKey: { eq: "team-member" } } }
             ) {
               edges {
                 node {
                   excerpt(pruneLength: 400)
                   id
                   fields {
                     slug
                   }
                   frontmatter {
                     title
                     templateKey
                     jobTitle
                     tags
                     date(formatString: "MMMM DD, YYYY")
                     memberImage {
                       childImageSharp {
                         gatsbyImageData(
                           width: 400
                           quality: 70
                           aspectRatio: 1
                           placeholder: BLURRED
                         )
                       }
                     }
                   }
                 }
               }
             }
           }
         `} render = { (data, count) => <TeamRollTemplate data={data} count={count} /> }
           />
    );
}