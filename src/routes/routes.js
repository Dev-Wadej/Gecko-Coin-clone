import { lazy } from 'react';

const SignUp = lazy(() =>
    import ('../screens/auth/signup'));

export const homeroutes = [{
    path: '/signup',
    component: SignUp,
    title: 'Sign Up',
}, ];