import App from './App.svx';

fig.init = (stdin, options) => {
  //
  // Fig setup.
  //
  fig.title = fig.env.PWD;
  fig.icon = 'fig://${fig.env.PWD}'

  //
  // Calling the application.
  //
  const app = new App({
    target: document.body,
    props: {
      fig: fig
    }
  });
}
