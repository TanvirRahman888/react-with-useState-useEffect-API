import './todo.css'
export default function Todo(post){
    console.log(post);
    const {id,userId,title,completed}=post.pro;
    console.log(completed);
    return(
        <div className='box'>
            <h3>Post ID: {id}</h3>
            <h3>User ID: {userId}</h3>
            <h3>Post Title: {title}</h3>
            <h3>Completed Status: {completed.toString()}</h3>
            
        </div>
    )
}