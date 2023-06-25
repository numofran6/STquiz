import { TextField } from '@mui/material';
import './AddPost.css';
import { useRef } from 'react';
import { thumbnail } from '../../shared/constants/assets';

export const AddPost = () => {
	const inputFileRef = useRef(null);
	const imageRef = useRef(null);

	const handleImageClick = () => {
		inputFileRef.current.click();
	};

	const handleInputFileChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				imageRef.current.src = e.target.result;
			};

			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
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
							<TextField required label="Title" className="add-post-input" />
							<TextField
								required
								label="Date (May 9, 2023)"
								className="add-post-input"
							/>
							<TextField
								required
								label="Brief Description"
								className="add-post-input"
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

									<p className="mt-1 font-bold">Upload Image</p>
								</div>

								<div>
									<input
										ref={inputFileRef}
										onChange={handleInputFileChange}
										type="file"
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
