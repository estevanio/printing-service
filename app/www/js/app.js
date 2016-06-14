// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .controller('ctrl', ['$scope', 'printer',  function($scope, printer) {
   
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
        // var printerAvail = $cordovaPrinter.isAvailable();
        $scope.print = function () {
            printer.print("template.html", $scope.data);
        };
}])

.factory('printer', ['$rootScope', '$compile', '$http', '$timeout', '$q', '$cordovaPrinter', function ($rootScope, $compile, $http, $timeout, $q, $cordovaPrinter) {
   
        // var doc = "<html> <body>kjfhdkjfhfdksjhflkf</body> </html>";


    // var print = function (templateUrl, data) {
    //     console.log("yooo");
    //     $cordovaPrinter.print(doc);
    // }  ;

    var print = function(templateUrl, data) {
        $http.get(templateUrl).success(function(template) {
            var printScope = $rootScope.$new();
            angular.extend(printScope, data);
            var element = $compile(angular.element('<div>' + template + '</div>'))(printScope);
            var waitForRenderAndPrint = function() {
                if (printScope.$$phase || $http.pendingRequests.length) {
                    $timeout(waitForRenderAndPrint);
                } else {    
                    // console.log("should print");
                    $cordovaPrinter.print(element.html());
                    printScope.$destroy();
                }
            };
            waitForRenderAndPrint();
        });
    };



    return {
        print: print,
    };
}])
;
