import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cde",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 8,
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    width: 320,
    shadowColor: '#807060',
    backgroundColor: '#fff'
  },
  cardImage: {
    width: 318,
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  }, 
  cardTitle: {
    fontSize:28,
    fontWeight: '600',
    padding: 4,
    alignSelf: 'center'
  },
  cardSubtitles: {
    fontSize: 16,
    padding: 4,
    alignSelf: 'center'
  }
});

export default styles