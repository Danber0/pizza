import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/action/filters';
import { fetchPizzas } from '../redux/action/pizzas';

const categoryNames = ['Meat', 'Veggie', 'Grill', 'Spicy', 'Closet'];
const sortItems = [
  { name: 'Popular', type: 'popular', order: 'desc' },
  { name: 'Price', type: 'price', order: 'desc' },
  { name: 'Alphabet', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category)); // eslint-disable-next-line
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index)); // eslint-disable-next-line
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type)); // eslint-disable-next-line
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
