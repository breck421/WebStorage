describe("WebStorage unit tests:", function() {
	beforeEach(module('jp.WebStorage'));

	//	SESSION STORAGE
	describe('If using sessionStorage', function() {
		var testVal;

		beforeEach(inject(function (jp_WebStorage) {
			jp_WebStorage.session.set('test1', 'testVal');
			testVal = btoa('testVal');
		}));

		afterEach(inject(function (jp_WebStorage) {
			jp_WebStorage.session.clear();
		}));

		describe("When storing a string", function() {
			it('should be equal', function() {
				expect(window.sessionStorage.getItem('test1')).toBe(testVal);
			});
		});

		describe("When getting a string", function() {
			it('should return the string\'s value', inject(function(jp_WebStorage) {
				expect(jp_WebStorage.session.get('test1')).toBe('testVal');
			}));
		});

		describe("When deleting a string to local", function() {
			beforeEach(inject(function (jp_WebStorage) {
				jp_WebStorage.session.remove('test1');
			}));

			it('should should be null', function() {
				expect(window.sessionStorage.getItem('test1')).toBeNull();
			});
		});
	});

	//	LOCAL STORAGE
	describe('If using localStorage', function() {
		var testVal;

		beforeEach(inject(function (jp_WebStorage) {
			jp_WebStorage.local.set('test1', 'testVal');
			testVal = btoa('testVal');
		}));

		afterEach(inject(function (jp_WebStorage) {
			jp_WebStorage.local.clear();
		}));

		describe("When storing a string", function() {
			it('should be equal', function() {
				expect(window.localStorage.getItem('test1')).toBe(testVal);
			});
		});

		describe("When getting a string", function() {
			it('should return the string\'s value', inject(function(jp_WebStorage) {
				expect(jp_WebStorage.local.get('test1')).toBe('testVal');
			}));
		});

		describe("When deleting a string", function() {
			beforeEach(inject(function (jp_WebStorage) {
				jp_WebStorage.local.remove('test1');
			}));

			it('should be null', function() {
				expect(window.localStorage.getItem('test1')).toBeNull();
			});
		});
	});
});