module.exports = function (grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		typescript: {
			base: {
				src: ["typed-scripts/*.ts"],
				dest: "compiled-scripts/app.js",
				options: {
					module: "commonjs",
					target: "es5",
					basePath: "",
					sourceMaps: true,
					declaration: true
				}
			}
		}
	});

	grunt.registerTask("default", ["typescript"]);
};