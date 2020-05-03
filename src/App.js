import React from 'react'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'
import Book from './Book'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    searchedBooks: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => this.setState({books}))
  }

  search = (event) => {
    (event.target.value) && BooksAPI.search(event.target.value).then((searchedBooks) => this.setState({searchedBooks}))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.search} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {(!this.state.searchedBooks.error) && this.state.searchedBooks.map((book) =>
                      <li key={book.id}><Book book={book} /></li>
                  )
                }
              </ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books={this.state.books.filter((book) => book.shelf === 'currentlyReading')} title="Currently Reading"/>
                <Shelf books={this.state.books.filter((book) => book.shelf === 'wantToRead')} title="Want to Read"/>
                <Shelf books={this.state.books.filter((book) => book.shelf === 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
