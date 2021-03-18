import React, { useState } from 'react';

const Sanitize = (props) => {

    var removeExtraSpaces = function(text) {
        var wordsArr = text.split(' ');
        return _.filter(wordsArr, function(word) {
            return word !== '';
        }).join(' ');
    };
    
    // Truncate word with the specified length
    var truncateWord = function(text, maxLength) {
        var wordsArr = text.split(' ');
        return _.map(wordsArr, function(word) {
            if(word.length > maxLength) {
                return word.substring(0, maxLength);
            }
            return word;
        }).join(' ');
    };

    return(
        <>

        </>
   );

}

export default Sanitize;