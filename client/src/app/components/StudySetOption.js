// IMPORTS
import React, { useState } from 'react'
import { Link } from 'gatsby'

// LAYOUTS


// COMPONENTS


// SCSS
import StudySetOption_STYLES from '../../styles/studySetOption.module.scss'

// - A - // MAIN COMPONENT TO EXPORT
const StudySetOption = (props) => {
    // - A.1 - // Data Check
    console.log('StudySetOption Props', props)
    console.log('StudySetOption Props.HISTORY', props.history)

    // - A.2 - // Component State
    const [hoverState, setHoverState] = useState(false)
    console.log('Current Hover State',hoverState)

    // - A.3 - // Component Methods
    const handleMouseHover = () => {
        setHoverState(!hoverState)
    }

    const clickHandler = () => {
        console.log('CLICKED')
        routeToStudySet(props.item)
    }

    const routeToStudySet = (props) => {
        console.log(props)

    }
    
    // - A.4 - // Render
    return (
        <div 
            className={
                hoverState ? StudySetOption_STYLES.indexHover : StudySetOption_STYLES.index
            }
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}

            onClick={clickHandler}
        >
            {hoverState ? 
                <Link 
                    className={StudySetOption_STYLES.box_1}
                    to="/app/StudyPage"
                    state={{ props: props}}
                >
                    Click To Start Studying!
                </Link>
                :
                <div className={StudySetOption_STYLES.box_1}>
                    {props.item}
                </div>
            }
            <div className={StudySetOption_STYLES.box_2}></div>
            <div className={StudySetOption_STYLES.box_3}></div>
        </div>
    )
}

// - C - // EXPORTS
export default StudySetOption