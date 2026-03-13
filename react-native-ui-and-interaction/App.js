import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Style from './components/Style';
// import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import FlexDimensionsBasics from './components/FlexDimensionsBasics';
// import PercentageDimensionsBasics from './components/PercentageDimensionsBasics';
// import FixedDimensionsBasics from './components/FixedDimensionBasics';

export default function App() {
  return (
    // <ScrollView contentContainerStyle={styles.container}>
      // <Style/>
    //   <FixedDimensionsBasics/>
    //   <FlexDimensionsBasics/>
    // </ScrollView>
    <>
      <FlexDimensionsBasics/>
      {/* <PercentageDimensionsBasics/> */}
      {/* <FixedDimensionsBasics /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
});