import { generateQRcode } from 'backend/qrCode.web';

$w.onReady(() => {
	$w('#generateButton').onClick(async () => {
		const toGenerate = $w('#qrInput').value;
		const qr = await generateQRcode(toGenerate);
		$w('#qrVector').src = qr;
	});
});
