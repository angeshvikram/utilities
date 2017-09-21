/**
 * Created by 212441284 on 9/20/17.
 */
app.factory('utilService', [ function () {

    var _testPrint = function (){
        console.log("inSide util Service");
    };

    return {
        testPrint: _testPrint
    };
}]);
