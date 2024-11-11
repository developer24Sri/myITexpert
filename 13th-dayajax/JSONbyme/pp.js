//AJAX

//async
const posts = [
    {title: "post1", body:"This is post one", },
    {title: "post2", body:"This is post two"}
];

function createPost(post, callback){ //parameter
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){ //callback
    setTimeout(function(){
        let output = "";

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: "post3", body:"this is post three"}, getPosts); //argument