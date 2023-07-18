import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const Menu = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option.value);
    };
  
    return (
      <View>
        <DropDownPicker
          items={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          defaultValue={selectedOption}
          onChangeItem={handleOptionSelect}
        />
      </View>
    );
  };
  
  export default Menu;