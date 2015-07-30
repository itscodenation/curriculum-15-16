$(document).ready(function(e){
		              $("button").hide();
		              $("#search").click(function(){
		                $("#search").hide();
		                $("h1").hide();
		                $("#query").hide();
		                $("button").show();
		                $("#gifs").show();

		              });
		              $("button").click(function(){
		                $("#search").show();
		                $("h1").show();
		                $("#query").show();
		                $("button").hide();
		                $("#gifs").hide();

		              });

				$("#search_giphy").submit(function(e){
					e.preventDefault();
					var rand = Math.floor(Math.random()*15);
					var q = encodeURIComponent($("#query").val());
					var xhr = $.get("http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=3&q="+q);
					xhr.done(function(data) {
		                      $("#gifs").empty();
						$.each(data.data,function(i,obj){
							 //if(rand ==i){
								$("#gifs").append("<div class='container'><div class='mask'></div><iframe src="+obj.embed_url+"/></div>");
						});
					});
				});
			});
