const ainasepics = require("ainasepics")
ainasepics.get('pat')
.then(imageData => console.log(imageData.url)) // random pat gif url is logged.
.catch(err => console.error(err));
// imageData is this object:
/* {
      url: string
   }
*/

ainasepics.getMultiple({ name: 'fox', limit: 5 }) // Limit cannot be over 5
.then(search => console.log(search.results))
.catch(err => console.error(err));

/* search.results is an array of results:
[
  { url: 'link_here' },
  { url: 'link_here' },
  { url: 'link_here' },
  { url: 'link_here' },
  { url: 'link_here' }
]
*/
ainasepics.get('blush')
.then(imageData => console.log(imageData.url)) // random pat gif url is logged.
.catch(err => console.error(err));

ainasepics.get('facepalm')
.then(imageData => console.log(imageData.url)) // random pat gif url is logged.
.catch(err => console.error(err));


