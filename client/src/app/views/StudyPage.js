// IMPORTS
import React, {useState, useEffect} from 'react'

// LAYOUTS
import MainLayout from '../layouts/MainLayout.js'

// COMPONENTS
import Sidebar from '../layouts/SidebarLayout.js'
import CARD_INDEX from '../components/card/index.js'

// SCSS
import StudyPage_STYLES from '../../styles/studyPage.module.scss'

// MAIN COMPONENT TO EXPORT
const StudyPage = (props) => {
    // - A - // Data & Variables
    const { uniqueSets, set, allData } = props.location.state.props
    console.log('STUDY PAGE props:', props)
    console.log('uniqueSets', uniqueSets)
    console.log('set', set)
    console.log('allData', allData)

    const [index, setIndex] = useState(0)
    const [filtered, setFiltered] = useState([])
    // const category = props.location.state.props.item

    useEffect(() => {
        console.log("USE EFFECT")
        console.log(allData)

        let filteredArray = []

        allData.forEach( data => {
            console.log(data)
            // console.log(category)

            data.node.studySets.forEach(item => {
                console.log('item', item)
                if (item === set.node.title) {
                    console.log("ADD IT")
                    !filteredArray.includes(data) && filteredArray.push(data)
                }
            })
        })
        setFiltered(filteredArray)
    }, [allData])

    console.log('STUDY PAGE FILTERED ARRAY',filtered)

    // - B - // METHODS
    const incrementor = (type) => {
        type === 'add' ? (
            index + 1 < filtered.length ? (
                setIndex(index + 1)
            ) : (
                setIndex(0)
            )
        ) : (
            index - 1 >= 0 ? (
                setIndex(index - 1)
            ) : (
                setIndex(filtered.length - 1)
            )
        )
    }

    // - C - // Return
    return(
        <MainLayout>
            {/* <StudySidebar /> */}
            <Sidebar type="Study"/>
            <div className={StudyPage_STYLES.index}>
                <div className={StudyPage_STYLES.incrementor}>
                    <div
                        onClick={incrementor}
                    >Left</div>
                    <div>{index}</div>
                    <div
                        onClick={() => incrementor('add')}
                    >Right</div>
                </div>

                {filtered.length !== 0 &&
                    // filtered.map( (item, key) => <CARD_INDEX item={item} uniqueSets={uniqueSets}/> )
                    <CARD_INDEX item={filtered[index]} uniqueSets={uniqueSets}/>
                }
            </div>
        </MainLayout>
    )
}

// EXPORTS
export default StudyPage