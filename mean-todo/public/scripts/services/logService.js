angular.module('todoApp')
    .factory('logService', function() {
        return {
            success: function(request, response) {
                console.log('SUCCESS! Request:', request, 
                            ', Response data:', response.data, 
                            ', status:', response.status, 
                            ', statusText:', response.statusText);
            },
            
            failed: function(request, response) {
                console.log('FAILED! Request:', request, 
                            ', Response data:', response.data, 
                            ', status:', response.status, 
                            ', statusText:', response.statusText);
            }
        }
    });
