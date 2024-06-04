import { HttpInterceptorFn } from '@angular/common/http';

export const securityInterceptor: HttpInterceptorFn = (req, next) => {
  if (typeof localStorage !== 'undefined') {
    const username = localStorage.getItem('username') || '';
    const password = localStorage.getItem('password') || '';
    if (username && password) {
      const auth = 'Basic ' + btoa(username + ':' + password);
      const authReq = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: auth,
          'Access-Control-Allow-Origin': '*',
        },
        // withCredentials: false
      })
      console.log(req);
      return next(authReq)
    }
  }
  console.log(req);

  return next(req);
};
