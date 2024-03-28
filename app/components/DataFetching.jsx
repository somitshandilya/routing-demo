import React from 'react'
async function getData() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}
const DataFetching = async () => {
    const data = await getData()
    console.log("Data", data);
  return (
    <div>
      {
        data.map((post, id) => (
            <div key={id}>
                <h1>Title:{post.title}</h1>
                <h1>Body: {post.body}</h1>
                <hr />
       </div>
        ))
      }
    </div>
  )
}

export default DataFetching
