//cancelToken的使用方法
// var CancelToken = axios.CancelToken;
// var source = CancelToken.source();
// axios.get('', {
//     cancelToken: source.token
// }).catch(err => {

// })
// source.cancel('取消请求')

/**
 * 我们发现，它要先引用axios.CancelToken，
 * 然后调用source()方法，会产生一个token和cancel，
 * 它的内部如何实现的呢？
 * 
 * 我们发现CancelToken是一个类，这个类上有source方法。
 * 
 * 在source方法中，会导出token和cancel，这个token是CancelToken类的一个实例，可以访问到内部的promise.
 * 
 * CancelToken这个类初始化的时候，需要传递一个方法executor，并且它的内部新建了一个promise,
 * 最关键的是，它把promise的resolve方法控制权放在了executor方法里面！
 * 
 */

let resolveHandle;
new Promise(resolve => {
    resolveHandle = resolve;
}).then(val => {
    console.log('resolve', val);
});

resolveHandle('ok');
/**
 * 我们用resolveHandle获取了一个promise的resole方法的控制权，
 * 这样，我们就可以在外部控制这个promise的成功了。
 * 要知道new promise返回的对象是无法从外部决定它成功还是失败的。
 */

 /**
  * 现在来看source这个方法，我们可以看到，它new了一个CancelToken对象，并传了一个方法executor;
  * 采用相同的手法，用cancel变量将executor方法的变量c的控制权拿出来了，这个变量c又代表啥呢？
  * 
  */