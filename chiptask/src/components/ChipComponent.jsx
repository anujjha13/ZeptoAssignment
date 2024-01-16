import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import './ChipComponent.css'
function ChipComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [suggestions, setSuggestions] = useState(['Soham Newman', 'Ken Alvarez', 'Denise Hall', 'Tracy Bing', 'Letitia George', 'Calvin Jones']);
  const [usernames, setUsernames] = useState(['Soham Newman', 'Ken Alvarez', 'Denise Hall', 'Tracy Bing', 'Letitia George', 'Calvin Jones']); // Hardcoded usernames



  const handleRemoveOption = (selectedOption) => {
    const updatedOptions = selectedOptions.filter((option) => option !== selectedOption);
    setSelectedOptions(updatedOptions);

    // Add the removed option back to the suggestions array
    setSuggestions([...suggestions, selectedOption]);
  };

  const handleSelect = (selectedList) => {
    // Remove the selected options from the suggestions array
    const updatedSuggestions = suggestions.filter((suggestion) => !selectedList.includes(suggestion));
    setSuggestions(updatedSuggestions);

    // Update the selected options array
    setSelectedOptions(selectedList);
  };

  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-3">Pick Users</h3>
            
              <div className="col-md-5">
               
                <div className="text-dark" >
                 
                  <Multiselect 
                    placeholder={"Add new user"}
                    isObject={false}
                    options={usernames}
                    selectedValues={selectedOptions}
                    onSelect={handleSelect}
                    onRemove={handleRemoveOption}             
                  />
                </div>
              </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default ChipComponent;
