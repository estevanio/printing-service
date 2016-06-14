var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, PrintSvc, $http) {
    $scope.name = 'World';
    $scope.account = "account";
    $scope.actual_amount_paid = "actual_amount_paid";
    $scope.actual_amount_paid_in_yard_services_not_in__use = "actual_amount_paid_in_yard_services_not_in__use";
    $scope.address = "address";
    $scope.adjustments = "adjustments";
    $scope.authorization_date_time = "";
    $scope.city = "city";
    $scope.city_fee = "city_fee";
    $scope.company_name = "company_name";
    $scope.completion_time = "completion_time";
    $scope.current_date = "current_date";
    $scope.current_date_time = "current_date_time";
    $scope.date_time_of_signature = "date_time_of_signature";
    $scope.days_of_storage = "days_of_storage";
    $scope.default_police_dept = "default_police_dept";
    $scope.description = "description";
    $scope.driver_initials = "driver_initials";
    $scope.first_observed = "first_observed";
    $scope.gate_fee = "gate_fee";
    $scope.generated_invoice_ = "generated_invoice_";
    $scope.license_plate = "license_plate";
    $scope.lien_fee = "lien_fee";
    $scope.payer_address = "payer_address";
    $scope.payer_drivers_license = "payer_drivers_license";
    $scope.payer_name = "payer_name";
    $scope.payer_phone = "payer_phone";
    $scope.primary_phone_number = "primary_phone_number";
    $scope.property_address = "property_address";
    $scope.releasee_address = "releasee_address";
    $scope.releasee_drivers_license = "releasee_drivers_license";
    $scope.releasee_name = "releasee_name";
    $scope.releasee_phone = "releasee_phone";
    $scope.state = "state";
    $scope.storage_fee = "storage_fee";
    $scope.street = "street";
    $scope.total_balance_owed = "total_balance_owed";
    $scope.total_due = "total_due";
    $scope.tow_fee = "tow_fee";
    $scope.tow_method = "tow_method";
    $scope.tow_pickup = "tow_pickup";
    $scope.tow_time = "tow_time";
    $scope.vehicle = "vehicle";
    $scope.vehicle_class = "vehicle_class";
    $scope.vehicle_color = "vehicle_color";
    $scope.vehicle_year = "vehicle_year";
    $scope.vin = "vin";
    $scope.violations = "violations";
    $scope.who_released_vehicle = "who_released_vehicle";
    $scope.zip_code = "zip_code";
    $scope.data = {};
    $scope.data.name = 'World';
    $scope.data.account = "account";
    $scope.data.actual_amount_paid = "actual_amount_paid";
    $scope.data.actual_amount_paid_in_yard_services_not_in__use = "actual_amount_paid_in_yard_services_not_in__use";
    $scope.data.address = "address";
    $scope.data.adjustments = "adjustments";
    $scope.data.authorization_date_time = "";
    $scope.data.city = "city";
    $scope.data.city_fee = "city_fee";
    $scope.data.company_name = "company_name";
    $scope.data.completion_time = "completion_time";
    $scope.data.current_date = "current_date";
    $scope.data.current_date_time = "current_date_time";
    $scope.data.date_time_of_signature = "date_time_of_signature";
    $scope.data.days_of_storage = "days_of_storage";
    $scope.data.default_police_dept = "default_police_dept";
    $scope.data.description = "description";
    $scope.data.driver_initials = "driver_initials";
    $scope.data.first_observed = "first_observed";
    $scope.data.gate_fee = "gate_fee";
    $scope.data.generated_invoice_ = "generated_invoice_";
    $scope.data.license_plate = "license_plate";
    $scope.data.lien_fee = "lien_fee";
    $scope.data.payer_address = "payer_address";
    $scope.data.payer_drivers_license = "payer_drivers_license";
    $scope.data.payer_name = "payer_name";
    $scope.data.payer_phone = "payer_phone";
    $scope.data.primary_phone_number = "primary_phone_number";
    $scope.data.property_address = "property_address";
    $scope.data.releasee_address = "releasee_address";
    $scope.data.releasee_drivers_license = "releasee_drivers_license";
    $scope.data.releasee_name = "releasee_name";
    $scope.data.releasee_phone = "releasee_phone";
    $scope.data.state = "state";
    $scope.data.storage_fee = "storage_fee";
    $scope.data.street = "street";
    $scope.data.total_balance_owed = "total_balance_owed";
    $scope.data.total_due = "total_due";
    $scope.data.tow_fee = "tow_fee";
    $scope.data.tow_method = "tow_method";
    $scope.data.tow_pickup = "tow_pickup";
    $scope.data.tow_time = "tow_time";
    $scope.data.vehicle = "vehicle";
    $scope.data.vehicle_class = "vehicle_class";
    $scope.data.vehicle_color = "vehicle_color";
    $scope.data.vehicle_year = "vehicle_year";
    $scope.data.vin = "vin";
    $scope.data.violations = "violations";
    $scope.data.who_released_vehicle = "who_released_vehicle";
    $scope.data.zip_code = "zip_code";

    $scope.printtpl = function() {
        $http.get("template.html").success(function(template) {
            PrintSvc.printtmpl(template, $scope.data);
        });
    };
    $scope.printdata = function() {
        PrintSvc.printUrl("template.html", $scope.data);
    };
})


.factory('PrintSvc', ['$rootScope', '$compile', '$document', '$http', '$timeout', '$q', function($rootScope, $compile, $document, $http, $timeout, $q) {
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

    var printUrl = function(templateUrl, data) {
        $http.get(templateUrl).success(function(template) {
            var printScope = $rootScope.$new();
            angular.extend(printScope, data);
            var element = $compile(angular.element('<div>' + template + '</div>'))(printScope);
            var waitForRenderAndPrint = function() {
                if (printScope.$$phase || $http.pendingRequests.length) {
                    $timeout(waitForRenderAndPrint);
                } else {
                    printHtml(element.html());
                    printScope.$destroy();
                }
            };
            waitForRenderAndPrint();
        });
    };

    var printtmpl = function(template, data) {
        var printScope = $rootScope.$new();
        angular.extend(printScope, data);
        var element = $compile(angular.element('<div>' + template + '</div>'))(printScope);
        var waitForRenderAndPrint = function() {
            if (printScope.$$phase) {
                $timeout(waitForRenderAndPrint);
            } else {
                printHtml(element.html());
                printScope.$destroy();
            }
        };
        waitForRenderAndPrint();

    };

    return {
        printUrl: printUrl,
        printtmpl: printtmpl
    };
}]);
