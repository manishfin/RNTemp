import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

import {intiateLoggin} from '../actions/actions';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={[styles.circleContainer, styles.rightContainer]} />
        </View>
        <View style={styles.mainContainer}>
          <View style={[styles.logo]}>
            <Image
              style={[styles.logo]}
              source={require('../assets/images/logo.png')}
            />
          </View>
          <View>
            <Text style={[styles.title]}>Login to your account</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={[styles.inputIcon]}>
              <Image
                style={[styles.email]}
                source={require('../assets/images/email.png')}
              />
            </View>
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({email})}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={[styles.inputIcon]}>
              <Image
                style={[styles.password]}
                source={require('../assets/images/password.png')}
              />
            </View>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
            />
          </View>

          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onClickListener('login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.bottomContainer}>
          <View style={[styles.circleContainer, styles.leftContainer]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    color: '#5C5C5C',
  },
  inputContainer: {
    borderColor: '#DCDCDC',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 1,
    width: 320,
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleContainer: {
    backgroundColor: '#0b214f',
    width: 80,
    // height: 50,
    flex: 1,
  },
  rightContainer: {
    borderBottomLeftRadius: 200,
    // flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftContainer: {
    borderTopRightRadius: 80,
    // flexDirection: 'row',
    alignItems: 'flex-end',
  },
  topContainer: {
    // backgroundColor: 'red',
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  bottomContainer: {
    // backgroundColor: '#00abcd',
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderColor: '#FFFFFF',
    flex: 1,
  },
  logo: {
    marginBottom: 30,
    width: 80,
    height: 80,
  },
  email: {
    width: 20,
    height: 15,
  },
  password: {
    width: 15,
    height: 20,
  },
  inputIcon: {
    backgroundColor: '#FFFFFF',
    width: 20,
    height: 20,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#DCDCDC',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 250,
    borderRadius: 25,
  },
  loginButton: {
    backgroundColor: '#0b214f',
  },
  loginText: {
    color: 'white',
  },
});

function mapDispatchToProps(dispatch) {
  return {
    logIn: () => {
      dispatch(intiateLoggin());
    },
  };
}

function mapStateToProps(state) {
  return {
    logIn: state.logIn,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
