AngularJS WebStorage Module
===========================
*

APIs:

`jp_WebStorage.local`
* `set(key, value)` -- inserts a key value pair into window.localStorage.setItem()
* `get(key)`        -- return value by key from window.localStorage.getItem()
* `remove(key)`     -- remove a key/value pair from storage (local storage)
* `clear()`         -- remove all key/value pairs from storage (local storage)

`jp_WebStorage.session`
* `set(key, value)` -- inserts a key value pair into window.sessionStorage.setItem()
* `get(key)`        -- return value by key from window.sessionStorage.getItem()
* `remove(key)`     -- remove a key/value pair from storage (session storage)
* `clear()`         -- remove all key/value pairs from storage (session storage)


## Author
Jordan Papaleo, https://github.com/breck421/angular-web-storage

* v0.0.0 - 4/20/2014
    - Modularized a service I created for another project
    - Added grunt tasks for testing, building, and packaging
    - Created unit tests

## License
    The MIT License

    Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
