import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addCity} from './actions';

class ReduxSaveCity extends Component {
  state = {
    placeCity: '',
  };
  placeSubmitHandler = () => {
    if (this.state.placeCity.trim() === '') {
      return;
    }

    this.props.add(this.state.placeCity);
  };

  placeCityChangeHandler = city => {
    this.setState({
      placeCity: city,
    });
  };

  placesOutput = () => {
    return (
      <FlatList
        style={styles.listContainer}
        data={this.props.dataCity}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => <ListItem placeName={info.item.kota} />} //kota dapet dari file cityReducers
      />
    );
  };

  render() {
    console.log('Data Props Reducer');
    console.log(this.props.dataCity);

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
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
    dataCity: data.listCity.places,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: city => {
      dispatch(addCity(city)); //addCity dari index.js di folder action
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSaveCity);
