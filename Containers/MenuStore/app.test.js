const mysql = require('mysql');
jest.mock('mysql'); 

describe('MySQL Database Connection', () => {
  let consoleLogSpy, consoleErrorSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });

  it('should connect to the MySQL database successfully', () => {
    const mockConnect = jest.fn((callback) => callback(null));
    const mockCreateConnection = {
      connect: mockConnect,
    };
    mysql.createConnection.mockReturnValue(mockCreateConnection);

    const db = require('./config/db'); 
    expect(mockConnect).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith('Connected to the MySQL database'); // Check if the success message was logged
  });

  it('should handle MySQL connection error', () => {
    const mockError = new Error('Connection failed');
    const mockConnect = jest.fn((callback) => callback(mockError));
    const mockCreateConnection = {
      connect: mockConnect,
    };

    mysql.createConnection.mockReturnValue(mockCreateConnection);

    
    const db = require('./config/db'); 
    expect(mockConnect).toHaveBeenCalled(); 
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error connecting to MySQL database:', mockError); // Check if the error message was logged
  });
});