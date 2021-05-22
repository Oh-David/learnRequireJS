define([], function(){
  function hello(name) {
    console.log("Hello " + name);
  }
  return {
      hello: hello
  };
});