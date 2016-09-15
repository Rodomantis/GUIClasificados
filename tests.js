
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/1', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/1");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/2', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/2");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/3', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/3");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/4', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/4");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/5', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/5");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/6', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/6");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/7', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/7");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/8', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/8");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/9', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/9");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/10', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/10");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/11', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/11");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/12', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/12");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/13', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/13");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/14', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/14");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/persona/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/persona/15");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/1', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/1");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/2', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/2");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/3', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/3");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/4', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/4");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/5', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/5");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/6', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/6");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/7', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/7");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/8', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/ussuario/8");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/9', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/9");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/10', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/10");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/11', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/11");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/12', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/12");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/13', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/13");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/14', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/14");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/15");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/15");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/15");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/15");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/16', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/17");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/10', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/9', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/10");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/10', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/9");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/11', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/11");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/12', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/12");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/13', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/13");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/14', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/14");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/15', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/15");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/16', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/26");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/17', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/17");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/us/18', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/18");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/19', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/us/19");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/usuario/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/usuario/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
QUnit.test("ajax tests", function (assert) {
    var xhr = sinon.useFakeXMLHttpRequest();
    var requests = sinon.requests = [];

    xhr.onCreate = function (request) {
        requests.push(request);
    };

    var callback = sinon.spy();
    
    $.ajax('http://localhost/PAgCLas/index.php/anuncio/20', { success: callback });
    
    assert.equal(sinon.requests.length, 1);
    assert.equal(sinon.requests[0].url, "http://localhost/PAgCLas/index.php/anuncio/20");
		
	requests[0].respond(200, { "Content-Type": "application/json" }, '[]');
		
	assert.ok(callback.called);
});
