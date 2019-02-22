import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native'
import {Button, Input} from './src/components/common'
import coachMiiLogo from './assets/couchMiLogo.png'

const activeState = {
  login: 0,
  register: 1,
}


export default class App extends React.Component {
  state = {
    activeState: activeState.login
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
                style={{
                  width: null,
                  height: null,
                  flex: 1,
                }}
                resizeMode={'cover'}
                source={coachMiiLogo}
            />
            <View style={styles.headerButtons}>
              <View style={{flex: 1}}>
                <Button
                    onPress={()=> {
                      this.setState({
                        activeState: activeState.login
                      })
                    }}
                    style={this.state.activeState === activeState.login ? {color: '#007aff'} : {color: '#a6a6a6'}}
                >
                  LOGIN
                </Button>
              </View>
              <View style={{flex: 1}}>
                <Button
                    onPress={()=> {
                      this.setState({
                        activeState: activeState.register
                      })
                    }}
                    style={this.state.activeState === activeState.register ? {color: '#007aff'} : {color: '#a6a6a6'}}
                >
                  REGISTER
                </Button>
              </View>
            </View>
          </View>
          {this.state.activeState === activeState.login &&
          <View style={styles.main}>
            <Input
                placeholder={'email@example.com'}
                value={this.props.email}
            />
            <Input
                secureText
                placeholder={'password'}
                value={this.props.passsword}
                // onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
            />
            <Button>
              Terms & Conditions
            </Button>
            <Text style={{alignSelf: 'stretch', textAlign: 'center'}}>
              By logging in you accept the Terms & Conditions
            </Text>
            <Button filled>
              GET STARTED
            </Button>
          </View>
          }
          {this.state.activeState === activeState.register &&
          <View style={styles.main}>
            <Input
                placeholder={'name'}
                value={this.props.name}
            />
            <Input
                placeholder={'surname'}
                value={this.props.surname}
                // onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
            />
            <Input
                placeholder={'email'}
                value={this.props.email}
                // onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
            />
            <Input
                secureText
                placeholder={'password'}
                value={this.props.passsword}
                // onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
            />
            <Input
                secureText
                placeholder={'confirm password'}
                value={this.props.confirmedPassword}
                // onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
            />
            <Input
                placeholder={'date of birth'}
                value={this.props.dateOfBirth}
                // onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
            />
            <Button style={{marginBottom: 10}}>
              Terms & Conditions
            </Button>
            <Button filled >
              REGISTER
            </Button>
          </View>
          }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 2,
  },
  headerButtons: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  main: {
    flex: 3,
    marginTop: 10,
    marginBottom: 20,
    paddingRight: 60,
    paddingLeft: 60,
    paddingBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  controls: {
    alignSelf: 'center'
  }
});