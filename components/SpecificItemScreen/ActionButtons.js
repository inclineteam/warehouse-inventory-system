import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from 'react';

const ActionButtons = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.wrapper}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete (Item name) ?</Text>
            <Text style={styles.modalText2}>Note: Please note tha any data on the item will be deleted and cant be recovered.</Text>
            <View style={{ flexDirection:"row", marginTop:22 }}>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Ionicons.Button
        style={styles.btn}
        name="pencil-outline"
        backgroundColor="#fff"
        color="#000"
        borderRadius={9999}
      >
        <Text style={{ fontFamily: "Hanken-Semibold" }}>Modify</Text>
      </Ionicons.Button>
      <View style={{ marginLeft: 4 }}>
        <Ionicons.Button
          style={styles.btn}
          name="trash-outline"
          backgroundColor="#fff"
          color="#000"
          borderRadius={9999}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ fontFamily: "Hanken-Semibold" }}>Delete</Text>
        </Ionicons.Button>
      </View>
      <View style={{ marginLeft: 4 }}>
        <Ionicons.Button
          style={styles.btn}
          name="print-outline"
          backgroundColor="#fff"
          color="#000"
          borderRadius={9999}
        >
          <Text style={{ fontFamily: "Hanken-Semibold" }}>Print</Text>
        </Ionicons.Button>
      </View>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2824C3",
    padding: 4,
    paddingLeft: 18,
    paddingRight: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 250,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    
    elevation: 2,
    marginLeft: 10,
   
  },
  buttonOpen: {
    backgroundColor: '#ffffff',
    borderColor: '#2824c2',
    borderWidth: 1,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#5d5d5d',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    textAlign: 'center',
  },
  modalText2: {
    textAlign: 'center',
    fontSize: 15,
    padding: 5,

  },
});
