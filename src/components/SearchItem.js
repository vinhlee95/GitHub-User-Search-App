import React from 'react';

const SearchItem = ({ name, src, alt, profileLink }) => {
   return(
      <div className="user-item">
      <a href={profileLink}>
         <p>{name}</p>
         <img src={src} alt={alt} style={{width: '80px', height: '80px'}} />
      </a>
      </div>
   );
}

export default SearchItem;