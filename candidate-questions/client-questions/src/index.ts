import bodyParser = require('body-parser');
import express from 'express';
import {ITranslate, Translation} from './translate/google-translate';
import {reqHandler} from './translate/reqHandler';

const app = express();
const port = 8080; // default port to listen'
const jsonParser = bodyParser.json();

// define a route handler for the default home page
app.get( '/', async ( resp: any, res: any ) => {
    const translateInterface: ITranslate = {
        source: 'This API call part is successful.',
        target: 'fr'
    };
    const response: [string, any] = await Translation.translate(translateInterface);
    res.send( response[0] );
} );

app.post( '/test', jsonParser, reqHandler );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
