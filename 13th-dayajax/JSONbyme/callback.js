





// Sync

function createPost(post){
    setTimeout(function(){
        posts.push(post)
    }, 2000)
}

function getPosts(){
    setTimeout(function(){
       let output = "";

       posts.forEach(function(post){
          output = output + `<li>${post.title}</li>`
       })

       document.body.innerHTML = output;
    }, 1000)
}

// createPost( {title:"Post three", body:"This is post three"})

// getPosts();


// Async

const posts = [
    {title:"Post 1", body:"This is post one"},
    {title:"Post 2", body:"This is post two"}
]

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);

        callback();
    }, 2000)
}

function getPosts(){
    setTimeout(function(){
       let output = "";

       posts.forEach(function(post){
          output += `<li>${post.title}</li>`
       })

       document.body.innerHTML = output;
    }, 1000)
}


createPost({title:"Post three", body:"This is post three"}, getPosts);






