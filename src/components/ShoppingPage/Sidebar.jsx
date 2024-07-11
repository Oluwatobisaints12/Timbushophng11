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
        </ul>
      </nav>
      <div className='category-bottom-line'></div>

      <section className='filter-section'>
        <h1>Filter by:</h1>
     
          <div className='side-input-row'>
            <h1>Input</h1>
            <img src={splitUp} alt="" />
          </div>
     
        <div className='input-check-con'>
        <div className='check-row'>
          <input type="checkbox" id="plainCheckbox" />
          <label className='input-label' htmlFor="plainCheckbox">Plain</label>
        </div>
        <div className='check-row'>
          <input type="checkbox" id="patternCheckbox" />
          <label className='input-label' htmlFor="patternCheckbox">Pattern</label>
        </div>
        </div>
      </section>

      <section>

        <div className='input-slideup'>
          <h1>Size</h1>
          <img src={splitUp} alt="" />
        </div>
      
        <section className='checkbox-selection-con'>
        <div className='checkbox-selection'>
          <input type="checkbox" id="smallCheckbox" />
          <label className='input-label' htmlFor="smallCheckbox">Small</label>
        </div>
          <div className='checkbox-selection'>
            <input type="checkbox" id="mediumCheckbox" />
            <label className='input-label' htmlFor="mediumCheckbox">Medium</label>
          </div>
          <div className='checkbox-selection'>
            <input type="checkbox" id="largeCheckbox" />
            <label className='input-label' htmlFor="largeCheckbox">Large</label>
          </div>
          <div className='checkbox-selection'>
            <input type="checkbox" id="extralargeCheckbox" />
            <label className='input-label' htmlFor="extralargeCheckbox">Extralarge</label>
          </div>
          <div className='checkbox-selection'>
            <input type="checkbox" id="customCheckbox" />
            <label className='input-label' htmlFor="customCheckbox">Custom</label>
          </div>
        </section>
      </section>

    </aside>
  )
}

export default Sidebar
