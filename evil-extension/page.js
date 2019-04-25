function transformTextNodes(node) {
	const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};
  var treeWalker = document.createTreeWalker(node,NodeFilter.SHOW_TEXT);
  //for(let x in MATCH_LIST)
		// console.log(x);
  while(treeWalker.nextNode())
  {
	let _arr,arr,searchId,matchPattern;
	let content=treeWalker.currentNode.textContent;
	content=content.trim();
	arr=content.split(' ');
	console.log(arr);
	for(let j=0;j<arr.length;j++)	
		for(let i in MATCH_LIST)					
			if(arr[j]==i)
			{
				console.log("!23");
				arr[j]=MATCH_LIST[i];
				break;
			}
	arr[arr.length]=' ';
	arr=arr.join(' ');
	treeWalker.currentNode.textContent=arr;
	console.log(arr);
  }
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
console.log('Extension updated');