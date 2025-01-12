import React from 'react'

const CandidatePage = () => {
  return (
    <>
    
    <div className="filters">
        <div className="filter-select">
          <select name="status" className="select">
            <option value="new">New</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
          </select>
          <select name="position" className="select">
            <option value="position">Position</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="hr">HR</option>
          </select>
        </div>

        <div className="search-add">
          {/* <div className="search-container">
            <Search className="search-icon" />
         <input
              name="search"
              type="search"
              className="search-input"
              placeholder="Search"
            /> 
            
          </div> */}

          <SearchBar />
          <button className="add-button">Add Candidate</button>
        </div>
      </div>
    </>
  )
}

export default CandidatePage