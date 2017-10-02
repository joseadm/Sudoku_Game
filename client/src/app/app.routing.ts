import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import user
import { UserEditComponent } from './components/user-edit.component';

// import sudoku
import { SudokuComponent } from './components/sudoku.component';

const appRoutes: Routes =[
    {path: '', component: SudokuComponent},
    {path: 'sudoku', component: SudokuComponent},    
    {path: 'mis-datos', component: UserEditComponent},
    {path: '**', component: SudokuComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
