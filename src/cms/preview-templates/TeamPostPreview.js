import React from 'react'
import PropTypes from 'prop-types'
import { TeamPostTemplate } from '../../templates/team-post'

const TeamPostPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])
    return (
        <TeamPostTemplate
            content={widgetFor('body')}
            jobTitle={entry.getIn(['data', 'jobTitle'])}
            tags={tags && tags.toJS()}
            fullName={entry.getIn(['data', 'fullName'])}
        />
    )
}

TeamPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default TeamPostPreview
