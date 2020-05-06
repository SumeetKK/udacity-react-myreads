import React, {Component} from 'react'
import Book from './Book'

class SearchBooks extends Component{
    
    update = this.props.update;

    render(){
        return <div className="search-books">
          <div className="search-books-bar">
            <button className="close-search" onClick={this.props.toggleSearch}>Close</button>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={this.props.search} />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {(!this.props.searchedBooks.error) && this.props.searchedBooks.map((book) =>
                    <li key={book.id}><Book book={book} update={this.props.update}/></li>
                )
              }
            </ol>
          </div>
        </div>
    }
}

export default SearchBooks