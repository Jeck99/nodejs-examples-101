// הכוח של סטרימים גדול מאוד, כי הוא מאפשר לי לטפל במידע בינארי או לא בינארי ממש בקלות
// ובלי להתאמץ יותר מדי, מבלי לחשב באפרים )Buffer .(באפר זה בעצם "אזור ההמתנה" של
// הסטרים. כשאנו יוצרים סטרים, הנתונים שלא מספיקים להיכנס אליו "מחכים" בעצם בבאפר.
// אבל כאמור אנו לא נדרשים להבין לעומק את עניין הבאפרים. יוצרים סטרימים ומחברים אותם
// עם פייפים, ובאמצעות אירועים אפשר לנטר או לבצע פעולות נוספות על המידע הזה. פשוט וקל.
const httpServer = require('http').Server;
const fs = require('fs');
const zlib = require('zlib');
class MyServer extends httpServer {
    constructor() {
        super();
        this.listen(3000);
        this.on('request', this.requestHandler);
    }
    requestHandler(request, response) {
        const filename = "info-file.gz";
        const streamReader = fs.createReadStream('./info-file.txt');
        const streamWriter = fs.createWriteStream(filename);
        const zipFile = zlib.createGzip();
        response.writeHead(200, {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment; filename=" + filename
        });
        streamReader.pipe(zipFile).pipe(streamWriter);
        fs.createReadStream(filename).pipe(response);
    }
}
const myServer = new MyServer();