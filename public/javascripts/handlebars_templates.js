this["JST"] = this["JST"] || {};

this["JST"]["edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<fieldset><div class=\"form-row\"><label for=\"name\">Name</label><input type=\"text\" name=\"name\" id=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"form-row\"><label for=\"day\">Due Date</label><select name=\"day\" id=\"day\"><option value=\"\">Day</option>"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias2).call(alias1,1,31,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><span> / </span><select name=\"month\" id=\"month\"><option value=\"\">Month</option><option value=\"January\">January</option><option value=\"February\">February</option><option value=\"March\">March</option><option value=\"April\">April</option><option value=\"May\">May</option><option value=\"June\">June</option><option value=\"July\">July</option><option value=\"August\">August</option><option value=\"September\">September</option><option value=\"October\">October</option><option value=\"November\">November</option><option value=\"December\">December</option></select><span> / </span><select name=\"year\" id=\"year\"><option value =\"\">Year</option>"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias2).call(alias1,2017,2025,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"form-row\"><label for=\"description\">Description</label><textarea id=\"description\" name=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"form-row\"><label></label><input type=\"submit\" value=\"Save\" class=\"button\"><button name=\"complete\" class=\"button\">Mark As Complete</button></div></fieldset>";
},"useData":true});

this["JST"]["form"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"3":function(container,depth0,helpers,partials,data) {
    return "class=\"button mark-complete\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "class=\"button\" disabled";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<fieldset><div class=\"form-row\"><label for=\"name\">Name</label><input type=\"text\" name=\"name\" id=\"name\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"form-row\"><label for=\"day\">Due Date</label><select name=\"day\" id=\"day\"><option value=\"\">Day</option>"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias2).call(alias1,1,31,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><span> / </span><select name=\"month\" id=\"month\"><option value=\"\">Month</option><option value=\"January\">January</option><option value=\"February\">February</option><option value=\"March\">March</option><option value=\"April\">April</option><option value=\"May\">May</option><option value=\"June\">June</option><option value=\"July\">July</option><option value=\"August\">August</option><option value=\"September\">September</option><option value=\"October\">October</option><option value=\"November\">November</option><option value=\"December\">December</option></select><span> / </span><select name=\"year\" id=\"year\"><option value =\"\">Year</option>"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias2).call(alias1,2017,2025,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"form-row\"><label for=\"description\">Description</label><textarea id=\"description\" name=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></div><div class=\"form-row\"><label></label><input type=\"submit\" value=\"Save\" class=\"button\"><button name=\"complete\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + ">Mark As Complete</button></div></fieldset>";
},"useData":true});

this["JST"]["new"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "<option value=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2(alias1(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<fieldset><div class=\"form-row\"><label for=\"name\">Name</label><input type=\"text\" name=\"name\" id=\"name\"></div><div class=\"form-row\"><label for=\"day\">Due Date</label><select name=\"day\" id=\"day\"><option value=\"\">Day</option>"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias2).call(alias1,1,31,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select><span> / </span><select name=\"month\" id=\"month\"><option value=\"\">Month</option><option value=\"January\">January</option><option value=\"February\">February</option><option value=\"March\">March</option><option value=\"April\">April</option><option value=\"May\">May</option><option value=\"June\">June</option><option value=\"July\">July</option><option value=\"August\">August</option><option value=\"September\">September</option><option value=\"October\">October</option><option value=\"November\">November</option><option value=\"December\">December</option></select><span> / </span><select name=\"year\" id=\"year\"><option value =\"\">Year</option>"
    + ((stack1 = (helpers.times || (depth0 && depth0.times) || alias2).call(alias1,2017,2025,{"name":"times","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select></div><div class=\"form-row\"><label for=\"description\">Description</label><textarea id=\"description\" name=\"description\"></textarea></div><div class=\"form-row\"><label></label><input type=\"submit\" value=\"Save\" class=\"button\"><button name=\"complete\" class=\"button\" disabled>Mark As Complete</button></div></fieldset>";
},"useData":true});

this["JST"]["sidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"all-date\"><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><p class=\"circle\">"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</p></li>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"completed-date\"><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><p class=\"circle\">"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"all-todos\"><ul><li class=\"active\" id=\"view-all\"><h3>All Todos</h3><p class=\"circle\">"
    + alias4(((helper = (helper = helpers.all_total || (depth0 != null ? depth0.all_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"all_total","hash":{},"data":data}) : helper)))
    + "</p></li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.all_dates : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div><div id=\"completed-todos\"><ul><li id=\"view-completed\"><h3>Completed</h3><p class=\"circle\">"
    + alias4(((helper = (helper = helpers.completed_total || (depth0 != null ? depth0.completed_total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completed_total","hash":{},"data":data}) : helper)))
    + "</p></li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.completed_dates : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div>";
},"useData":true});

this["JST"]["todos"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><p class=\"todo\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.formattedDate || (depth0 != null ? depth0.formattedDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedDate","hash":{},"data":data}) : helper)))
    + "</p><p class=\"delete\"></p></li>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><p class=\"todo completed\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.formattedDate || (depth0 != null ? depth0.formattedDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedDate","hash":{},"data":data}) : helper)))
    + "</p><p class=\"delete\"></p></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<span class=\"circle active\">"
    + alias4(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</span></h2><p><a href=\"#\" class=\"new-todo\">Add New Todo</a></p><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pending : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});