const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postsContainer = document.getElementById('posts-container');

posts.forEach(post => {
    const postHTML = `
     
            <div class="container">

                <div class="user-info"> 
                    <img src="${post.avatar}" alt="portrait of ${post.name}" class="user-img">
                    <div class="user-container">
                        <p class="name">${post.name}</p>
                        <p class="location">${post.location}</p>
                    </div>
                </div>

                <img src="${post.post}" alt="image of ${post.name}" class="post-img">

                <div class="img-info">

                    <div class="icons">
                        <img src="images/icon-heart.png" alt="heart icon" id="like-btn">
                        <img src="images/icon-comment.png" alt="comment icon">
                        <img src="images/icon-dm.png" alt="direct message icon">
                    </div>

                    <div class="likes">
                        <p id="like-count">${post.likes.toLocaleString()} likes</p>
                    </div>

                    <div class="comment">
                        <p class="post-comment"><span class="username">${post.username} </span>${post.comment}</p>
                    </div>

                </div>
            </div>
        <div class="seperator"></div>
    `

    console.log(post.avatar)
    postsContainer.innerHTML += postHTML;
})








const likeBtn = document.querySelector('#like-btn')
const likeCount = document.querySelector('#like-count')
let isLiked = false;

if (!isLiked){
    likeBtn.addEventListener('dblclick', () => {

        if (!isLiked){
            likes += 1
            likeBtn.src = 'images/index.png'

        } else {
            likes -= 1
            likeBtn.src ='images/icon-heart.png'
        }

        likeCount.textContent = `${likes.toLocaleString()} likes`
        isLiked = !isLiked


    })
}

