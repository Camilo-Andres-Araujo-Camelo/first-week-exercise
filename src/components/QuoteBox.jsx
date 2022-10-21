import React from 'react';

const QuoteBox = ({color, quote, author}) => {
    return (
        <div className='quoteBox'>
            <div className='quoteText'>
                <i className="fas fa-quote-left" style={{color:`${color}`}}></i>
                <p style={{color:`${color}`}}>{quote}.</p>
            </div>
            <p style={{color:`${color}`}}>{author}</p>
        </div>
    );
};

export default QuoteBox;