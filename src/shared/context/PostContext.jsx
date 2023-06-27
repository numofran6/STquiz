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
			const existItem = state.posts.find(
				(item) => item.title === newPost.title
			);
			const postItems = existItem
				? state.posts.map((item) =>
						item.title === existItem.title ? newPost : item
				  )
				: [...state.posts, newPost];

			localStorage.setItem('post', JSON.stringify([...postItems]));
			return { ...state, posts: [...postItems] };
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

// case 'CART_ADD_ITEM': {
// 	const newItem = action.payload;
// 	const existItem = state.cart.cartItems.find(
// 		(item) => item.slug === newItem.slug
// 	);
// 	const cartItems = existItem
// 		? state.cart.cartItems.map((item) =>
// 				item.name === existItem.name ? newItem : item
// 		  )
// 		: [...state.cart.cartItems, newItem];
// 	Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }), {
// 		sameSite: 'Lax',
// 	});
// 	return { ...state, cart: { ...state.cart, cartItems } };
// }

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
