import React from 'react';

const SearchItem = ({ name, src, alt }) => {
   return(
      <div>
         <p>{name}</p>
         <img src={src} alt={alt} style={{width: '50px', height: '50px'}} />
      </div>
   );
}

export default SearchItem;