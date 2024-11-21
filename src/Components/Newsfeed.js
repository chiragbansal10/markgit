// // import React from "react";
// // import "../Styles/Newsfeed.css";

// // function Newsfeed() {
// //   const posts = [
// //     {
// //       id: 1,
// //       user: "Yael Adamson-Brown",
// //       date: "16th Dec 2023",
// //       content: "Working on an exciting project...",
// //     },
// //     {
// //       id: 2,
// //       user: "Respondent",
// //       date: "15th Dec 2023",
// //       content: "Started a new training program...",
// //     },
// //   ];

// //   return (
// //     <div className="newsfeed">
// //       <h2>Newsfeed</h2>
// //       {posts.map((post) => (
// //         <div key={post.id} className="post">
// //           <h4>{post.user}</h4>
// //           <p>{post.date}</p>
// //           <p>{post.content}</p>
// //           <button className="expand-button">Expand Story</button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Newsfeed;
// // import React from "react";
// // import "../Styles/Newsfeed.css";

// // function Newsfeed() {
// //   return (
// //     <div className="newsfeed-container">
// //       <h1 className="newsfeed-title">NEWSFEED</h1>
// //       <div className="post-card">
// //         <div className="post-header">
// //           <img
// //             src="https://placehold.co/50x50"
// //             alt="Profile picture of Yael Adamson-Brown"
// //             className="avatar"
// //           />
// //           <div className="post-info">
// //             <h2 className="post-author">Yael Adamson-Brown</h2>
// //             <p className="post-meta">Activity happened on 4th Dec 2023</p>
// //             <p className="post-meta">First posted at 16:13 on 11th December 2023</p>
// //             <p className="post-meta">Last edited at 16:13 on 11th Dec 2023</p>
// //             <a href="#" className="post-link">
// //               stories-spreadsheet-import-at-10-43-on-11th-december-2023
// //             </a>
// //           </div>
// //           <div className="post-time">Edited 1 day ago</div>
// //         </div>
// //         <p className="post-content">
// //           New update by Yael Adamson-Brown working on the Using football to
// //           teach life skills to children for An Organisation Demo with Sofia.
// //         </p>
// //         <button className="expand-button">Expand Story</button>
// //         <div className="post-footer">
// //           <i className="fas fa-heart heart-icon"></i>
// //           <span className="post-stats">0 Comments</span>
// //           <span className="post-stats">0 Favourites</span>
// //         </div>
// //         <div className="comment-section">
// //           <img
// //             src="https://placehold.co/30x30"
// //             alt="Profile picture of commenter"
// //             className="comment-avatar"
// //           />
// //           <input
// //             type="text"
// //             placeholder="Write a comment..."
// //             className="comment-input"
// //           />
// //           <button className="post-button">Post</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Newsfeed;
// import React from "react";
// import "../Styles/Newsfeed.css";

// function Newsfeed({ post }) {
//   return (
//     <div className="newsfeed-container">
//       <h1 className="newsfeed-title">NEWSFEED</h1>
//       {post.map((postData, index) => (
//         <div className="post-card" key={index}>
//           <div className="post-header">
//             <img
//               src={postData.profilePicture}
//               alt={`Profile picture of ${postData.author}`}
//               className="avatar"
//             />
//             <div className="post-info">
//               <h2 className="post-author">{postData.author}</h2>
//               <p className="post-meta">{postData.activityDate}</p>
//               <p className="post-meta">{postData.firstPosted}</p>
//               <p className="post-meta">{postData.lastEdited}</p>
//               <a href={postData.link} className="post-link">
//                 {postData.linkText}
//               </a>
//             </div>
//             <div className="post-time">{postData.editedTime}</div>
//           </div>
//           <p className="post-content">
//             {postData.content}
//           </p>
//           <button className="expand-button">Expand Story</button>
//           <div className="post-footer">
//             <i className="fas fa-heart heart-icon"></i>
//             <span className="post-stats">{postData.comments} Comments</span>
//             <span className="post-stats">{postData.favourites} Favourites</span>
//           </div>
//           <div className="comment-section">
//             <img
//               src={postData.commenterProfilePicture}
//               alt="Profile picture of commenter"
//               className="comment-avatar"
//             />
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               className="comment-input"
//             />
//             <button className="post-button">Post</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Newsfeed;
import React from "react";
import "../Styles/Newsfeed.css";
import CommentInput from "./CommentInput";

function Newsfeed({ post }) {
  return (
    <div className="newsfeed-container">
    <CommentInput />
      {post.map((postData, index) => (
        <div className="post-card" key={index}>
          {/* Display the NEWSFEED heading only for the first post */}
          {index === 0 && <h1 className="newsfeed-title">NEWSFEED</h1>}
          {index === 0 &&  <hr className="newsfeed-divider" />}
          <div className="post-header">
            <img
              src={postData.profilePicture}
              alt={`Profile picture of ${postData.author}`}
              className="avatar"
            />
            <div className="post-info">
              <h2 className="post-author">{postData.author}</h2>
              <p className="post-meta">{postData.activityDate}</p>
              <p className="post-meta">{postData.firstPosted}</p>
              <p className="post-meta">{postData.lastEdited}</p>
              <a href={postData.link} className="post-link">
                {postData.linkText}
              </a>
            </div>
            
            <div className="post-header-right">
    <button className="settings-btn">⚙️</button>
    <div className="post-time">{postData.editedTime}</div>
  </div>
          </div>
          <p className="post-content">
            {postData.content}
          </p>
          <button className="expand-button">Expand Story</button>
          
          <div className="post-footer">
  <i className="far fa-heart heart-icon"></i>
  <span className="post-stats">{postData.comments} Comments</span>
  <span className="post-stats">{postData.favourites} Favourites</span>
</div>
          <div className="comment-section">
            <img
              src={postData.commenterProfilePicture}
              alt="Profile picture of commenter"
              className="comment-avatar"
            />
            <input
              type="text"
              placeholder="Write a comment..."
              className="comment-input"
            />
            <button className="post-button">Post</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Newsfeed;
