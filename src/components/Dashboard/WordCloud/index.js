import React from 'react'
import ReactWordcloud from 'react-wordcloud';

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
        <div className="card-title text-left">Word Cloud</div>
        <div style={{ height: 270, width: 260 }}>
            <ReactWordcloud words={words} options={{
                fontFamily: 'Georgia, serif',
                fontSizes: [20, 50],
                colors: ['#A3F0FF', '#51AAFF', '#02D6FF', '#00C3E8', '#00A4C3', '#00A4C3']
            }} />
        </div>
    </div>
}

export default Index