import { MenuItem } from '../core-component/models';

export const SIDE_NAV_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    icon: 'fa-solid fa-house',
    routerLink: '/home',
    skipRouterLink: true,
    authorities: [
      // Use apply permission <i class="fa-solid fa-mug-saucer"></i>
    ],
  },
  {
    label: 'Syllabus',
    icon: 'fa-solid fa-book-open',
    skipRouterLink: false,
    routerLink: '/syllabus',
    authorities: [
      // Use apply permission
    ],
    items: [
      {
        label: 'View syllabus',
        routerLink: '/syllabus/view-syllabus',
      },
      {
        label: 'Create syllabus',
        routerLink: '/syllabus/create-syllabus',
      },
    ],
  },

  {
    label: 'Training program',
    icon: 'fas fa-calendar-alt',
    routerLink: '/training',
    skipRouterLink: true,
    authorities: [
      // Use apply permission
    ],
    items: [
      {
        label: 'View program',
        routerLink: '/training/view',
      },
      {
        label: 'Create program',
        routerLink: '/training/create',
      },
    ],
  },

  {
    label: 'Class',
    icon: 'fas fa-calendar-alt',
    routerLink: '/class',
    skipRouterLink: true,
    authorities: [
      // Use apply permission
    ],
    items: [
      {
        label: 'View class',
        routerLink: '/class/view',
      },
      {
        label: 'Create class',
        routerLink: '/class/create',
      },
    ],
  },
  {
    label: 'Training calendar',
    icon: 'fas fa-calendar-alt',
    routerLink: '/calendar',
    skipRouterLink: true,
    authorities: [
      // Use apply permission
    ],
    items: [
    ],
  },
  {
    label: 'User management',
    icon: 'fas fa-user-alt',
    routerLink: '/user',
    skipRouterLink: true,
    authorities: [
      // Use apply permission
    ],
    items: [
      {
        label: 'User List',
        routerLink: '/user/list',
      },
    ],
  },
  {
    label: 'Learning materials',
    icon: 'fas fa-user-alt',
    routerLink: '/learning',
    skipRouterLink: true,
    authorities: [
    ],
    items: [
    ],
  },
  {
    label: 'Setting',
    icon: 'fas fa-user-alt',
    routerLink: '/setting',
    skipRouterLink: true,
    authorities: [
    ],
    items: [
    ],
  },
];
