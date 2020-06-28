import React from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
  {
    id: 1,
    author: 'Francis Scott Key Fitzgerald',
    quote: 'Everyone suspects himself of at least one of the cardinal virtues, and this is mine: I am one of the few honest people that I have ever known.'
  },
  {
    id: 2,
    author: 'J. Pierpont Morgan',
    quote: 'A man always has two reasons for doing anything a good reason and the real reason.',
  },
  {
    id: 3,
    author: 'John Lyly',
    quote: 'It is a blind goose that cometh to the fox\'s sermon.'
  },
  {
    id: 4,
    author: 'Friedrich Nietzsche',
    quote: 'It is not the strengths, but the durations of great sentiments that make great men.'
  },
  {
    id: 5,
    author: 'Robert Lee Frost',
    quote: 'I hold it the inalienable right of anybody to go to hell in his own way.'
  },
  {
    id: 6,
    author: 'Charles W. Chestnutt',
    quote: 'Those that set in motion the forces of evil cannot always control them afterwards.'
  },
  {
    id: 7,
    author: 'George Bancroft',
    quote: 'Beauty is but the sensible image of the Infinite. Like truth and justice it lives within us; like virtue and the moral law it is a companion of the soul.'
  },
  {
    id: 8,
    author: 'Prophet Muhammad',
    quote: 'A creature is not to be obeyed when it involves disobedience to the Creator.'
  }
];

const tweetQuoteBase = 'https://twitter.com/intent/tweet?text=';

function randomQuote() {
  return quotes[Math.floor(Math.random() * 8)];
}

class App extends React.Component {
  constructor(props) {
    super(props)
    let quote = randomQuote();
    this.state = {
      author: quote.author,
      quote: quote.quote,
      tweet: tweetQuoteBase + quote.quote,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let quote = randomQuote();
    this.setState({
      author: quote.author,
      quote: quote.quote,
      tweet: tweetQuoteBase + quote.quote,
    });
  }

  render() {
    return (
      <div id="quote-box" className="App">
        <div className="App_Header">
          <button onClick={this.handleClick} id="new-quote">
            New Quote
          </button>
          <a  id="tweet-quote" href={this.state.tweet} target="_blank">
            Tweet Quote
          </a>
        </div>
        <div id="text" className="App_Text">
          <blockquote>
            <p>{this.state.quote}</p>
          </blockquote>
        </div>
        <div id="author" className="App_Author">
          <em>{this.state.author}</em>
        </div>
      </div>
    );
  }
}

export default App;
