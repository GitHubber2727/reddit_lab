$(document).ready(function(){
 
$.get ("https://www.reddit.com/r/aww/.json", function(data) {

    
    


var blogPosts = [];    
for (var i = 1; i < 11; i++) {

    var redditTitle = (data.data.children[i].data.title);
    var redditUrl = (data.data.children[i].data.url);
    var redditImage = (data.data.children[i].data.thumbnail);
  blogPosts.push (  
    {
        "title":redditTitle,
        "image":redditImage,
        "url":redditUrl
       
    });
 
    
    
    
} 
    blogPosts.forEach(function(blogPost) {
 var postEl = $("<section class='post'>");
    
 var titleEl = $("<h3>");
 titleEl.text(blogPost.title);
 postEl.append(titleEl);
    
 var imageEl = $("<div class='content'>");
 postEl.append(imageEl);
 imageEl.append("<img src =" + blogPost.image + ">");
    
 var urlEl = $("<div class='content'>");
 postEl.append(urlEl);
 urlEl.html('<a href=" ' + blogPost.url + '">' + blogPost.url + '</a>');
    
 $("#main").append(postEl);
    });
  });
});










    
//    for(var i = 0; i < blogPosts.length; i++) {
//    var blogPost = blogPosts[i];
//
//    console.log(blogPost.title);
//}
    
//     console.log(blogPost.title[i]);
//    }
        
//    var blogPosts = function(title, image, url) {
//    console.log("title[" + image + "] = " + url);
//}
//ar.forEach(blogPosts); // returns a[0] = a, a[1] = b, a[4] = c
    
//    for ( i = 0; i < blogPosts.length; i++) {
//    var blogPost = blogPosts[i];
//    console.log(blogPost);
//}   
   
//    for( var i = 1; i < $(".blogPosts").length; i++) { 
//  $(".blogPost:eq(" + i  + ")").append("<p>Here's a note</p>");
//}
    
    
//    var newEl = $("<a>");
//    newEl.text (data.post.title); });
    
    

  



 


    
//  var detailsEl = $("<p class='details'>");
//  postEl.append(detailsEl);
//  var authorEl = $("<span class='author'>");
//  authorEl.text(blogPost.author);
//  detailsEl.append(authorEl);
//  var dateEl = $("<span class='date'>");
//  dateEl.text(blogPost.date);
//  detailsEl.append(dateEl);
//  var contentEl = $("<div class='content'>");
//  postEl.append(contentEl);
//  contentEl.append(blogPost.content);
//  var tagsEl = $("<ul class='tags'>");
//  postEl.append(tagsEl);
//
//  blogPost.tags.forEach(function(tag) {
//    var newList = $("<li>");
//    newList.append(tag);
//    tagsEl.append(newList);
//  });
//  $("#main").append(postEl);
//});
//   
    

//    console.log(redditTitle);
//    
//    });

///* TODO start here. Use a loop and jQuery to add all the blog posts to the body.
//   The resulting HTML should look like the finished-example.html page. Here, too,
//   is a snippet of what the HTML for each post should look like.
//
//  <section class="post">
//    <h3>Balanced dedicated ability</h3>
//    <p class="details">
//        <span class="author">Todd Smith</span>
//        <span class="date">2/11/2016</span>
//    </p>
//    <div class="content">
//        <p>Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.
//        Suspendisse accumsan tortor quis turpis.</p><p>Sed ante. Vivamus tortor.
//        Duis mattis egestas metus.</p><p>Aenean fermentum. Donec ut mauris eget
//        massa tempor convallis. Nulla neque libero, convallis eget, eleifend
//        luctus, ultricies eu, nibh.</p>
//    </div>
//    <ul class="tags">
//        <li>Work</li>
//        <li>Food</li>
//    </ul>
//  </section>
// */
//
//});
//console.log("hello, node!");