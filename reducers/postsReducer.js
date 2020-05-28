import * as React from 'react'
const initialState = { loadingPosts: false, selectedPost: null, commentData: [], postsData: [] }
const postState = { loadingPosts: false, selectedPost: null, commentData: [], postsData: [] }


export default function postsReducer(state = postState, action) {

	switch (action.type) {
		case "ADD_POST": {
			return {
				...state,
				postsData: action.payload
			};
		}
		case "DELETE_POST": {
			let updatedPosts = state.postsData.slice().splice(state.postsData.indexOf(action.payload), 1)
			return {
				...state,
				selectedPost: action.payload,
				postsData: updatedPosts
			};
		}
		case "UPDATE_POSTS": {
			return {
				...state,
				postsData: action.payload.postsData
			};
		}
		case "FETCH_POSTS": {
			return {
				...state,
				loadingPosts: true,
				postsData: null
			};
		}
		case "FETCH_POSTS_SUCCESS": {
			return {
				...state,
				loadingPosts: false,
				postsData: action.payload
			};
		}
		case "SYNC_POSTED_USERS": {
			return {
				...state,
				postsData: action.payload
			};
		}

		case "RESET": {
			return initialState;
		}

		default:
			return state
	}
}
