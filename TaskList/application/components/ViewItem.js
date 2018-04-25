import React, { Component, PropTypes } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import * as uuid from 'uuid';

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    textinput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        margin: 2,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 0,
        paddingBottom: 0
    },
    completed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    completedtext: {
        fontSize: 16
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 24
    }
});

class ViewItem extends Component {
    constructor (props) {
        super(props);

        this.state = {
            id: this.props.item.id,
            text: this.props.item.text,
			date: this.props.item.date,
			notes: this.props.item.notes,
            completed: this.props.item.completed || false
        };
    }

    onSaveItem (e) {
        e.preventDefault();
		if(this.state.text == ' ' || this.state.text == ''){
			alert('The task name cannot be empty!');
		}
		else{
			this.props.onSaveItem({ id: this.state.id || uuid.v4(), text: this.state.text, date: this.state.date, notes: this.state.notes, completed: this.state.completed });
		}
    }

    onCancel (e) {
        e.preventDefault();
        if (this.props.onCancel !== null) {
            this.props.onCancel();
        }
    }

    render () {
        const title = !this.state.id ? 'New Task' : 'Edit Task';
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <TextInput
                    onChangeText={(text) => this.setState({ text: text })}
                    placeholder="Enter A Task Name"
                    autoCapitalize="sentences"
                    autoCorrect={true}
                    autoFocus={true}
                    keyboardType="default"
                    maxLength={50}
                    value={this.state.text}
                    style={styles.textinput} />
					
		
					<TextInput
					 onChangeText={(notes) => this.setState({notes: notes})}
					 placeholder="Enter Task Notes"
					 autoCapitalize="sentences"
					 autoCorrect={true}
					 autoFocus={false}
					  keyboardType="default"
                      maxLength={100}
                     value={this.state.notes}
                    style={styles.textinput}
					/>
					
					
				  <TextInput
					
					onChangeText={(date) => this.setState({date: date})}
					 placeholder="Enter A Date"
					 autoCorrect={false}
					 autoFocus={false}
					  keyboardType="numeric"
                      maxLength={8}
                     value={this.state.date}
                    style={styles.textinput}
					/>
                <View style={styles.completed}>
                    <Text style={styles.completedtext}>Completed?</Text>
                    <Switch
                        onTintColor='green'
                        onValueChange={(value) => this.setState({ completed: value })}
                        value={this.state.completed} />
                </View>
                <View style={styles.buttons}>
                    <Button
                        title="OK"
                        onPress={(e) => this.onSaveItem(e)}/>
                    <Button
                        color='#888888'
                        title="Cancel"
                        onPress={(e) => this.onCancel(e)}/>
                </View>
            </View>
        );
    }
}

ViewItem.propTypes = {
        item: PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
		date: PropTypes.string,
		notes: PropTypes.string,
        completed: PropTypes.bool
    }),
    onSaveItem: PropTypes.func,
};

ViewItem.defaultProps = {
    item: {},
    onSaveItem: null,
    onCancel: null
};

export default ViewItem;
