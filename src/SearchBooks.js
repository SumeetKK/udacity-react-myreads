import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Book from './Book'

const SearchBooks = (props) =>
{
  const update = props.update;

  return <div className="search-books">
    <div className="search-books-bar">
      <Link to="/"><button className="close-search">Close</button></Link>
      <div className="search-books-input-wrapper">
        <input type="text" placeholder="Search by title or author" onChange={props.search} />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {(!props.searchedBooks.error) && props.searchedBooks.map((book) =>
              <li key={book.id}><Book book={book} update={update}/></li>
          )
        }
      </ol>
    </div>
  </div>
}

SearchBooks.propTypes = {
  update: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default SearchBooks