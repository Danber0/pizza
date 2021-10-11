// rfce
import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeitem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  console.log('RERENDER CATEGORIES');

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
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
