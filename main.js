function sleep(delay){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, delay)
        })
    }
async function eva(){
		flag = document.getElementsByTagName('button');
		while(flag.length-2){
		flag[2].click();
		await sleep(2000);
		
	
		textbox_list = document.getElementsByClassName("ant-table-row  ant-table-row-level-0");
		for(j=0;j<textbox_list.length-1;j++){
			my_method=Object.keys(textbox_list[j].cells[3])[1];
			my_fullscore=textbox_list[j].lastElementChild[my_method].children[2].props.record.fullScore;
			textbox_list[j].lastElementChild[my_method].children[2].props.onChange(my_fullscore);
			}
		o=document.getElementsByClassName('ant-modal-content')[0];
		o.getElementsByClassName('ant-btn ant-btn-primary')[0].click();

		await sleep(2000);
		captcha = document.getElementsByTagName('img')[7];
		while(captcha){
			alert('请输入验证码');
			document.getElementsByClassName('ant-input')[7].value = '';
			while(document.getElementsByClassName('ant-input')[7].value.length != 4){
				await sleep(500);
				}
			o.getElementsByClassName('ant-btn ant-btn-primary')[0].click();
			await sleep(3000);
			captcha =document.getElementsByTagName('img')[7];
			}
		flag = document.getElementsByTagName('button');
		}
	}
eva();
