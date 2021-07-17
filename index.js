const log = require('./log');
const settings = require('./settings');
const utilSQL = require('./mysql/util');
const util = require('./util');

var link = process.argv.slice(2);
var uuid = util.createUUID();
var key;

main();

function main() {
    utilSQL.getData(link, (error, data) => {
        if(error) throw error;
        key = data;
    });
    setTimeout(() => {
        if(key != null) {
            log.error('This link already shorted: ' + settings.websiteLink + key);
            process.exit();
            return;
        }
        if(!util.checkLink(link)) {
            log.error('Link as wrong, please check link.');
            process.exit();
            return;
        }
        short();
        process.exit();
    }, 400);
}

function short() {
    var shortedLink = settings.websiteLink + uuid;
    utilSQL.setData(uuid, link);
    log.success('Link successfully shorted: ' + shortedLink);
    util.copyString(shortedLink);
    log.success('Link copied to clipboard.');
}