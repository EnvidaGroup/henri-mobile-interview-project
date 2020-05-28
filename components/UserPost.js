import React from 'react';
import PropTypes from 'prop-types';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Avatar, Divider, Caption, Paragraph, Button, Card, Title, Menu, Portal, Dialog} from 'react-native-paper';
import StyledText from "react-native-paper/src/components/Typography/StyledText";
const UserPost = props => {
const [postOptionsOpen, setPostOptionsOpen] = React.useState(false)

const getFirstLastInitials = (name) => {
	return name.split(' ').map(name => name[0]).join('')
}

const AvatarImage = () => {
	return props.userImage !== undefined  ?
		<Avatar.Image {...props} style={styles.avatar} size={50} source={{uri: props.userImage}} />
	: <Avatar.Text {...props} size={50} label={props.name ? getFirstLastInitials(props.name ? props.name : props.title) : null} />
}

const deletePost = (postId) => {

}

const PostOptions = () => {
	return (
		<View>
			<Button icon='dots-vertical' onPress={setPostOptionsOpen()}/>
		</View>
	)
}

const getComments = (post) => {

}

	return (
			<Card style={styles.container}>
				<Card.Content>
					<Card.Title
						subtitle={props.date}
						title={<Text style={styles.userNameText}>{props.name}</Text>}
						left ={AvatarImage}
						right={PostOptions}
					/>
					<View style={{ paddingTop: '2%', paddingBottom: '-20%', overflow: 'scroll'}}>
						<Divider/>
						<View style={styles.descriptionContainer}>
							<Title>{props.title}</Title>
							<Paragraph style={styles.description}>{props.description}</Paragraph>
						</View>
					</View>
				</Card.Content>

				<Card.Actions style={{justifyContent: 'space-evenly'}}>
					<Button mode='text' icon='thumb-up-outline' color='black' />
					<Button mode='outlined' color='#2e78b7' >Comment</Button>
					<Button mode='text' icon='thumb-down-outline' color='black' />
				</Card.Actions>
				<Portal>
					<Dialog
						visible={postOptionsOpen}
						onDismiss={() => setPostOptionsOpen(false)}>
						<Dialog.Title>Post Options</Dialog.Title>
						<Dialog.Actions>
							<Button icon='delete' onPress={() => {}}/>
							<Button onPress={() => setPostOptionsOpen(false)}>Cancel</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</Card>
	);
};

const styles = StyleSheet.create({
	container: {borderBottomWidth: 0.35, borderBottomColor: 'rgb(0,0,0)', borderTopWidth: 0.35, borderTopColor: 'rgb(0,0,0)'},
	avatar: {direction: 'ltr', marginLeft: '2%', marginTop: '2%', marginBottom: '1%'},
	userNameText: {fontWeight: 'bold', fontSize: 15, marginTop: '2%'},
	descriptionContainer: {marginLeft: '2%', flexWrap: 'nowrap', marginRight: '2%'},
	description: {fontSize: 17,  },
	date: {position: 'relative', top: '-5%'}
})

UserPost.propTypes = {
	userImage: PropTypes.string
};

export default UserPost;
