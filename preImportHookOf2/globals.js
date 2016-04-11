
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"FF77BAA6-1346-4EA4-9551-C45087F2D950"}
 */
function executePreImportCode(arg, queryParams) {
	application.output("Running pre import hook code of solution 2.")
//	plugins.maintenance.getServer(...);
}
