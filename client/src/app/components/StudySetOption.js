// IMPORTS
import React, { useState } from 'react'
import { Link } from 'gatsby'

// LAYOUTS


// COMPONENTS


// SCSS
import StudySetOption_STYLES from '../../styles/studySetOption.module.scss'

// MAIN COMPONENT TO EXPORT
const StudySetOption = (props) => {
    // - A - // Data Check
    console.log('StudySetOption Props', props)
    const { set } = props
    console.log('set', set)

    // - B - // Component State
    const [hoverState, setHoverState] = useState(false)
    console.log('Current Hover State',hoverState)

    // - C - // Component Methods
    const handleMouseHover = () => {
        setHoverState(!hoverState)
    }
    
    // - D - // Render
    return (
        <div 
            className={
                hoverState ? StudySetOption_STYLES.indexHover : StudySetOption_STYLES.index
            }
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
        >
            {hoverState ? 
                <Link 
                    className={StudySetOption_STYLES.box_1}
                    to="/app/StudyPage"
                    state={{ props: props, set: set}}
                >
                    Click To Start Studying!
                </Link>
                :
                <div className={StudySetOption_STYLES.box_1}>
                    {set.node.title}
                </div>
            }
            <div className={StudySetOption_STYLES.box_2}></div>
            <div className={StudySetOption_STYLES.box_3}></div>
        </div>
    )
}

// - C - // EXPORTS
export default StudySetOption