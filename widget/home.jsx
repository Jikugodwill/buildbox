const { hello } = VM.require("${module/hello}") || {
  hello: () => console.log("hello"),
};

return hello();
