import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import Shelf from './Shelf'

class ListBooks extends Component{
    
    update = this.props.update;

    render(){
        return <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf books={this.props.currentlyReading} title="Currently Reading" update={this.update}/>
            <Shelf books={this.props.wantToRead} title="Want to Read"  update={this.update} />
            <Shelf books={this.props.read} title="Read" update={this.update}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link>
        </div>
      </div>
    }
}

ListBooks.propTypes = {
  update: PropTypes.func.isRequired,
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired
};

export default ListBooks