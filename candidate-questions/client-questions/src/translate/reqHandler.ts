import {RequestHandler} from 'express';
import { IPost } from '../model/IPost';
import { Translation } from '../translate/google-translate';

export const reqHandler: RequestHandler = (req, res, next) => {
    const newTranslate = {
        langguage: req.body.destinationLang || '',
        text: req.body.convert || ''
    };

    res.send('translated');
    /*

    implement translation  here:

    */
};
