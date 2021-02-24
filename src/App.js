import React, { Component } from 'react';
import axios from 'axios';
import { Newscard } from './components/Newscard';
import { Navbar } from './components/navbar';
import { Gallery } from './components/gallery';
import { Footer } from './components/footer';

const API_KEY = 'c36e8106f98b4822995d69462af3957e';
const API_URL = 'http://newsapi.org/v2/everything';
const SORTBY = 'popularity';
const DATE = '2021 - 02 - 18';
class Search extends Component {
  state = {
    query: '',
    results: [],
  };

  getInfo = () => {
    axios
      .get(
        `${API_URL}?` +
          `q=${this.state.query}&` +
          `from=${DATE}&` +
          `sortBy=${SORTBY}&` +
          `apiKey=${API_KEY}`
      )

      .then(({ data }) => {
        this.setState({
          results: data.articles,
        });

        // console.log(data.articles);
      });
  };

  handleInputChange = (e) => {
    if (this.search.value !== null) {
      this.setState(
        {
          query: this.search.value,
        },
        () => {
          if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 3 === 0) {
              this.getInfo();
            }
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Gallery />
        <form className='container '>
          <div className='row d-flex  justify-content-center  '>
            <input
              type='search'
              placeholder='Search News..'
              className='form-control  
              form-control-lg  align-self-center w-50'
              ref={(input) => (this.search = input)}
              onKeyPress={this.handleInputChange}
            />
          </div>
        </form>
        <br />
        {this.state.results.map((value) => (
          <Newscard
            key={value.url}
            Title={value.title}
            content={value.content}
            img={value.urlToImage}
            author={value.author}
            date={value.publishedAt}
          />
        ))}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Search;
