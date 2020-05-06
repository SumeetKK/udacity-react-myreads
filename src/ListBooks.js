import React, {Component} from 'react'
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
            <Shelf books={this.props.wantToRead}title="Want to Read"  update={this.update} />
            <Shelf books={this.props.read} update={this.update}/>
          </div>
        </div>
        <div className="open-search">
          <button onClick={this.props.toggleSearch}>Add a book</button>
        </div>
      </div>
    }
}

export default ListBooks