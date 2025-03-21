export default defineNuxtRouteMiddleware((to) => {
  // import.meta を利用した分岐でも OK
  if (!window?.localStorage)
    return;

  // if (to.path === '/abc') {
  //   return navigateTo('/');
  // }
  return true;

  const isSignedIn = JSON.parse(window.localStorage.getItem('isSignedIn') || 'false');

  if (!isSignedIn && to.path !== '/') {
    return navigateTo('/');
  }
  else {
    return true;
  }
});
