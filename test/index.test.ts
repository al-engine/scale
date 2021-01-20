import createFramedUpscale from '../src';

test('Same size scale, x: 0 y: 0', function() {
  const setMock = jest.fn();
  const getMock = jest.fn();

  const pixels = {
    setPixel: setMock,
    getPixel: getMock,
  };

  const from = {
    width: 200,
    height: 200,
  };
  const to = {
    width: 200,
    height: 200,
  };
  const scale = createFramedUpscale(from, to);
  const setPixel = scale(pixels);

  setPixel(0, 0, 1);
  expect(setMock.mock.calls[0]).toEqual([0, 0, 1]);
});

test('Same size scale, x: 100 y: 100', function() {
  const setMock = jest.fn();
  const getMock = jest.fn();

  const pixels = {
    setPixel: setMock,
    getPixel: getMock,
  };

  const from = {
    width: 200,
    height: 200,
  };
  const to = {
    width: 200,
    height: 200,
  };
  const scale = createFramedUpscale(from, to);
  const setPixel = scale(pixels);

  setPixel(100, 100, 1);
  expect(setMock.mock.calls[0]).toEqual([100, 100, 1]);
});

test('Upscale, x: 0 y: 0', function() {
  const setMock = jest.fn();
  const getMock = jest.fn();

  const pixels = {
    setPixel: setMock,
    getPixel: getMock,
  };

  const from = {
    width: 100,
    height: 100,
  };
  const to = {
    width: 200,
    height: 200,
  };
  const scale = createFramedUpscale(from, to);
  const setPixel = scale(pixels);

  setPixel(0, 0, 1);
  expect(setMock.mock.calls[0]).toEqual([0, 0, 1]);
  expect(setMock.mock.calls[1]).toEqual([0, 1, 1]);
  expect(setMock.mock.calls[2]).toEqual([1, 0, 1]);
  expect(setMock.mock.calls[3]).toEqual([1, 1, 1]);
});

test('Upscale, x: 10 y: 10', function() {
  const setMock = jest.fn();
  const getMock = jest.fn();

  const pixels = {
    setPixel: setMock,
    getPixel: getMock,
  };

  const from = {
    width: 100,
    height: 100,
  };
  const to = {
    width: 200,
    height: 200,
  };
  const scale = createFramedUpscale(from, to);
  const setPixel = scale(pixels);

  setPixel(10, 10, 1);
  expect(setMock.mock.calls[0]).toEqual([20, 20, 1]);
  expect(setMock.mock.calls[1]).toEqual([20, 21, 1]);
  expect(setMock.mock.calls[2]).toEqual([21, 20, 1]);
  expect(setMock.mock.calls[3]).toEqual([21, 21, 1]);
});
