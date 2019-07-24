const doGet = (e) => {

    if (!e.parameter.page) {
        // When no specific page requested, return "home page"
        return HtmlService.createTemplateFromFile('Index').evaluate();
    }

    // else, use page parameter to pick an html file from the script
    return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
};

export {
  doGet
};