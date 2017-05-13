/**
 * Home
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import HomeDetails from './XMGHomeDetails';

export default class Home extends Component {
	static navigationOptions = {
		title: '首页'
	}
	
	// 跳转到二级界面
	pushToDetails() {
		/*this.props.navigator.push({
			title: '',
			component: HomeDetails,
		});*/
	}
	
	render() {
		return(
			<View style={styles.container}>
				<TouchableOpacity onPress={this.pushToDetails()}>
			        <Text style={styles.welcome}>
			          	首页
			        </Text>
				</TouchableOpacity>
		    </View>
		);
	}
}

const styles = StyleSheet.create({});