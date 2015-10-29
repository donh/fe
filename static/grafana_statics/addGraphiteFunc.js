/*! grafana - v2.1.0-pre1 - 2015-09-01
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache License */

define(["angular","app","lodash","jquery","./gfunc"],function(a,b,c,d,e){"use strict";function f(a){return c.reduce(a,function(a,b){return c.each(b,function(b){a.push(b.name)}),a},[])}function g(a){return c.map(a,function(a,b){return{text:b,submenu:c.map(a,function(a){return{text:a.name,click:"addFunction('"+a.name+"')"}})}})}a.module("grafana.directives").directive("graphiteAddFunc",["$compile",function(a){var b='<input type="text" class="tight-form-input input-medium tight-form-input" spellcheck="false" style="display:none"></input>',h='<a  class="tight-form-item tight-form-func dropdown-toggle" tabindex="1" gf-dropdown="functionMenu" data-toggle="dropdown" data-placement="top"><i class="fa fa-plus"></i></a>';return{link:function(i,j){var k=e.getCategories(),l=f(k);i.functionMenu=g(k);var m=d(b),n=d(h);m.appendTo(j),n.appendTo(j),m.attr("data-provide","typeahead"),m.typeahead({source:l,minLength:1,items:10,updater:function(a){var b=e.getFuncDef(a);if(b||(a=a.toLowerCase(),b=c.find(l,function(b){return 0===b.toLowerCase().indexOf(a)})))return i.$apply(function(){i.addFunction(b)}),m.trigger("blur"),""}}),n.click(function(){n.hide(),m.show(),m.focus()}),m.keyup(function(){j.toggleClass("open",""===m.val())}),m.blur(function(){setTimeout(function(){m.val(""),m.hide(),n.show(),j.removeClass("open")},200)}),a(j.contents())(i)}}}])});