import { createContext, useReducer } from 'react';

export const PostContext = createContext();

const initialState = {
	posts: localStorage.getItem('post')
		? JSON.parse(localStorage.getItem('post'))
		: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_POST': {
			const newPost = action.payload;
			localStorage.setItem('post', JSON.stringify([...state.posts, newPost]));
			return { ...state, posts: [...state.posts, newPost] };
		}
		case 'REMOVE_POST': {
			const postToRemove = action.payload;
			const allPosts = state.posts.filter(
				(item) => item.title !== postToRemove.title
			);
			localStorage.setItem('post', JSON.stringify([...allPosts]));
			return { ...state, posts: [...allPosts] };
		}
		// ... other cases
	}
};

export const PostContextProvider = ({ children }) => {
	const [states, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<PostContext.Provider value={{ states, dispatch }}>
				{children}
			</PostContext.Provider>
		</>
	);
};
