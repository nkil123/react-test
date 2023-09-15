// PlayersList.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import Player from './Player';
import { PlayersJson, matchesJson } from '../../mockData';

const PointsTable = ({navigation }) => {
  // Create a map to store points for each player by their ID
const pointsMap = new Map();

// Initialize points for each player to 0
PlayersJson.forEach((player) => {
  pointsMap.set(player.id, 0);
});

// Calculate points based on match results
matchesJson.forEach((match) => {
  const player1 = PlayersJson.find((player) => player.id === match.player1.id);
  const player2 = PlayersJson.find((player) => player.id === match.player2.id);

  if (match.player1.score > match.player2.score) {
    // Player 1 wins
    pointsMap.set(player1.id, pointsMap.get(player1.id) + 3);
  } else if (match.player1.score < match.player2.score) {
    // Player 2 wins
    pointsMap.set(player2.id, pointsMap.get(player2.id) + 3);
  } else {
    // It's a draw
    pointsMap.set(player1.id, pointsMap.get(player1.id) + 1);
    pointsMap.set(player2.id, pointsMap.get(player2.id) + 1);
  }
});

// Create a JSON representation of the points table data
const pointsTable = [];

PlayersJson.forEach((player) => {
  const points = pointsMap.get(player.id);
  const pointsTableRow = {
    ...player, // Include all fields from the player data
    points: points,
  };
  pointsTable.push(pointsTableRow);
});

// Sort the points table in descending order by points scored
pointsTable.sort((a, b) => b.points - a.points);

  return (
    <>
    <View style={styles.container}>
    <Text style={styles.header}>PointsTable</Text>
    <FlatList
      data={pointsTable}
      keyExtractor={(player) => player.id.toString()}
      renderItem={({ item }) =>  <Player player={item} navigation={navigation}/>
      }
    />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  header:{
    fontSize:18,
    padding:10,
    fontWeight:"bold"
  },
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor:'white'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding:10,
    backgroundColor:'white',
    borderBottomColor:"grey",
    borderBottomWidth:1
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  playerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
  },
  score: {
    fontSize: 18,
    color: 'black',
    fontWeight:"bold"
  },
});
export default PointsTable;
