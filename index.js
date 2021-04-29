function introduction(name) {
    if (name === "Josh") {
        return "Hi, my name is Josh.";
    } else if (name === "Nancy") {
        return "Hi, my name is Nancy.";
    }
}

function introductionWithLanguage(name, language) {
    if (name === "Josh", "Ember.js") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    } else if (name === "Nancy", "React") {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`;
    }
}


function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

