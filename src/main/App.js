// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
  const [matches, setMatches] = useState([]);
  const [location, setLocation] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    axios.get('http://your-backend-url/api/matches')
      .then(response => setMatches(response.data))
      .catch(error => console.error(error));
  }, []);

  const createMatch = () => {
    axios.post('http://your-backend-url/api/matches', { location, dateTime })
      .then(response => setMatches([...matches, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <View>
      <Text>Create a new match:</Text>
      <TextInput placeholder="Location" value={location} onChangeText={setLocation} />
      <TextInput placeholder="Date and Time" value={dateTime} onChangeText={setDateTime} />
      <Button title="Create Match" onPress={createMatch} />

      <FlatList
        data={matches}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.location} - {item.dateTime}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default App;
