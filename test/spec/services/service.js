'use strict';

describe('Service: service', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var service;
  beforeEach(inject(function (_service_) {
    service = _service_;
  }));

  it('should do something', function () {
    expect(!!service).toBe(true);
  });

});
