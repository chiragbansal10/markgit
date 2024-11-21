import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Newsfeed from './Components/Newsfeed';
import RightPanel from './Components/RightPanel';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import yeal from '../src/yael.jpg';
function App() {
  // const postData = {
  //   profilePicture: "https://placehold.co/50x50",
  //   author: "Yael Adamson-Brown",
  //   activityDate: "Activity happened on 4th Dec 2023",
  //   firstPosted: "First posted at 16:13 on 11th December 2023",
  //   lastEdited: "Last edited at 16:13 on 11th Dec 2023",
  //   link: "#",
  //   linkText: "stories-spreadsheet-import-at-10-43-on-11th-december-2023",
  //   editedTime: "Edited 1 day ago",
  //   content:
  //     "New update by Yael Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia.",
  //   comments: 0,
  //   favourites: 0,
  //   commenterProfilePicture: "https://placehold.co/30x30",
  // };

 
  const postData = [
    {
      profilePicture: yeal,
      author: "Yael Adamson-Brown",
      activityDate: "Activity happened on 4th Dec 2023",
      firstPosted: "First posted at 16:13 on 11th December 2023",
      lastEdited: "Last edited at 16:13 on 11th Dec 2023",
      link: "#",
      linkText: "stories-spreadsheet-import-at-10-43-on-11th-december-2023",
      editedTime: "Edited 1 day ago",
      content:
        "New update by Yael Adamson-Brown working on the Using football to teach life skills to children for An Organisation Demo with Sofia.",
      comments: 0,
      favourites: 0,
      commenterProfilePicture: "https://placehold.co/30x30",
    },
    {
      profilePicture: yeal,
      author: "John Doe",
      activityDate: "Activity happened on 3rd Dec 2023",
      firstPosted: "First posted at 14:00 on 10th December 2023",
      lastEdited: "Last edited at 15:30 on 10th Dec 2023",
      link: "#",
      linkText: "new-approach-to-healthcare-on-11th-december-2023",
      editedTime: "Edited 2 days ago",
      content:
        "New update by John Doe shared insights on new approaches to improving healthcare delivery at the Annual Health Summit.",
      comments: 5,
      favourites: 10,
      commenterProfilePicture: "https://placehold.co/30x30",
    },
    {
      profilePicture: yeal,
      author: "Emily Clark",
      activityDate: "Activity happened on 2nd Dec 2023",
      firstPosted: "First posted at 09:45 on 9th December 2023",
      lastEdited: "Last edited at 10:00 on 9th Dec 2023",
      link: "#",
      linkText: "education-technology-update-on-11th-december-2023",
      editedTime: "Edited 3 days ago",
      content:
        "New update by Emily Clark provided an update on the integration of technology in education systems across rural areas.",
      comments: 8,
      favourites: 15,
      commenterProfilePicture: "https://placehold.co/30x30",
    },
    {
      profilePicture:yeal,
      author: "Sophia Lee",
      activityDate: "Activity happened on 1st Dec 2023",
      firstPosted: "First posted at 12:30 on 8th December 2023",
      lastEdited: "Last edited at 13:15 on 8th Dec 2023",
      link: "#",
      linkText: "sustainable-development-goals-update-on-11th-december-2023",
      editedTime: "Edited 4 days ago",
      content:
        "New update by Sophia Lee shared updates on progress made towards achieving Sustainable Development Goals for 2030.",
      comments: 12,
      favourites: 25,
      commenterProfilePicture: "https://placehold.co/30x30",
    },
    {
      profilePicture: yeal,
      author: "Michael Johnson",
      activityDate: "Activity happened on 30th Nov 2023",
      firstPosted: "First posted at 16:00 on 7th December 2023",
      lastEdited: "Last edited at 16:45 on 7th Dec 2023",
      link: "#",
      linkText: "community-engagement-project-on-11th-december-2023",
      editedTime: "Edited 5 days ago",
      content:
        "New update by Michael Johnson highlighted community engagement strategies during the Community Leaders Forum.",
      comments: 7,
      favourites: 18,
      commenterProfilePicture: "https://placehold.co/30x30",
    },
  ];
  

  return (
    <div className="app">
    <Navbar/>
    <div className="layout">
      <Sidebar />
      <main className="content">
      <Newsfeed post={postData} />
      </main>
      <RightPanel />
    </div>
    <Footer />
  </div>
  );
}

export default App;
