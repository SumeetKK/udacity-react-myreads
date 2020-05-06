import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component{
    
    update = this.props.update;
    render(){
        return <div className="search-books">
          <div className="search-books-bar">
            <Link to="/"><button className="close-search">Close</button></Link>
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