import './index.scss';
import angular from 'angular';
import template from './index.tpl.html';
import TreeSearchController from './TreeSearchController';

const ddo = {
	controller: TreeSearchController,
	template
};


export default angular
	.module('ccms.components.treeSearch', [])
	.component('ccTreeSearch', ddo)
	.name;
