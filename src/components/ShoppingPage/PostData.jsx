// import React, {useEffect, useState} from 'react'

// const PostData = () => {
//     const [data, setData] = useState(null); // State to store the fetched data
//   const [loading, setLoading] = useState(true); // State to manage the loading state
//   const [error, setError] = useState(null); // State to manage any error

//   useEffect(() => {
//     // Define an async function to fetch data
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.timbu.cloud/products?organization_id=d0e2b4cd873540e781cae4c4ef349630&Appid=94JLTEGLSGZCLG4&Apikey=0f84fd5ed41b4a1dbb3a22d6cee531ab20240712161729487017');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setData(data); // Set the fetched data in state
//       } catch (error) {
//         setError(error); // Set the error if any occurs
//       } finally {
//         setLoading(false); // Set loading to false after fetch is complete
//       }
//     };
//     console.log(data)

//     fetchData(); // Call the async function
//   }, []); // Empty dependency array means this effect runs once on mount

//   // Conditional rendering based on loading and error state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   // Render the fetched data
//   return (
//     <div>
//       <h1>Fetched Data:</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );

// }

// export default PostData
