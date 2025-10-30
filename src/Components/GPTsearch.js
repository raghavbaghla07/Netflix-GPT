import React from 'react'
import GPTsearchBar from './GPTsearchBar'
import GPTmovieSuggestion from './GPTmovieSuggestion'
import { BG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'

const GPTsearch = () => {

    return (
        <div>
            <div>
                <img
                    className='absolute overflow-hidden w-screen h-screen object-cover -z-10'
                    src={BG_URL}
                    alt='netflix login page'
                />
            </div>
            <GPTsearchBar />
            <GPTmovieSuggestion />
        </div>
    )
}

export default GPTsearch