// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function ladyGagaAlbums() {
  let album1= "The Fame";
  console.log(`${album1} is Lady Gaga's first album.`);

    function gaga2() {
      let album2 = "Fame Monster";
      console.log(`${album2} is Lady Gaga's second album.`);

        function gaga3() {
          let album3 = "Born This Way";
          console.log(`${album3} is Lady Gaga's third album and most popular.`);
          }
        gaga3();
      }
  gaga2();
  }
ladyGagaAlbums();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
