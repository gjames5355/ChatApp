import React, { Component, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactWordcloud from 'react-wordcloud';

// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';

const WordCloudContainer = () => {
  const messages = useSelector(state => state.messages.messages)
  const [wordCountData, setWordCountData] = useState([])
  // const [newWordsAdded, setNewWordsAdded] = useState(false)


  useEffect(() => {
    setWordCountData(makeWordCountData())
  }, [messages])

  const wordsToOmit = ["and", "the", "that", 'have', 'with', 'you', 'this', 'but', 'from', 'they', 'would', 'there', 'their', 'what', 'about', 'when', 'make']
  const makeWordCountData = () => {
    const wordCount = {}
    console.log("messages:", messages)
    for (let { content } of messages) {
      const words = content.split(" ")
      for (let word of words) {
        if (word.length > 2 && !wordsToOmit.includes(word)) {
          wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
        }
      }
    }
    // now we have word Count {"hello": 5, "world": 12}
    const data = []
    for (let [word, count] of Object.entries(wordCount)) {
      data.push({ 'text': word, 'value': count })
    }
    return data;
  }

  // console.log('inside word cloud container')
  const fontSizeMapper = word => Math.log2(word.value) * 5;
  const rotate = word => word.value % 360;
  const onWordMouseOver = word => alert(word);

  return (
    <div style={{ border: '2px solid lightgrey' }}>
      <ReactWordcloud
        words={wordCountData}
        rotate={rotate}
        onWordMouseOver={onWordMouseOver}
      />
    </div>
  )
}

export default WordCloudContainer;