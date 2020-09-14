import App from './App.svx';

fig.init = (stdin, options) => {
  //
  // Fig setup.
  //
  fig.title = "🧰 Project Manager";
  fig.icon = '';

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
