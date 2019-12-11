// IMPORTS
import React from 'react'

// LAYOUTS


// COMPONENTS


// SCSS
import StudySetOption_STYLES from '../../styles/studySetOption.module.scss'


// MAIN COMPONENT TO EXPORT
const StudySetOption = (props) => {
    console.log('StudySetOption Props', props)
    return (
        <div className={StudySetOption_STYLES.index}>
            <div className={StudySetOption_STYLES.box_1}>
                {props.item}
            </div>
            <div className={StudySetOption_STYLES.box_2}></div>
            <div className={StudySetOption_STYLES.box_3}></div>
        </div>
    )
}

// EXPORTS
export default StudySetOption