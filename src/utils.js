import Mustache from 'mustache';

module.exports.defaultOptions = {
    'elementId': 'container',
    'site': 'twitter',
    'className': 'mentionified'
};

var sites = {
    'linkedin': 'linkedin.com/in/',
    'reddit': 'reddit.com/u/'
};

var uriTemplates = {
  'default': '{{ site }}.com/{{ username }}',
  'linkedin': '{{ site }}.com/in/{{ username }}',
  'reddit': '{{ site }}.com/u/{{ username }}'
}

module.exports.regexes = {
    'default': /\B(\@)([a-zA-Z0-9-_]+)\b/g,
    'linkedin': /\B(\/in\/)([a-zA-Z0-9-_]+)\b/g,
    'reddit': /\B(\/u\/)([a-zA-Z0-9-_]+)\b/g,
    'auto': /\B(\@)([a-zA-Z0-9-_]+)\(([a-zA-Z0-9-_]+)\)/g
};

function getSiteUri(site) {
    return sites[site] ? sites[site] : site + '.com/';
}

function buildSiteUrl() {
    // if (typeof urlTemplate !== 'undefined' ?  urlTemplate : defaultOptions;
    var view = {
       'site': 'twitter',
       'username': 'jcvno'
    }
    return '//' + Mustache.render(uriTemplates['default'], view);
}



module.exports.getSiteUri = getSiteUri;
module.exports.buildSiteUrl = buildSiteUrl;
