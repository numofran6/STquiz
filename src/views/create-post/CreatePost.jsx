import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { thumbnail } from '../../shared/constants/assets';
import { useContext } from 'react';
import { PostContext } from '../../shared/context/PostContext';
import { useInAppNavigation } from '../../shared/custom-hooks';
import { useLocation } from 'react-router-dom';
import './CreatePost.css';

export const CreatePost = () => {
	const inputFileRef = useRef(null);
	const imageRef = useRef(null);
	const dateInputRef = useRef(null);

	const { dispatch } = useContext(PostContext);

	const location = useLocation();
	const post = location.state?.item;
	const prevRoute = location.state?.path;

	const [title, setTitle] = useState(post?.title || '');
	const [author, setAuthor] = useState(post?.author || '');
	const [date, setDate] = useState(post?.date || '');
	const [body, setBody] = useState(post?.body || '');
	const [hasImageSelected, setHasImageSelected] = useState(false);
	const [formError, setFormError] = useState({ date: false, image: false });

	const { gotoManagePosts } = useInAppNavigation();

	const dateRegex =
		/^(January|February|March|April|May|June|July|August|September|October|November|December)\s\d{1,2},\s\d{4}$/;

	const handleImageClick = () => {
		inputFileRef.current.click();
	};

	const handleInputFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				const image = new Image();
				image.src = e.target.result;

				image.onload = () => {
					const imageSizeInBytes = image.src.length;
					const localStorageQuota = 1024 * 1024 - 1;

					if (imageSizeInBytes <= localStorageQuota) {
						imageRef.current.src = e.target.result;

						const imageDataString = e.target.result.split(',')[1];
						localStorage.setItem(`imageData_${title}`, imageDataString);
						setFormError((prev) => ({ ...prev, image: false }));
						setHasImageSelected(true);
					} else {
						setFormError((prev) => ({ ...prev, image: true }));
					}
				};
			};

			reader.readAsDataURL(file);
		}
	};

	// const validateDate = () => {
	// 	if (dateRegex.test(date)) {
	// 		return true;
	// 	} else {
	// 		setFormError((prev) => ({ ...prev, date: true }));
	// 		dateInputRef.current.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'center',
	// 		});
	// 		return false;
	// 	}
	// };
	// const validateImage = () => {
	// 	if (hasImageSelected) {
	// 		return true;
	// 	} else {
	// 		setFormError((prev) => ({ ...prev, image: true }));
	// 		imageRef.current.scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'center',
	// 		});
	// 		return false;
	// 	}
	// };

	const validateForm = () => {
		const isValidDate = dateRegex.test(date);

		if (isValidDate && hasImageSelected && title && author && date && body) {
			return true;
		} else {
			if (!isValidDate) {
				setFormError((prev) => ({ ...prev, date: true }));
				dateInputRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}
			if (!hasImageSelected) {
				setFormError((prev) => ({ ...prev, image: true }));
				imageRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}
			return false;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const imageData = localStorage.getItem(`imageData_${title}`);
		const imageDataURL = `data:image/png;base64,${imageData}`;

		if (validateForm() && imageData) {
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
								helperText={
									prevRoute === '/manage-posts' &&
									'To edit a post, the title must remain the same.'
								}
								disabled={prevRoute === '/manage-posts'}
							/>
							<TextField
								required
								ref={dateInputRef}
								label="Date (Ex: May 9, 2023)"
								className="add-post-input"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								error={formError.date && !dateRegex.test(date)}
								helperText={
									formError.date &&
									!dateRegex.test(date) &&
									'Please use the correct Date format.'
								}
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
										src={post?.img ? post.img : thumbnail}
										alt=""
										className="w-[30rem] object-cover h-[20rem] bg-gray-200 cursor-pointer rounded-md hover-transition"
										style={{ border: formError.image && '2px solid red' }}
									/>

									<p className="mt-1 font-bold">Upload Image *</p>
									<p
										className={`font-semibold text-sm text-gray-500 ${
											formError.image && 'text-red-600 italic'
										}`}
									>
										Image is required and must be less than 1MB
									</p>
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
