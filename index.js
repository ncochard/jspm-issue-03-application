import x from 'jspm-issue-03-module';
import y from 'jspm-issue-03-module/index';

(function(){
    console.log("x is undefined:");
    console.log(x);
    console.log("y is defined:");
    console.log(y);
    console.log("Output of the module: " + y());
})();
