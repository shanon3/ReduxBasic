import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native';
import ListItem from './component/ListItem';
import {connect} from 'react-redux';
import {addPlace} from './actions';

class ReduxSavePlaces extends Component {
  state = {
    placeName: '',
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    console.log(this.state);

    this.props.add(this.state.placeName);
  };

  placeNameChangeHandler = name => {
    this.setState({
      placeName: name,
    });
  };

  placesOutput = () => {
    return (
<FlatList
        style={styles.listContainer}
        data={this.props.dataPlaces}
        keyExtractor={(item, index) => index.toString()}
        renderItem={info => <ListItem placeName={info.item.valuePlace} />} //kota dapet dari file cityReducers
      />
    );
  };

  render() {
    console.log('Data Props Reducer');
    console.log(this.props.dataPlaces);
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nama"
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: name => {
      //addCity dari index.js di folder action
      dispatch(addPlace(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxSavePlaces);
