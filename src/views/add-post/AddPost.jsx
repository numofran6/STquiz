import { TextField } from '@mui/material';
import './AddPost.css';

export const AddPost = () => {
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
							<div className="space-x-5">
								<TextField label="Title" />
								<TextField label="Date" />
							</div>
							<TextField label="Brief Description" className="add-post-input" />
							<TextField label="Image" className="add-post-input" />
							<TextField label="Content" className="add-post-input" />

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
