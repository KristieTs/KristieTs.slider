
const sliderDivs = document.querySelectorAll('.slider')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

let i =0
slideRight=()=>{
	i++
	if(i > sliderDivs.length-1 ){
		i = 0
		sliderDivs[sliderDivs.length-1].style.display = 'none'
		sliderDivs[0].style.display= 'flex'
		sliderDivs[0].style.animation= 'fadeIn 2s ease-in'
	}else{
		
		sliderDivs[i-1].style.display = 'none'
		sliderDivs[i].style.display = 'flex'
		sliderDivs[i].style.animation= 'fadeIn 2s ease-in'
	}
	// console.log(i)
}
setInterval(slideRight, 2000)

/* slideLeft=()=>{
	j--
	if(j == 0){
		j = sliderDivs.length-1
		sliderDivs[0].style.display = 'none'
		sliderDivs[sliderDivs.length-1].style.display= 'flex'
		sliderDivs[sliderDivs.length-1].style.animation= 'fadeIn 2s ease-in'
	}else{
		
		sliderDivs[j-1].style.display = 'none'
		sliderDivs[j].style.display = 'flex'
		sliderDivs[j].style.animation= 'fadeIn 2s ease-in'
	}
} */