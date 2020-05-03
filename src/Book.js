import React, {Component} from 'react'

class Book extends Component{

    book = this.props.book
    
    render(){
        return <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.book.imageLinks['thumbnail']})` }}></div>
                <div className="book-shelf-changer">
                    <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{this.book.title}</div>
            <div className="book-authors">{this.book.authors || ""}</div>
        </div>
            }
}

export default Book