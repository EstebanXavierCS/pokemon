import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { StatsComponent } from './pages/stats/stats.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'list/:id',
        component: ListComponent
    },
    {
        path: 'pokemon/:name',
        component: StatsComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }

];
