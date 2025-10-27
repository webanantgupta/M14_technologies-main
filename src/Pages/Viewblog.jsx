import { useLocation } from 'react-router-dom'

const Viewblog = () => {
    const locate = useLocation();
    console.log(locate);
    const blogData = locate.state
    
  return (
   <>
   <div className="container pt-5">
    <div className="row">
        <div className="col">
    <div className='viewblog_container'>
         <div className='viewblog_title'>
            <h2>{blogData.title}</h2>
         </div>
         <div className='viewblog_image'>
            <img src={blogData.image} alt={blogData.title} />
         </div>
      
    </div>
    <div className='my-5 px-5 pb-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse deleniti fugiat porro blanditiis quidem consequuntur obcaecati dolore. Magni delectus nemo, illum modi totam repellat maxime, eius rerum facilis quisquam ducimus porro exercitationem dignissimos sequi vel. Recusandae repellat in assumenda praesentium asperiores rem, nostrum dicta nobis veniam aspernatur doloremque error! Ab expedita dicta quibusdam cum laboriosam neque tenetur, eligendi dolorum, in a mollitia eius labore facilis itaque, consequuntur corrupti illo culpa id. Architecto, voluptates libero aspernatur a quibusdam non voluptas sunt quae fuga iste? Debitis corrupti sequi aspernatur, et aperiam eum beatae optio non, placeat laboriosam, nesciunt saepe quae! Ipsam?</p>
    </div>
     </div>
    </div>
   </div>
   </>
  )
}

export default Viewblog
