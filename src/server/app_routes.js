const doGet = (e) => {
  let template = (e && e.parameter && e.parameter.page) ?
    // Use page parameter to set template file
    HtmlService.createTemplateFromFile(e.parameter.page) :
    // else, no specific page requested, return "Index"
    HtmlService.createTemplateFromFile('Index');

  // attach data to template - to be used with scriptlets
  template.data = [];

  return template.evaluate();
};

export {
  doGet,
};
