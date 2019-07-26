const doGet = (e) => {
  let template = (!e.parameter.page) ?
    // When no specific page requested, return "home page"
    HtmlService.createTemplateFromFile('Index') :
    // else, use page parameter to pick an html file from the script
    HtmlService.createTemplateFromFile(e.parameter.page);

  // attach data to template - to be used with scriptlets
  template.data = [];

  return template.evaluate();
};

export {
  doGet,
};
