import React from 'react';

const SearchItem = ({ name, src, alt }) => {
   return(
      <div className="user-item">
         <p>{name}</p>
         <img src={src} alt={alt} style={{width: '80px', height: '80px'}} />
      </div>
   );
}

export default SearchItem;