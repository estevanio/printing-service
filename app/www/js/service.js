angular.module('app')
.factory('printer', ['$rootScope', '$compile', '$document', '$http', '$timeout', '$q', function($rootScope, $compile, $document, $http, $timeout, $q) {
    var printHtml = function(html) {
        var deferred = $q.defer();
        var iframe = document.createElement('iframe');
        iframe.setAttribute("style", "display: none;");
        $document.find('body').eq(0).append(iframe);
        var hiddenframe = $document.find('iframe')[0];
        hiddenframe.contentWindow.printAndRemove = function() {
            hiddenframe.contentWindow.print();
            hiddenframe.remove();
        };
        var htmlContent = "<!doctype html>" +
            "<html>" +
            '<body onload="printAndRemove();">' +
            html +
            '</body>' +
            "</html>";
        var doc = hiddenframe.contentWindow.document.open("text/html", "replace");
        doc.write(htmlContent);
        deferred.resolve();
        doc.close();
        return deferred.promise;
    };


    var print = function(templateUrl, data) {

    	console.log(data);
        $http.get(templateUrl).success(function(template) {
            var printScope = $rootScope.$new();
            angular.extend(printScope, data);
            var element = $compile(angular.element('<div>' + template + '</div>'))(printScope);
            var waitForRenderAndPrint = function() {
                if (printScope.$$phase || $http.pendingRequests.length) {
                    $timeout(waitForRenderAndPrint);
                } else {
                    // Replace printHtml with openNewWindow for debugging
                    printHtml(element.html());
                    printScope.$destroy();
                }
            };
            waitForRenderAndPrint();
        });
    };

    var printFromScope = function(templateUrl, scope) {
    	 console.log("printing!" + scope);
        $rootScope.isBeingPrinted = true;
        $http.get(templateUrl).success(function(template) {
        	console.log(template);
            var printScope = scope;
            //used jquery no bueno
            var element = $compile('<div>' + template + '</div>')(printScope);
            var waitForRenderAndPrint = function() {
                if (printScope.$$phase || $http.pendingRequests.length) {
                    $timeout(waitForRenderAndPrint);
                } else {
                    printHtml(element.html()).then(function() {
                        $rootScope.isBeingPrinted = false;
                    });

                }
            };
            waitForRenderAndPrint();
        });
    };
    return {
        print: print,
        printFromScope: printFromScope,
    };
}]);
