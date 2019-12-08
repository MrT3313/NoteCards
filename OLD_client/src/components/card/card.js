import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const Cards = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCard {
                edges {
                    node {
                        title
                        tabTitle
                        mainDescription {
                            mainDescription
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>CARD</div>
    )
}

export default Cards