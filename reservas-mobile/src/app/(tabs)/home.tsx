// App.js
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function Home() {
  const cards = [
    { title: 'Card 1', content: 'This is the content of card 1' },
    { title: 'Card 2', content: 'This is the content of card 2' },
    { title: 'Card 3', content: 'This is the content of card 3' },
    // { title: 'Card 4', content: 'This is the content of card 4' },
    // Add more cards as needed
  ];

  return (
    <ImageBackground
    source={{
      uri: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }}
    style={styles.container}
  >
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card style={styles.card} key={index}>
          <Card.Content>
            <Title>{card.title}</Title>
            <Paragraph>{card.content}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 16,
  },
  card: {
    flex: 1,
    marginVertical: 8,
    justifyContent: 'center',
  },
});


