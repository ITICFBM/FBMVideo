import React  from 'react';
import '../assets/styles/components/Categories.scss'

/** pasamos children por asignación  que es un componente hijo */
const Categories = ({ children,title }) =>(
  <div className="categories">
        <h3 className="categories__title">{title}</h3>
  {children}
  </div>

);

export default Categories;
