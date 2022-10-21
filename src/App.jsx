import { useState } from 'react'
import './App.css'
import Btn from './components/Btn'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json' 

function App() {

  

  const colors = ["red", "blue", "purple", "gray", "green", "darkcyan", "pink", "darkgreen", "brown", "orange"]

  // const [color, setColor] = useState(colors[Math.floor(Math.random()*colors.length)])
  const [color, setColor] = useState(colors[5])



  const [quote, setQuote] = useState(quotes[Math.floor(Math.random()*colors.length)].quote)

  const [author, setAuthor] = useState(quotes[Math.floor(Math.random()*colors.length)].author)

  const changeState = () => {
    setColor(colors[Math.floor(Math.random()*colors.length)])
    setQuote(quotes[Math.floor(Math.random()*quotes.length)].quote)
    setAuthor(quotes[Math.floor(Math.random()*colors.length)].author)
    document.body.style = `background: ${color}`
    return setQuote(quotes[Math.floor(Math.random()*quotes.length)].quote)
  }

  // console.log(changeState());

  document.body.style = `background: ${color}`

  return (
    <div className="App" >

      <div className="main">
        <QuoteBox color={color} quote={quote} author={author}/>
        <Btn color={color} changeState={changeState} />
        
      </div>

    </div>
  )
}

export default App
