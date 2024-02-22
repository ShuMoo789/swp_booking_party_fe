import { useState } from 'react';
import PropTypes from "prop-types";
import { Input, Icon } from 'semantic-ui-react';
import styles from './Search.module.css';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

Search.propTypes.onSearch = PropTypes.func;

export default Search;