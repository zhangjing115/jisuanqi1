window.onload=function(){

	var $=function(div){
		return document.getElementById(div);
	},
	$$=function(div){
		return document.getElementsByClassName(div);
	};
	
	var nums=$$('num'),ops=$$('oprator'),nums2=$$('num2'),ops2=$$('oprator2'),
	sc=$('screen'),first=$('first'),equl=$('denghao'),sc2=$('screen2'),
	equl2=$('denghao2'),mc2=$('mc2'),mjia2=$('m+2'),mjian2=$('m-2'),
	mr2=$('mr2'),pai=$('pai'),Memory2=$('Memory2'),
	btn=$$('btn'),first=$('first'),two=$('two'),

	firstNumber='',secondNumber='',result='',
	yunsuanfu='',	
	firstNumber2='',secondNumber2='',result2='',
	yunsuanfu2='',jc='1',jcresult='1',
	cun2='',cunj2='';
	console.log(ops2);
	console.log(btn);
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){			
			if(sc.innerHTML.indexOf('.')!=-1&&this.innerHTML=='.'){return;}
			if(!yunsuanfu){
					if(this.innerHTML=='+/-'&&firstNumber.indexOf('-')==-1){
						firstNumber='-'+firstNumber;
						sc.innerHTML=firstNumber;
					}else{
					
						firstNumber+=this.innerHTML;
						sc.innerHTML=firstNumber;	
					}
			}else{
				
					if(this.innerHTML=='+/-'&&secondNumber.indexOf('-')==-1){
						secondNumber='-'+secondNumber;
						sc.innerHTML=secondNumber;
					}else{
							secondNumber+=this.innerHTML;
							sc.innerHTML=secondNumber;
					}	
				}
				
			}
		}
	

	for(var i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			 yunsuanfu=this.innerHTML.trim();
		}
	}
	equl.onclick=function(){
		if(yunsuanfu=='+'){
			sc.innerHTML=Number(firstNumber)+Number(secondNumber);
		}
		if(yunsuanfu=='-'){
			sc.innerHTML=Number(firstNumber)-Number(secondNumber);
		}
		if(yunsuanfu=='*'){
			sc.innerHTML=Number(firstNumber)*Number(secondNumber);
		}
		if(yunsuanfu=='/'){
			sc.innerHTML=Number(firstNumber)/Number(secondNumber);
		}
		firstNumber='';
		secondNumber='';
		yunsuanfu='';
		

	};

	var ac=document.getElementById('ac');
	ac.onclick=function(){
		sc.innerHTML=0;
		firstNumber='';
		secondNumber='';
		yunsuanfu='';
	};
	var mc=$('mc');
	var mjia=$('m+');
	var mjian=$('m-');
	var mr=$('mr');
	var Memory=$('Memory');
	var cun='',cunj='';

	mjia.onclick=function(){
		if(!cun){
			Memory.innerHTML='M';
			cun=sc.innerHTML;
		}else{
			cunj=Number(cun)+Number(sc.innerHTML);
			sc.innerHTML=cunj;
		}
	}
	mjian.onclick=function(){
		if(!cun){
			Memory.innerHTML='M';
			cun=sc.innerHTML;
		}else{
			cunj=Number(cun)-Number(sc.innerHTML);
			sc.innerHTML=cunj;
		}
	}
	mc.onclick=function(){
		Memory.innerHTML='';
		cun='';
	}
	mr.onclick=function(){
		sc.innerHTML=cun;
	}

	
// -------------------------------------------------------------------------------


	pai.onclick=function(){
		if(firstNumber2==''&&this.innerHTML=='π'){
				sc2.innerHTML='π';
				firstNumber2=Math.PI+'';
				return;
			}
		if(sencondNumber2==''&&this.innerHTML=='π'){
				sc2.innerHTML='π';
				sencondNumber2=Math.PI+'';
				return;
			}
	}
	for(var i=0;i<nums2.length;i++){
		nums2[i].onclick=function(){			
			if(sc2.innerHTML.indexOf('.')!=-1&&this.innerHTML=='.'){return;}
			if(!yunsuanfu2){				
					if(this.innerHTML=='+/-'&&firstNumber2.indexOf('-')==-1){
						firstNumber2='-'+firstNumber2;
						sc2.innerHTML=firstNumber2;
					}else{
							firstNumber2+=this.innerHTML;
							sc2.innerHTML=firstNumber2;
						}	
			}else{
					if(this.innerHTML=='+/-'&&secondNumber2.indexOf('-')==-1){
						secondNumber2='-'+secondNumber2;
						sc2.innerHTML=secondNumber2;
					}else{
						
							secondNumber2+=this.innerHTML;
							sc2.innerHTML=secondNumber2;	
					}	
				
			}
		}
	}

	
	for(var i=0;i<ops2.length;i++){
		ops2[i].onclick=function(){
			yunsuanfu2=this.innerHTML;

		};
	}

equl2.onclick=function(){
	firstNumber2=Number(firstNumber2);
	secondNumber2=Number(secondNumber2);
	if(yunsuanfu2=='+'){
		sc2.innerHTML=firstNumber2+secondNumber2;
	}
	if(yunsuanfu2=='-'){
		sc2.innerHTML=firstNumber2-secondNumber2;
	}
	if(yunsuanfu2=='*'){
		sc2.innerHTML=firstNumber2*secondNumber2;
	}
	if(yunsuanfu2=='/'){
		sc2.innerHTML=firstNumber2/secondNumber2;
	}

	if(yunsuanfu2=='%'){
		sc2.innerHTML=firstNumber2/100;
	}
	if(yunsuanfu2=='Xˉ¹'){
		sc2.innerHTML=1/firstNumber2;
	}
	if(yunsuanfu2=='X²'){
		sc2.innerHTML=Math.pow(firstNumber2,2);
	}
	if(yunsuanfu2=='X³'){
		sc2.innerHTML=Math.pow(firstNumber2,3);
	}
	if(yunsuanfu2=='xʸ'){
		sc2.innerHTML=Math.pow(firstNumber2,secondNumber2);
	}
	if(yunsuanfu2=='X!'){
		var result=1;
		for(var j=1;j<=firstNumber2;j++){
			result*=j;
		}
		sc2.innerHTML=result;
	}
	
	if(yunsuanfu2=='√'){
		sc2.innerHTML=Math.sqrt(firstNumber2);
	}
	if(yunsuanfu2=='ˣ√y'){
		sc2.innerHTML=Math.pow(firstNumber2,1/secondNumber2);
	}
	if(yunsuanfu2=='sin'){
		sc2.innerHTML=Math.sin(secondNumber2*Math.PI/180).toFixed(2);
	}
	if(yunsuanfu2=='cos'){
		sc2.innerHTML=Math.cos(secondNumber2*Math.PI/180).toFixed(2);
	}
	if(yunsuanfu2=='tan'){
		sc2.innerHTML=Math.tan(secondNumber2*Math.PI/180).toFixed(2);
	}
	if(yunsuanfu2=='sinh'){
		sc2.innerHTML=Math.sinh(secondNumber2);
	}
	if(yunsuanfu2=='cosh'){
		sc2.innerHTML=Math.cosh(secondNumber2);
	}
	if(yunsuanfu2=='tanh'){
		sc2.innerHTML=Math.tanh(secondNumber2);
	}
	if(yunsuanfu2=='log'){
		sc2.innerHTML=Math.log(secondNumber2)/Math.log(firstNumber2);
		
	}
	if(this.innerHTML=='ln'){			
		sc2.innerHTML=Math.log( firstNumber2 )/Math.log( 10 )+'';
	}
	

	firstNumber2='';
	secondNumber2='';
	yunsuanfu2='';
};


var AC2=$('ac2');
console.log(AC2);
AC2.onclick=function(){
	sc2.innerHTML=0;
	firstNumber2='';
	sencondNumber2='';
	yuansuanfu2='';
};


	mjia2.onclick=function(){
		if(!cun2){
			Memory2.innerHTML='M';
			cun2=sc2.innerHTML;
		}else{
			cunj2=Number(cun2)+Number(sc2.innerHTML);
			if(String(cunj2).length>23){
				cunj2=Number(cunj2);
				sc2.innerHTML=cunj2.toExponential(16);
			}
			sc2.innerHTML=cunj2;
		}
	}
	mjian2.onclick=function(){
		if(!cun2){
			Memory2.innerHTML='M';
			cun2=sc2.innerHTML;
		}else{
			cunj2=Number(cun2)-Number(sc2.innerHTML);
			sc2.innerHTML=cunj2;
		}
	}
	mc2.onclick=function(){
		Memory2.innerHTML='';
		cun2='';
	}
	mr2.onclick=function(){
		sc2.innerHTML=cun2;
	}



	var kaiguan=true;
	btn[0].onclick=function(){
		if(kaiguan){
			two.style.display='block';
			first.style.display='none';
			kaiguan=false;
		}else{
			two.style.display='none';
			first.style.display='block';
			kaiguan=true;
		}
	}



}
