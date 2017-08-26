import angular from 'angular';
import * as d3 from 'd3';




export default angular.module('webApp.d3', [])
	.factory('d3factory', function(){
		return d3;
	}).name; 
  