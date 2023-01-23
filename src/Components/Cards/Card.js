import React from 'react'
import "./Card.css"
import CriticallyAcclaimedTitles from './Critically_Acclaimed_Titles'
import LatestTrending from './Latest_Trending'
import PopularShows from './Popular_Shows '
import Recommended from './Recommended'

const Card = () => {
    return (
        <div>
            <LatestTrending /> 
            <PopularShows />
            <CriticallyAcclaimedTitles />
            <Recommended />
        </div>
    )
}

export default Card