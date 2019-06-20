import { Translate } from '@google-cloud/translate';
import * as dotenv from 'dotenv';

export interface ITranslate {
    source: string;
    target: string;
}

/**
 * Class used as a helper to perform translations
 */
export class Translation {
    /**
     * Function used to perform a translation
     * @param input ITranslate interface used to perform a translation
     */
    public static async translate(input: ITranslate): Promise<[string, any]> {
        const apiKey = `${process.env.TRANSLATE_API}`;
        // export TRANSLATE_API='AIzaSyA6qE4W7klTlfzLTbvnrObJSXNDr_xF-pU';
       // const Translate = require('@google-cloud/translate');
        if (!apiKey) {
            throw Error('No configured API key');
        }
        if (input &&
            input.source && input.target) {
            // Read in the .env file and process the variables
            dotenv.config();
            const translateObj = new Translate({
                key: apiKey
            });
            // The text to translate
            const text = input.source;
            // The target language
            const target = input.target;

            translateObj.translate(text, target)
            .then((results: any ) => {
              const translation = results[0];
// tslint:disable-next-line: no-console
              console.log(`Text: ${text}`);
// tslint:disable-next-line: no-console
              console.log(`Translation: ${translation}`);
            })
            .catch((err: any) => {
// tslint:disable-next-line: no-console
              console.error('ERROR:', err);
            });

            return await translateObj.translate(text, target);
        }
        return [undefined, {}];
    }
}
