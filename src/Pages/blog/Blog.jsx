import Blogcontent from '../../Common/Blogcontent';
import PageHeader from '../../Common/PageHeader';
import blogData from "../../Components/Blog/blog.json"


const Blog = () => {

    return (
        <div>
            <PageHeader title={"Blog"} />
            <Blogcontent blog={blogData} />
        </div>
    )
}

export default Blog
