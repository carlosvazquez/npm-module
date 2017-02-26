/*!
 * Json To Config <https://github.com/carlosvazquez/npm-module>
 *
 * Copyright (c) 2017, Carlos Vazquez.
 * Licensed under the MIT License.
 *
 * Escape special characters in the given string of html.
 * 
 * @param {string} html
 * @return {string}
 */
'use strict';

module.exports = {
  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  /**
   * Unescape special characters in the given string of html.
   * 
   * @param {string} html
   * @return {string}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  },
  /**
   * Return same number
   * 
   * @param {number} number
   * @return {number}
   */
  setnumb: function(number) {
    var newnumber = Number(number);
    if (newnumber > 20) {
      return newnumber+20;
    } else {
      return newnumber+10;
    }
  }
};