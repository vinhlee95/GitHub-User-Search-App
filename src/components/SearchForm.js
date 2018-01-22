import React, { Component } from 'react';
import { fetchUsers } from '../actions';
import { connect } from 'react-redux';

class SearchForm extends Component {
   constructor(props) {
      super(props);
      this.state = {term : ''};
   }
   handleChange(e) {
      this.setState({term: e.target.value});
   }
   handleSubmit(e) {
      this.setState({term: ''});
      e.preventDefault();
      this.props.fetchUsers(this.state.term);
   }

   render() {
      return(
         <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
               <input 
                  type="text"
                  placeholder="User Name"
                  onChange={e => this.handleChange(e)}
                  value={this.state.term}
               />
               <button type="submit">Search</button>
            </form>
         </div>
      );
   }
}


export default connect(null, { fetchUsers })(SearchForm);