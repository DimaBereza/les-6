// var number = 9;
// number =number-number*1.5;
// console.log(Math.floor(number));






// var a = 5;
// var b = a > 5?true : false;
// console.log(b)




// var firstP = $("p").html("<a href='sasadas'>New link</a>"); //изменит тег <p> на <a>
// console.log(firstP)

//console.log($("p").text("<a href='sasadas'> New link</a>")) //выводит весь текст в html


//$("p").appendTo("<a href='/'>link</a>")  добовляет в конец <p>

//$("p").prepend("<a href='/'>link</a>") добовляет в начало <p>

//$("p").befor("<a href='/'>link</a>") добовляет в перед <p>

//$("p").after("<a href='/'>link</a>") добовляет в за  <p>

//$("p").wrap("p")


// $("p").eq(1).text("some text")

var test = $("p").eq(0).text()
var  arr = test.split(" ")
for(var i = 0; i < arr.length ; i++){
	if (arr[i] === "sit"){
		arr[i] = "Joni"
	}
}

$("p").eq(0).text(arr.join (" "))
