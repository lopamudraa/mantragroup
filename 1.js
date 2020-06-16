var arr = [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];
var arr2 = arr.filter(function (obj) {
return obj.type == 'external';
});