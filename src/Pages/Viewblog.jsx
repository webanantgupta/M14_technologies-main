import { useLocation } from 'react-router-dom'
import PageHeader from '../Common/PageHeader';

const Viewblog = () => {
    const locate = useLocation();
    console.log(locate);
    const blogData = locate.state
    const pageHeaderData = locate?.state?.title
    return (
        <>
        <PageHeader title={pageHeaderData}/>
            <div className="container pt-5">
                {blogData ? <div className='viewblog_outer_container'>
                    <div className='viewblog_container'>
                        <div className='viewblog_title'>
                            <h2>{blogData.title}</h2>
                        </div>
                        <div className='viewblog_image'>
                            <img src={blogData.image} alt={blogData.title} />
                        </div>
                        
                    </div>
                       <div className='viewblog_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maiores assumenda magnam nam ratione similique. Laudantium tenetur nisi, laborum error, voluptate facilis, fuga officia corrupti aliquam quibusdam distinctio dignissimos nostrum debitis consectetur ad libero. Delectus non aperiam aliquid autem vel! Inventore atque facilis blanditiis voluptatum accusamus dignissimos rerum quam dolorum!</p>
                       </div>
                </div>
                    : ""}
            </div>
        </>
    )
}

export default Viewblog
