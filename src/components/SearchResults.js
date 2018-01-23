import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from './SearchItem';

class SearchResults extends Component {   

   renderList(user) {
      return user.items.map(item => {
         console.log(item);
         return(
            // <div key={item.id}>
            //    <p>{item.login}</p>
            //    <img src={item.avatar_url} style={{width: '50px', height: '50px'}} alt={item.login} />
            // </div>
            <SearchItem key={item.id} name={item.login} src={item.avatar_url} alt={item.login}/>
         );
      })
   }

   render() {
      return(
         <div>
            {this.props.users.map(this.renderList)}
            
         </div>
      );
   }
}

const mapStateToProps = ({ users }) => {
   return {
      users
   }
}

export default connect(mapStateToProps)(SearchResults);