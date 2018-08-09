const fs = require("fs");
const path = require("path");
const appDirectoryResolved = fs.realpathSync(process.cwd()); // this should resolve symlinks as well as normal folders

module.exports = {
	dist: path.resolve(appDirectoryResolved, "dist/"),
	src: path.resolve(appDirectoryResolved, "src/"),
	indexfile: path.resolve(appDirectoryResolved, "src/index.js"),
	publicsrc: path.resolve(appDirectoryResolved, "public/"),
	htmlfile: path.resolve(appDirectoryResolved, "public/index.html"),
	app: path.resolve(appDirectoryResolved, "src/app/")
};
