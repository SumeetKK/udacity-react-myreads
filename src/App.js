import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
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
    read: [],
    wantToRead: [],
    currentlyReading: [],
    searchedBooks: [],
  }

  componentDidMount(){
    this.getBooks();
    this.arrangeShelfs();
  }

  getBooks =async () => {
    await BooksAPI.getAll().then((books) => this.setState({books}));
    await this.arrangeShelfs();
  }

  arrangeShelfs = () => {
    this.setState({'currentlyReading': this.state.books.filter((book) => book.shelf === 'currentlyReading')});
    this.setState({'read': this.state.books.filter((book) => book.shelf === 'read')});
    this.setState({'wantToRead': this.state.books.filter((book) => book.shelf === 'wantToRead')});

  }

  update = async (book, string) => {
    await BooksAPI.update(book, string);  
    await this.getBooks();
  }


  search = (event) => {
    (event.target.value) && BooksAPI.search(event.target.value).then((searchedBooks) => this.setState({searchedBooks}))
  }

toggleSearch = () => {
  console.log("Search Toggled");
  this.setState({ showSearchPage: !this.state.showSearchPage})
};

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks 
            search = {this.search}
            searchedBooks = {this.state.searchedBooks}
            toggleSearch = {this.toggleSearch}
            update = {this.update}
          />
        ) : (
          <ListBooks 
            currentlyReading = {this.state.currentlyReading}
            wantToRead = {this.state.wantToRead}
            read = {this.state.read}
            update={this.update}
            toggleSearch = {this.toggleSearch}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
