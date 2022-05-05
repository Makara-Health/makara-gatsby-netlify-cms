import React from 'react'
import PropTypes from 'prop-types'
import { TeamMemberTemplate } from '../../templates/team-member'

const TeamMemberPreview = ({ entry, widgetFor }) => {
    const tags = entry.getIn(['data', 'tags'])
    return (
        <TeamMemberTemplate
            content={widgetFor('body')}
            jobTitle={entry.getIn(['data', 'jobTitle'])}
            tags={tags && tags.toJS()}
            fullName={entry.getIn(['data', 'title'])}
        />
    )
}

TeamMemberPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default TeamMemberPreview
