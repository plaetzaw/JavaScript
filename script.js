// $(document).ready(function(){
// // Code block
// });

// $((function){
//     //JQ
// })

$(() => {
  //   let result = $("div");
  //   $('#paragraph')
  //   $('.myImage')
  //   console.log(result);
  //   $("div").html(
  //     "<span style='backgroud color: yellow'>Yo what up my homie dog</span>"
  //   );
  let $a = $("<a>", {
    class: "myAnchor",
    text: "ali-baba",
    href: "www.google.com"
  });
  $("div").append($a);

  let $img = $("<img>", {
    src:
      "https://cdn3-www.dogtime.com/assets/uploads/2018/10/puppies-cover.jpg",
    alt: "yo dez puppies mad cute"
  });
  $("div").append($img);

  //   $("p").removeClass("myImage");

  //   $("img").click(() => {
  //     alert("whatup my dog");
  //   });

  //   $("p").on("click", e => {
  //     alert("this pee is yellow");
  //   });

  //   $("body").keydown(e => {
  //     console.log(e.keyCode);
  //   });

  //   $("body").keyup(e => {
  //     console.log(e.keyCode);

  //   let $inputCount = $("input");
  //   $("input").keyup(e => {
  //     console.log($inputCount.val().length);
  //     $("#count").html($inputCount.val().length);
  //   });

  $("#aButton").click(e => {
    // $("textarea").fadeOut();
    $(".animation")
      .fadeToggle(5000)
      .slideUp(5000);
  });
  //   $("#aButtonShow").click(e => {
  //     $("textarea").show();
  //   });
});
