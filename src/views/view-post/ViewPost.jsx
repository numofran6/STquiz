import { useLocation } from 'react-router-dom';

export const ViewPost = () => {
	const location = useLocation();
	const post = location.state.item;

	return (
		<main className="landing-background pt-16 pb-40">
			<div className="max-w-4xl mx-auto px-7 xl:px-0">
				<div className="flex flex-col space-y-20 mb-10">
					<div>
						<img
							src={post.img}
							alt=""
							className="w-full h-[30rem] rounded-[3rem] object-cover"
						/>
					</div>

					<h2 className="text-4xl md:text-5xl font-semibold">{post.title}</h2>

					<div className="text-xs">
						<h6 className="font-bold">{post.author} </h6>
						<h6>{post.date} </h6>
					</div>
				</div>

				<div>{post.body}</div>
			</div>
		</main>
	);
};
