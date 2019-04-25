// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});
if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="/extension_style.css">');
function onMessage(gardeningInProgress,event) {
  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
 // var select=document.querySelectorAll('.stream div');
 var select=document.querySelectorAll('.tweet');
  if(gardeningInProgress==true)
  {
	  const mouse_url = chrome.runtime.getURL('images/rose-cursor.gif');
	  for(let obj of select)
	  {
		obj.style.cursor = 'url(' + mouse_url + ') 4 12, auto';
		obj.addEventListener('mouseover',function(){over(obj)});
		obj.addEventListener('mouseout',function(){out(obj)});
		obj.addEventListener('click',function(e){onClick(e,obj)});
	  }
  }
  else
  {
	select=document.querySelectorAll('.tweet');  
	console.log("123");
	for(let obj of select)
	{
		obj.style.cursor = '';
		//obj.opacity='';
		obj.removeEventListener('mouseover',over(obj));
		obj.removeEventListener('mouseover',function(){over()});
		//obj.removeEventListener('mouseover',out);
	}
  }

}
function over(obj)
{
	const img_url=chrome.runtime.getURL('images/sparkle.gif');
	obj.style.opacity=0.8;
	obj.style.backgroudImage='url('+img_url+')';
}
function out(obj)
{
	obj.style.opacity=1;
	obj.style.backgroudImage='';
}
function onClick(e,obj)
{
	//event.stopPropagation();
	e.stopPropagation();
	obj1=obj.querySelector('.js-tweet-text-container');
	obj1.textContent=POSITIVE_MESSAGES[Math.floor(Math.random()*POSITIVE_MESSAGES.length)];
	obj2=obj.querySelector('.QuoteTweet-text');
	if(obj2!=null)
		obj2.textContent=POSITIVE_MESSAGES[Math.floor(Math.random()*POSITIVE_MESSAGES.length)];
}
 var  select=document.querySelectorAll('.stream div');
for(let x of select)
	x.addEventListener('click',checkTarget);
function checkTarget(event)
{
	console.log(event.target);
}