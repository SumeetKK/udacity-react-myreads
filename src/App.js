import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import Error404 from './Error404'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    read: [],
    wantToRead: [],
    currentlyReading: [],
    searchedBooks: [],
  }

  componentDidMount(){
    this.getBooks();
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
    console.log(event.target.value);
    (event.target.value) && BooksAPI.search(event.target.value).then((searchedBooks) => {
      //Preventing the Error
      if(searchedBooks.length !== undefined)
      {
        for(let book of searchedBooks)
        {
          if(this.state.books.length < 1)
          {
            this.getBooks();
          }
          for(let shelvedBook of this.state.books)
          {
            if(book.id === shelvedBook.id)
            {
              book.shelf = shelvedBook.shelf;
            }
          }
        }
      }
      this.setState({searchedBooks})
    })

    if(event.target.value === '')
    {
      this.setState({searchedBooks: []})
    }
  }

  toggleSearch = () => {
    this.setState({ showSearchPage: !this.state.showSearchPage})
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/search">
              <SearchBooks 
                search = {this.search}
                searchedBooks = {this.state.searchedBooks}
                toggleSearch = {this.toggleSearch}
                update = {this.update}
              />
            </Route>
            <Route exact path="/">
              <ListBooks 
                currentlyReading = {this.state.currentlyReading}
                wantToRead = {this.state.wantToRead}
                read = {this.state.read}
                update={this.update}
                toggleSearch = {this.toggleSearch}
              />
            </Route>
            <Route component={Error404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default BooksApp
