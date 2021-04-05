import React from 'react'
import ReactWordcloud from 'react-wordcloud';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const words = [
    {
        text: 'beverage',
        value: 264,
    },
    {
        text: 'cold-drink',
        value: 111,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
    {
        text: 'good',
        value: 27,
    },
    {
        text: 'neutral',
        value: 247,
    },
    {
        text: 'taste',
        value: 177,
    },
    {
        text: 'chill',
        value: 17,
    },
    {
        text: 'refresh',
        value: 97,
    },
    {
        text: 'cold',
        value: 17,
    },
    {
        text: 'hot',
        value: 257,
    },
    {
        text: 'good',
        value: 168,
    },
    {
        text: 'great',
        value: 30,
    },
    {
        text: 'blaaah',
        value: 240,
    },
    {
        text: 'refresh',
        value: 197,
    },
    {
        text: 'cold',
        value: 17,
    },
    {
        text: 'hot',
        value: 57,
    },
    {
        text: 'good',
        value: 268,
    },
    {
        text: 'great',
        value: 130,
    },
    {
        text: 'blaaah',
        value: 40,
    },
    {
        text: 'beverage',
        value: 64,
    },
    {
        text: 'cold-drink',
        value: 211,
    },
    {
        text: 'thought',
        value: 116,
    },
    {
        text: 'bad',
        value: 17,
    },
    {
        text: 'good',
        value: 56,
    },
    {
        text: 'neutral',
        value: 70,
    },
    {
        text: 'taste',
        value: 127,
    },
    {
        text: 'chill',
        value: 170,
    },
    {
        text: 'refresh',
        value: 297,
    },
    {
        text: 'cold',
        value: 107,
    },
    {
        text: 'hot',
        value: 57,
    },
    {
        text: 'good',
        value: 68,
    },
    {
        text: 'great',
        value: 60,
    },
    {
        text: 'blaaah',
        value: 100,
    },
    {
        text: 'refresh',
        value: 97,
    },
    {
        text: 'cold',
        value: 107,
    },
    {
        text: 'hot',
        value: 57,
    },
    {
        text: 'good',
        value: 68,
    },
    {
        text: 'great',
        value: 30,
    },
    {
        text: 'blaaah',
        value: 40,
    },
    {
        text: 'beverage',
        value: 64,
    },
    {
        text: 'cold-drink',
        value: 11,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
    {
        text: 'good',
        value: 27,
    },
    {
        text: 'neutral',
        value: 47,
    },
    {
        text: 'taste',
        value: 77,
    },
    {
        text: 'chill',
        value: 17,
    },
    {
        text: 'refresh',
        value: 97,
    },
    {
        text: 'cold',
        value: 17,
    },
    {
        text: 'hot',
        value: 57,
    },
    {
        text: 'good',
        value: 68,
    },
    {
        text: 'great',
        value: 30,
    },
    {
        text: 'blaaah',
        value: 40,
    },
    {
        text: 'refresh',
        value: 97,
    },
    {
        text: 'cold',
        value: 17,
    },
    {
        text: 'hot',
        value: 57,
    },
    {
        text: 'good',
        value: 68,
    },
    {
        text: 'great',
        value: 30,
    },
    {
        text: 'blaaah',
        value: 40,
    },

]

const Index = () => {
    return <div className="d-flex flex-column px-2">
        <OverlayTrigger
            placement={'right'}
            overlay={
                <Tooltip style={{ opacity: 0.7 }} >
                    See all the keywords related to your brand across various social media platforms
        </Tooltip>}
        >
            <div className="card-title text-left">Word Cloud</div>
        </OverlayTrigger>
        <div style={{ height: 270, width: 260 }}>
            <ReactWordcloud words={words} options={{
                fontFamily: 'Georgia, serif',
                fontSizes: [20, 50],
                colors: ['#8cafeb', '#627aa4', '#eb8c9c', '#a4626d', '#7d6e62', '#be8e96']
            }} />
        </div>
    </div>
}

export default Index