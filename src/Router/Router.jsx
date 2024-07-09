import { Route, Routes } from 'react-router-dom';
import Category from "../Page/Category";
import Home from "../Page/Home";
import Product from '../Page/Product';

function Router() {
    return (
      <div>
       <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/products' element={<Product/>} />
          <Route  path='/category' element={<Category/>} />
       </Routes>
      </div>
    )
  }
  

export default Router;
