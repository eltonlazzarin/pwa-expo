import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

import styles from './styles';

interface Repository {
  avatar_url: string;
  full_name: string;
}

const Main: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/eltonlazzarin/repos').then(
      (response) => {
        response.json().then((data) => {
          setRepositories(data);
        });
      }
    );
  }, []);

  return (
    <FlatList
      contentContainerStyle={{ padding: 24 }}
      data={repositories}
      keyExtractor={(repo) => repo.full_name}
      renderItem={({ item: repo }) => (
        <View style={styles.repo}>
          <Image
            style={styles.avatar}
            source={{ uri: repo.owner.avatar_url }}
          />
          <Text>{repo.full_name}</Text>
        </View>
      )}
    />
  );
};

export default Main;
