import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { thumbnail } from '../../shared/constants/assets';
import { useContext } from 'react';
import { PostContext } from '../../shared/context/PostContext';
import { useInAppNavigation } from '../../shared/custom-hooks';
import './AddPost.css';

export const AddPost = () => {
	const inputFileRef = useRef(null);
	const imageRef = useRef(null);
	const { dispatch } = useContext(PostContext);
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [date, setDate] = useState('');
	const [body, setBody] = useState('');
	const { gotoManagePosts } = useInAppNavigation();

	const handleImageClick = () => {
		inputFileRef.current.click();
	};

	const handleInputFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				imageRef.current.src = e.target.result;

				const imageDataString = e.target.result.split(',')[1];
				localStorage.setItem('imageData', imageDataString);
			};

			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const imageData = localStorage.getItem('imageData');
		const imageDataURL = `data:image/png;base64,${imageData}`;

		if ((title, author, date, body, imageData)) {
			dispatch({
				type: 'ADD_POST',
				payload: { title, author, date, body, img: imageDataURL },
			});
			gotoManagePosts();
		}
	};

	return (
		<>
			<div className="min-h-[40rem] landing-background flex flex-col justify-center text-center">
				<div className="max-w-container pt-16 pb-32">
					<div className="flex flex-col items-center space-y-10">
						<div className="max-w-xl text-left">
							<p className="text-3xl font-semibold">
								We welcome your amazing stories, feel free to be as expressive
								as you want.
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="flex flex-col space-y-7 items-center"
						>
							<TextField
								required
								label="Title"
								className="add-post-input"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<TextField
								required
								label="Date (May 9, 2023)"
								className="add-post-input"
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
							<TextField
								required
								label="Author"
								className="add-post-input"
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
							/>

							<div>
								<div className="relative">
									<img
										ref={imageRef}
										onClick={handleImageClick}
										src={thumbnail}
										alt=""
										className="w-[30rem] object-cover h-[20rem] bg-gray-200 cursor-pointer rounded-md"
									/>

									<p className="mt-1 font-bold">Upload Image *</p>
									<p className="text-red-600 font-bold">Image is required</p>
								</div>

								<div>
									<input
										ref={inputFileRef}
										onChange={handleInputFileChange}
										type="file"
										accept="image/*"
										className="hidden"
									/>
								</div>
							</div>

							<TextField
								required
								multiline
								rows={10}
								label="Content"
								className="add-post-input"
								value={body}
								onChange={(e) => setBody(e.target.value)}
							/>

							<button type="submit" className="blue-btn-inverse w-fit">
								Create Post
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
