const { FunctionalUseConstants } = require(`../constants/FunctionalUseConstants`);

const defaultPath = '/aloes-by-functional-use/';
const defaultTitle = 'Learn about uses for Aloes in the garden.'

class FunctionalUseUtil {
  // look in "/components/functionaUses/.." for names of built use pages
  static getMatchingBuiltUses(functionalUses, builtUses) {
    const matches = [];
    builtUses.forEach(use => {
      if(functionalUses.includes(use.node.name)) {
        matches.push(use.node.name);
      }
    })
    return matches[0] || '';
  }

  // return the 'path' portion of a url associated w/a plant's functional uses e.g. 'ground_cover'
  static getUrlPath(functionalUses, builtUses) {
    return FunctionalUseConstants.pathNames[this.getMatchingBuiltUses(functionalUses, builtUses)] || defaultPath;
  }

  // return the title associated w/a plant's functional uses
  static getTitle(functionalUses, builtUses) {
    return FunctionalUseConstants.linkTitles[this.getMatchingBuiltUses(functionalUses, builtUses)] || defaultTitle;
  }
}

export default FunctionalUseUtil;
