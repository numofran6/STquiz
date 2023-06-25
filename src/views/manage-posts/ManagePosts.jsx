import React from 'react';
import { createdPosts } from '../../shared/utils/data';
import { AdvancedPostCard } from '../../shared/components';
import { Link } from 'react-router-dom';

export const ManagePosts = () => {
	if (createdPosts.length < 1) {
		return (
			<>
				<div className="h-[40rem] flex flex-col items-center justify-center landing-background space-y-2">
					<h1 className="text-xl">You haven't created any posts yet</h1>
					<Link to={'/create-post'} className="blue-btn">
						Add Post
					</Link>
				</div>
			</>
		);
	}

	return (
		<main className="landing-background pb-40">
			<div className="max-w-container">
				<div className="flex items-center justify-between py-16">
					<div>
						<h1 className="uppercase font-light">Wrote by you</h1>
						<p className="text-xl font-bold">
							Your story, how you want to tell it.
						</p>
					</div>

					<div>
						<Link className="blue-btn">Add more posts</Link>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-10">
					{createdPosts.map((item, index) => (
						<div key={index}>
							<AdvancedPostCard
								image={item.img}
								title={item.title}
								description={item.description}
								date={item.date}
								author={item.author}
							/>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};
