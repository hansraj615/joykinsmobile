module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-navigation|react-native-vector-icons)/)',
  ],
  moduleNameMapper: {
    '^@react-native-async-storage/async-storage$': '<rootDir>/__mocks__/asyncStorageMock.ts',
    '^@react-navigation/drawer$': '<rootDir>/__mocks__/reactNavigationDrawerMock.ts',
  },
};
