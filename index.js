

const zlib = require('zlib');
const fs = require('fs')
const path = require('path');
const gzip = zlib.createGzip()

const reader = fs.createReadStream('input.txt', 'utf8');
const loger =  fs.createWriteStream('input.txt.gz');

const args = process.argv.slice(2)
const absSourcePath = path.resolve(args[0])
const targetFileName = args[1] || path.parse(absSourcePath) + '.gz'
path.join(__dirname, targetFileName)



reader.pipe(gzip).pipe(loger)

reader.on('end', () => {
    console.log('loading complete')
})