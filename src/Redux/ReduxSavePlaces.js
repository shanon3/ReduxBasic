import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addPlace, addCity} from './actions';

class ReduxSavePlaces extends Component {
  state = {
    placeName: '',
    placeCity: '',
    places: [],
  };
  placeSubmitHandler = () => {
    if (
      this.state.placeName.trim() === '' &&
      this.state.placeCity.trim() === ''
    ) {
      return;
    }
    console.log(this.state);
    
    this.props.add(this.state.placeName);
//    this.props.add(this.state.placeCity);
  };

  placeNameChangeHandler = name => {
    this.setState({
      placeName: name,
    });
  };

  placeCityChangeHandler = city => {
    this.setState({
      placeCity: city,
    });
  };

  placesOutput = () => {
    return (
      <View>
        {/* <View> */}
        <FlatList
          style={styles.listContainer}
          data={this.props.dataCity}
          keyExtractor={(item, index) => index.toString()}
          renderItem={info => <ListItem placeName={info.item.kota} />} //kota dapet dari file cityReducers
        />
        {/* </View> */}

        {/* <View> */}
        {/* <FlatList
          style={styles.listContainer}
          data={this.props.dataPlaces}
          keyExtractor={(item, index) => index.toString()}
          renderItem={info => <ListItem placeName={info.item.valuePlace} />}
        /> */}
      </View>
      // </View>
    );
  };

  render() {
    console.log('Data Props Reducer');
    console.log(this.props.dataPlaces);
    console.log(this.props.dataCity);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nama"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />

          <TextInput
            placeholder="Kota"
            style={styles.placeInput}
            value={this.state.placeCity}
            onChangeText={this.placeCityChangeHandler}
          />

          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{this.placesOutput()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
  listContainer: {
    width: '100%',
  },
});

//export default ReduxSaveData
const mapStateToProps = data => {
  return {
    // places dapet dari array cityReducers, listCity dapet dari index.js dari folder reducers
    dataPlaces: data.listPlaces.places,
    dataCity: data.listCity.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: (city, name) => {
      dispatch(addCity(city)); //addCity dari index.js di folder action
      dispatch(addPlace(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSavePlaces);
