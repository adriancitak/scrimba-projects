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


let likes = 21494

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

