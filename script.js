function onClick(event)
{
	var select=document.querySelectorAll('.choice-grid div');
	var chosenTarget=event.currentTarget;
	var cnt=0;
	var flag=0;
	console.log(event.currentTarget);
	for(let x of select)
		if(x.dataset.questionId==chosenTarget.dataset.questionId)
		{
			if(x.classList.contains('chosen'))
				x.classList.remove('chosen');
			x.classList.add('unchosen');
			changeImg=x.querySelector('.checkbox');
			changeImg.src="images/unchecked.png";
		}
	chosenTarget.classList.add('chosen');
	chosenTarget=chosenTarget.querySelector('.checkbox');
	chosenTarget.src="images/checked.png";
	// complete the quiz
	var chosenItem=document.querySelectorAll('.chosen');
	if(chosenItem.length==3)
	{
		let scoreId,scoreArr={
			blep:0,burger:0,cart:0,dopey:0,happy:0,nerd:0,shy:0,sleeping:0,sleepy:0
		};
		for(let x of select)
			x.removeEventListener('click',onClick);
		for(let x of chosenItem)
		{
			scoreId=x.dataset.choiceId;
			scoreArr[scoreId]++;
			//console.log(scoreArr[scoreId].values());
		}
		let max=0,maxIndex=0;
		for(let i in scoreArr) 
			if(scoreArr[i]>max){
				max=scoreArr[i];
				maxIndex=i;
			}
		console.log(maxIndex);
		console.log(scoreArr[maxIndex]);
		select=document.querySelector('.restart-box h2')
		select.textContent="You got: "+RESULTS_MAP[maxIndex].title;
		select=document.querySelector('.restart-box .ans_content');
		select.textContent=RESULTS_MAP[maxIndex].contents;
	}
}

//reset button
function buttomClick()
{
	var select=document.querySelectorAll('.choice-grid div');
	for(let x of select)
	{
		x.classList.remove('unchosen');
		if(x.classList.contains('chosen'))
		{
			x.classList.remove('chosen');
			x=x.querySelector('.checkbox');
			x.src="images/unchecked.png";
		}
	}
	select=document.querySelector('header');
	select.scrollIntoView(true);
	select= document.querySelectorAll('.choice-grid div');
	for(let x of select)
		x.addEventListener('click', onClick);
	select=document.querySelector('.restart-box h2');
	select.textContent='';
	select=document.querySelector('.restart-box .ans_content');
	select.textContent='';
}
var clickListener = document.querySelectorAll('.choice-grid div');
for(let x of clickListener)
	x.addEventListener('click', onClick);
clickListener=document.querySelectorAll('div img');
for(let x of clickListener)
	x.removeEventListener('click',onClick);
clickListener=document.querySelector('button');
clickListener.addEventListener('click',buttomClick);