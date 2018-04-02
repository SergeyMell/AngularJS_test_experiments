import angular from 'angular';
import DashboardController from './dashboard/dashboard.controller';

angular
    .module('core', [])
    .controller('DashboardController', DashboardController);