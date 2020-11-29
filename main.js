
function sleep(ms) {
  //休眠
  return new Promise(resolve => setTimeout(resolve, ms));
};
button_list = document.getElementsByClassName('ant-btn ant-btn-primary'); //获取所有 button

for(i in button_list){
	//button_list 循环
	if(button_list[i].textContent == '开始评教'){       
		button_list[i].click();   //进入评教小页面
		await sleep(2000);
		textbox_list = document.getElementsByClassName("ant-table-row  ant-table-row-level-0");   //获取所有 textbox_list
		
		for(j=0;j<textbox_list.length-1;j++){ 
		    // textbox_list 循环
			my_method = Object.keys(textbox_list[j].cells[3])[1]
			my_fullscore = textbox_list[j].lastElementChild[my_method].children[2].props.record.fullScore;  //获取满分
			textbox_list[j].lastElementChild[my_method].children[2].props.onChange(my_fullscore);           //赋值
		}
		
		//提交
		o = document.getElementsByClassName('ant-modal-content')[0]; 
		o.getElementsByClassName('ant-btn ant-btn-primary')[0].click();
		
		await sleep(2000);
		
		//验证码
		captcha = document.getElementsByClassName('ant-input')[7];
		while(captcha){
			alert('请输入验证码');
		    captcha.value = ''
			while(captcha.value.length != 4){
				await sleep(1000);
			}
			o.getElementsByClassName('ant-btn ant-btn-primary')[0].click();
			await sleep(1000);
			captcha =document.getElementsByClassName('ant-input')[7];
		}
			
	}
}



