import LORG from '../src/app';
import Movie from '../src/services/movie';

describe('LORG', () => {
  let accessKey;

  beforeAll(() => {
    // Arrange
    accessKey = 'some_access_key';
  });

  test('should expose a Movie API interface', () => {
    // Act
    const LORGClient = new LORG(accessKey);

    // Assert
    expect(LORGClient.movie).toBeInstanceOf(Movie);
  });
});
