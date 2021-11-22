import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeItem from '../../components/RecipeItem';

Enzyme.configure({ adapter: new Adapter() });

const recipe = [
  {
    idMeal: '52824',
    strMealThumb: 'https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg',
    strMeal: 'Beef Sunday Roast',
    strIngredient1: 'Beef',
    strIngredient2: 'Broccoli',
    strIngredient3: 'Potatoes',
    strIngredient4: 'Carrots',
    strIngredient5: 'plain flour',
    strIngredient6: 'Eggs',
    strIngredient7: 'milk',
    strIngredient8: 'sunflower oil',
    strInstructions: `"Preheat the oven to 150C/300F/Gas 2.
    Toss the beef and flour together in a bowl with some salt and black pepper.
    Heat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.
    Fry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.
    Return the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.
    Cover with a lid and place in the oven for two hours.
    Remove from the oven, check the seasoning and set aside to cool. Remove the thyme.
    When the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.
    Transfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.
    Trim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.
    For the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.
    Drain and toss with the butter, then season with black pepper.
    To serve, place a large spoonful of pie onto each plate with some green beans alongside."`,
  },
];

const setup = ({
  recipe, location, getRecipe, clearData,
}) => shallow(
  <RecipeItem.WrappedComponent
    recipe={recipe}
    location={location}
    getRecipe={getRecipe}
    clearData={clearData}
  />,
);

describe('Recipe Item Component', () => {
  let component;

  beforeEach(() => {
    component = setup({
      recipe,
      location: {
        pathname: `/recipe/${recipe.idMeal}`,
      },
      getRecipe: () => jest.fn(),
      clearData: () => jest.fn(),
    });
  });

  it('should render', () => {
    const element = component.find('.recipe-item');
    expect(element.length).toEqual(1);

    const img = component.find('.meal-img');
    expect(img.props().src).toEqual(recipe.strMealThumb);
  });
});
