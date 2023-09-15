import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { PlayersJson, matchesJson } from '../../mockData';

const MatchesScreen = ({ route }) => {
  const { player } = route.params;

  const selectedPlayerId = player?.id; // Replace with the ID of the selected player
  const filteredMatches = matchesJson.filter(
    (match) =>
      match.player1.id === selectedPlayerId || match.player2.id === selectedPlayerId
  );

  filteredMatches.sort((a, b) => b.match - a.match);

  // Sample match data for the selected player
  const renderItem = ({ item }) => {
    const isPlayer1 = item.player1.id === selectedPlayerId;
    const isPlayer2 = item.player2.id === selectedPlayerId;
    const player1Score = item.player1.score;
    const player2Score = item.player2.score;
    const player1Name = PlayersJson.find((player) => player.id === item.player1.id).name;
    const player2Name = PlayersJson.find((player) => player.id === item.player2.id).name;
    let resultColor = 'white'; // Default color for draws

    if ((isPlayer1 && player1Score > player2Score) || (isPlayer2 && player2Score > player1Score)) {
      resultColor = '#66ff66'; // Player won
    } else if ((isPlayer1 && player1Score < player2Score) || (isPlayer2 && player2Score < player1Score)) {
      resultColor = 'red'; // Player lost
    }

    return (
      <View
        style={{
          backgroundColor: resultColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        //   marginBottom: 8,
          padding: 8,
          backgroundColor: resultColor,
          height: 70,
        }}
      >
        <Text style={styles.player1}>{player1Name}</Text>
        <Text
          style={styles.score}
        >
          {item.player1.score} - {item.player2.score}
        </Text>
        <Text style={styles.player2}>{player2Name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matches</Text>
      <FlatList
        data={filteredMatches}
        renderItem={renderItem}
        keyExtractor={(item) => item.match.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    fontSize:18,
    padding:20
  },
  score:{
    width: 60, 
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize: 16,
  },
  player1:{ flex: 1, paddingRight: 8 },
  player2:{ width: 100, marginLeft:40 }
});

export default MatchesScreen;
