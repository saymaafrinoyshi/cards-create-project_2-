// dummy data 
// const posts = [

//     {
//         title: "this is title 01",
//         body: " this is body 01"
//     },
//     {
//         title: "this is title 02",
//         body: " this is body 02"
//     },
//     {
//         title: "this is title 03",
//         body: " this is body 03"
//     },
//     {
//         title: "this is title 04",
//         body: " this is body 04"
//     },
//     {
//         title: "this is title 01",
//         body: " this is body 01",
//     },
//     {
//         title: "this is title 03",
//         body: " this is body 03"
//     },
//     {
//         title: "this is title 04",
//         body: " this is body 04"
//     }

// ];

// face data[axios]
const faceData = async(config) => {
    try {
        const res = await axios(config)
        console.log(res.data);
        return res.data;

    } catch (err) {
        throw Error("data is not fatched")
    }
}



{
    /* <div class="post">
        <h4 class="post-title"> post title</h4>
         <p class="post-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia pariatur, culpa aliquid voluptas vel quidem laborum eveniet repudiandae quae ipsa?</p>
         </div> 
    */
}



// selection


const postsElement = document.querySelector(".posts");

let loadAllData = async() => {
    const posts = await faceData("https://jsonplaceholder.typicode.com/posts");
    posts.map(post => {
        // console.log(post);
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `<h4 class="post-title"> ${post.title}</h4>
       <p class="post-body">${post.body}</p>
       `;


        postsElement.appendChild(postElement);

    })


}

loadAllData();