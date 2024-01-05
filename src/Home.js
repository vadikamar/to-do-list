import BlogList from './BlogList';
import useFetch from './useFetch';

const Home=()=>{    
    const {data :blogs,isPending,error}= useFetch('http://localhost:8080/blogs');
    return (
        <div className="home">
            <h2>All the blogs!</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs}></BlogList>}
        </div>
    );
}
export default Home;