import { useNavigate } from "react-router-dom"


export const useInAppNavigation = () => {
  const navigate = useNavigate()

  const gotoHome = () => {
    navigate('/')
  }

  const gotoCreatePost = () => {
    navigate('/create-post')
  }

  const gotoManagePosts = () => {
    navigate('/manage-posts')
  }

  const handlePostView = (item) => {
    navigate('/view-post/#viewpost', { state: { item } });
  };

  const handleEditPost = (item) => {
    navigate('/create-post', { state: { item } });
  }

  return { gotoHome, gotoCreatePost, gotoManagePosts, handlePostView, handleEditPost }
}
