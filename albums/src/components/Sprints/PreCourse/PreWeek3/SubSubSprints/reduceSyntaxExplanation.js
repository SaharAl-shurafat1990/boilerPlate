import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, CardSection, Playquiz } from '../../../../common';
import { Image } from 'react-native';

export default class ReduceSyntaxExplanation extends Component {
  render() {
    return (
      <CardSection>
        <Text style={Styles.text}>
          <Text style={Styles.array}>
            <Text style={[Styles.boldText, Styles.array]}>
              array:&nbsp;
              </Text>
            the array you want to execute  the reduce function on it.{'\n'}{'\n'}
          </Text>
          <Text style={Styles.reduce}>
            <Text style={[Styles.boldText, Styles.reduce]}>
              reduce:&nbsp;
              </Text>
            reserved key work to execute  the reduce function.{'\n'}{'\n'}
          </Text>
          <Text style={Styles.cb}>
            <Text style={[Styles.boldText, Styles.cb]}>
              cb (callback):&nbsp;
              </Text>
            function to execute it on each element in the array,&nbsp;
              <Text style={[Styles.boldText, Styles.array]}>
              don’t forget to use return inside it.{'\n'}{'\n'}
            </Text>
          </Text>
          <Text style={Styles.acc}>
            <Text style={[Styles.boldText, Styles.acc]}>
              acc (accumulator):&nbsp;
              </Text>
            the accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.{'\n'}{'\n'}
          </Text>
          <Text style={Styles.elem}>
            <Text style={[Styles.boldText, Styles.elem]}>
              elem (currentValue):&nbsp;
              </Text>
            the current element being processed in the array.{'\n'}{'\n'}
          </Text>
          <Text style={Styles.i}>
            <Text style={[Styles.boldText, Styles.i]}>
              i (currentIndexOptional):&nbsp;
              </Text>
            the index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.{'\n'}{'\n'}
          </Text>
          <Text style={Styles.iv}>
            <Text style={[Styles.boldText, Styles.iv]}>
              iv (initialValueOptional):&nbsp;
              </Text>
            value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce() on an empty array without an initial value is an error.
            </Text>
        </Text>
      </CardSection>
    );
  }
}

const Styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    color: 'black'
  },
  boldHeader: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
  text: {
    color: 'black'
  },
  array: {
    color: 'red',
  },
  reduce: {
    color: 'blue',
  },
  cb: {
    color: 'green',
  },
  acc: {
    color: '#9932CC',
  },
  elem: {
    color: '#FF8C00',
  },
  i: {
    color: 'red',
  },
  iv: {
    color: '#FF00FF',
  },
});