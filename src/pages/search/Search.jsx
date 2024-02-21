import { useState } from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import "./Search.scss";

const options = [
  {
    key: 'service',
    text: 'Search by service',
    value: 'service',
    image: { src: 'https://media.istockphoto.com/id/1898261353/photo/decorated-table-for-a-baby-shower-celebration-at-a-modern-apartment.webp?b=1&s=170667a&w=0&k=20&c=_Kh3jm0MxbEK-wn5WABuBxRvly626N7Eytdgp4vzw30=' },
    description: 'Find the best service for your party',
    button: { content: 'Search', onClick: () => console.log('Search by service') },
  },
  {
    key: 'party host',
    text: 'Search by party host',
    value: 'party host',
    image: { src: 'https://www.filepicker.io/api/file/Z3oPBx6OQS2VsiQ1Sv8i' },
    description: 'Find the best party host for your party',
    button: { content: 'Search', onClick: () => console.log('Search by party host') },
  },
  {
    key: 'package',
    text: 'Search by package',
    value: 'package',
    image: { src: 'https://trangtrisinhnhat.com/wp-content/uploads/2023/03/z3963901709470_9de23cca9d2e47eb0c99b9e2df40bbb9.jpg' },
    description: 'Find the best package for your party',
    button: { content: 'Search', onClick: () => console.log('Search by package') },
  },
];
//Search
const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <div className={Search.container}>
      <Dropdown
        fluid
        selection
        search
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Search..."
        icon={<Icon name="search-icon" inverted circular link/>}
        className={Search.dropdown}
      />
    </div>
  );
};

export default Search;