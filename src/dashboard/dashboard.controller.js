DashboardController.$inject = ['$http'];

export default function DashboardController($http) {

    const vm = this;

    vm.model = {
        users: []
    };

    activate();

    function activate() {
        $http.get('https://jsonplaceholder.typicode.com/users')
            .then(response => vm.model.users = response.data)
            .catch(error => console.log(error));
    }

}