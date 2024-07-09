import React from 'react'
import { Link } from 'react-router-dom'
import splitUp from '../../Images/splitup.svg'

const Sidebar = () => {
  return (
    <aside>
      <h1>Category</h1>
       <nav>
        <ul>
            <li><Link to="/tops">Tops</Link></li>
            <li><Link to="/bottoms">Bottoms</Link></li>
            <li><Link to="/gowns">Gowns</Link></li>
            <li><Link to="/twopieces">Two pieces</Link></li>
            <li><Link to="/suits">Suits</Link></li>

            <li><Link to="/accessories">Accessories</Link></li>
            <div className='category-bottom-line'></div>
        </ul>
       </nav>
     <section>
     <h1>Filter by:</h1>
       <div className='input-slideup'>
       <h1>Input</h1>
       <img src={splitUp} alt="" />
       </div>
       <input type="checkbox" id="plainCheckbox" />
<label htmlFor="plainCheckbox">Plain</label>
<input type="checkbox" id="patternCheckbox" />
<label htmlFor="patternCheckbox">Pattern</label>
     </section>

     <section>
     
       <div className='input-slideup'>
       <h1>Size</h1>
       <img src={splitUp} alt="" />
       </div>
       <input type="checkbox" id="smallCheckbox" />
<label htmlFor="smallCheckbox">Small</label>
<input type="checkbox" id="mediumCheckbox" />
<label htmlFor="mediumCheckbox">Medium</label>
<input type="checkbox" id="largeCheckbox" />
<label htmlFor="largeCheckbox">Large</label>
<input type="checkbox" id="extralargeCheckbox" />
<label htmlFor="extralargeCheckbox">Extralarge</label>
<input type="checkbox" id="customCheckbox" />
<label htmlFor="customCheckbox">Custom</label>
     </section>

    </aside>
  )
}

export default Sidebar
