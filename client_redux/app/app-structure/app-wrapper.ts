import {Component}                 from 'angular2/core';
import {TodoApp}             from '../components/TodoApp.compnt';
import {AppFooter}                 from './app-footer';
import {AppHeader}                 from './app-header';
import {stateAndDispatcher} from '../logic/StateAndDispatcher';
import {TodoService} from '../services/TodoService.service';
import {Logger} from '../services/Logger.service';

@Component({
  selector   : 'my-app',
  template   : `<app-header></app-header>
                <todo-app></todo-app>
                <app-footer></app-footer>
              `,
  directives: [AppHeader,TodoApp,AppFooter],
  providers: [stateAndDispatcher,TodoService,Logger]
})
export class AppWrapper {}
