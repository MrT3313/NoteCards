// IMPORTS
import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

// LAYOUTS


// COMPONENTS


// CSS
import StudySetOption_STYLES from '../styles/studySetOption.module.css'


// MAIN COMPONENT TO EXPORT
const StudySetOption = (props) => {
    console.log('StudySetOption Props', props)
    return (
        <div className={StudySetOption_STYLES.index}>
            {props.item}
        </div>
    )
}

// EXPORTS
export default StudySetOption