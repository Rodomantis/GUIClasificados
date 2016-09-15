QUnit.test("ajax tests", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/1', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/1");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 2", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/2");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 3", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/3");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 4", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/4");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 5", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/5");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 6", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/1");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 7", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/2");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
QUnit.test("ajax tests 8", function () {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('/some/article', { success: callback });
    
    equal(sinon.requests.length, 1);
    equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/3");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	ok(callback.called);
});
