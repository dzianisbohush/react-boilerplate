import serialize from 'serialize-javascript';

const htmlPage = ({ styledComponentsStyles, markup, finalState, scripts }) => `
  <!doctype html>
    <html lang="">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Passport pocket</title>
      ${styledComponentsStyles}
      <meta name="viewport" content="width=device-width, initial-scale=1">
       
    </head>
    <body>
    <div id="app">${markup}</div>
    <script>
      window.__PRELOADED_STATE__ = ${serialize(finalState)}
    </script>
     ${scripts
       .map(script => {
         return `
           <script src="${script.file}"></script>`;
       })
       .join(' ')}
    </body>
    </html>
`;

export default htmlPage;
