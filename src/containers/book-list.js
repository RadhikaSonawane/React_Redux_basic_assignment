import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                    <li key={book.title}  href="#"onClick={() =>this.props.selectBook(book)} className="list-group-item col-6 bg-dark">  
                           <span >{book.title}</span>
                    </li>
                
            );
        });
    }


render(){
    return(
        <ul className="list-group col-sm-4" >
        {this.renderList()}
        </ul>
    )
}
}

function mapStateToProps(state){
    console.log("state---", state);
    return{
        books :state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList)