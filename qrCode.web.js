import QRCode from 'qrcode';
import { Permissions, webMethod } from "wix-web-module";


export const generateQRcode = webMethod(Permissions.Anyone, (toEncode) => {
    let opts = {
        errorCorrectionLevel: 'H',
        type: 'svg',
        rendererOpts: {
            quality: 0.3
        }
    };
    
    return QRCode.toString(toEncode, opts, (err, string) => {
        if (err) throw err;
        return string;
    })
});


