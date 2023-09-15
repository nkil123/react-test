// PlayerItem.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Player = ({ player,navigation }) => {
    const handleCardPress = (player) => {
        navigation.navigate('Matches', { player });
    };
  return (
    <TouchableOpacity onPress={() => handleCardPress(player)}>
    <View style={styles.container}>
      <View style={styles.row}>
          <Image source={{ uri: player.icon }} style={styles.icon} />
          <View style={styles.playerInfo}>
            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.score}>{player.points}</Text>
          </View>
        </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default Player;
