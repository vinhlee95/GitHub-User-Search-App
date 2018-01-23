import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchItem from './SearchItem';

class SearchResults extends Component {   

   renderList(user) {
      return user.items.map(item => {
         // console.log(item);
         return(
            <SearchItem 
               key={item.id} 
               name={item.login} 
               src={item.avatar_url} 
               alt={item.login}
               profileLink={item.html_url}/>
         );
      })
   }

   render() {
      return(
         <div className="user-list">
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