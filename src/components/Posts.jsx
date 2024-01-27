import React from "react";
//state: mutable
//props: read only and immutable
//father yo son :props
//son to father: callback
//components to components: redux context, useReducer+useContext
//hooks cannot use in if while
const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <ul className="list-group">
            {posts.map((post) => (
                <li key={post.id} className="list-group-item">
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Posts;
