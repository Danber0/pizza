// rfce
import React from 'react';

function Categories({ items, onClickItem }) {
  const [activeitem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeitem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeitem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`
              }>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
