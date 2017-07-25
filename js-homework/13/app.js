$(function() {
  // DOM is now ready	
 var baseURL = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=ba2d17d48ef8447188dd7fb87e3fc476"

 $('#submit').click(function(){
 	event.preventDefault();
  	console.log("hiya")

  		$.get(baseURL, function(response){
			var article = response.articles[0].title
			console.log(response)
			console.log(response.articles[0].title)
			$('#article-title').html(article);

			var summary = response.articles[0].description
			$('#description').html(summary);

			var articleImg = response.articles[0].urlToImage

    		$('#photo').attr('src', articleImg).appendTo($('#photo'))
				
		})
  	})

 // $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
 //  console.log(results.data.feed[0].content.title);
 //  results.data.feed.forEach(function(result){
 //    $("ul").append("<li>"+result.content.title+"</li>")


  // })
// })

})

