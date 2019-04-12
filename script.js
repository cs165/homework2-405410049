function onClick(event)
{
	var select=document.querySelectorAll('.choice-grid div');
	var target=event.currentTarget;
	var chosenTarget=event.target;
	var prechose=document.querySelector('.chosen');
	var changeImg;
	var cnt=0;
	if(prechose!=null)
		prechose.classList.remove('chosen');
//	console.log(select[0].dataset.choiceId);
	for(let x of select)
	{
		x.classList.add('unchosen');
		changeImg=x.querySelector('.checkbox');
		changeImg.src="images/unchecked.png";
	}
	chosenTarget.classList.add('chosen');
	changeImg=chosenTarget.querySelector('.checkbox');
	changeImg.src="images/checked.png";
	// count the chosen item
	for(let i=0;i<9;i++)
	{
		let all=document.querySelectorAll('.choice-grid div');
		if(all[i].classList.contains('chosen'))
			cnt++;	
	}
	console.log(cnt);
}
var clickListener = document.querySelectorAll('.choice-grid div');
for(let x of clickListener)
	x.addEventListener('click', onClick);
clickListener=document.querySelectorAll('div img');
for(let x of clickListener)
	x.removeEventListener('click',onClick);
