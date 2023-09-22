 import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'syllabus',
    loadChildren: () =>
      import('./pages/syllabus/syllabus.module').then((m) => m.SyllabusModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account-page/account-page.module').then(
        (m) => m.AccountPageModule
      ),
  },
  {
    path: 'class',
    loadChildren: () =>
      import('./pages/class/class.module').then((m) => m.ClassModule),
  },
  {
    path: 'training',
    loadChildren: () =>
      import('./pages/training/training.module').then((m) => m.TrainingModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./pages/training-calendar/training-calendar.module').then(
        (m) => m.TrainingCalendarModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user-management/user-management.module').then(
        (m) => m.UserManagementModule
      ),
  },
  {
    path: 'learning',
    loadChildren: () =>
      import('./pages/learning-materials/learning-materials.module').then(
        (m) => m.LearningMaterialsModule
      ),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./pages/setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
