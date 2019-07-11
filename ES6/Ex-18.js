function myFn(callback) {

    setTimeout(callback, 1000);
  }
  
  function callback() {
  
    console.log('Call back is called after 1 sec');
  }
  
  console.log(myFn(callback))
  