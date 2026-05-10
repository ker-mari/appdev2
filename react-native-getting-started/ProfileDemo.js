
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileCard}>
        
        <Text style={styles.header}>Student Profile</Text>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Course & Section:</Text>
          <Text style={styles.value}>BSIS - 3A</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>Kermari Magmayo</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>20</Text>
        </View>

        <View style={styles.infoGroup}>
          <Text style={styles.label}>Favorite Hobby:</Text>
          <Text style={styles.value}>Basketball and Painting</Text>
        </View>

        <View style={styles.bioContainer}>
          <Text style={styles.label}>Short Bio & Pet Peeves:</Text>
          <Text style={styles.bioText}>
          I'm in to Designing or anything related with arts.
          </Text>
          <Text style={styles.peeve}>• Groupmates who "seen" messages but don't reply.</Text>
          <Text style={styles.peeve}>• Loud typing during a silent exam.</Text>
          <Text style={styles.peeve}>• Smelly foods.</Text>
        </View>

      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 50,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 25,
    borderRadius: 20,
  
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a73e8',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  infoGroup: {
    flexDirection: 'row',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    width: 130,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  bioContainer: {
    marginTop: 20,
  },
  bioText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  peeve: {
    fontSize: 14,
    color: '#d93025',
    marginLeft: 10,
    marginTop: 4,
  },
});