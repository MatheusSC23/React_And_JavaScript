function doSomethingAsync(callback){
	setTimeout(()=>callback(1),1000)
}

doSomethingAsync(console.log)