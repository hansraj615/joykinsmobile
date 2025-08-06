const storage: Record<string, string> = {};

export default {
  setItem: async (key: string, value: string) => {
    storage[key] = value;
    return value;
  },
  getItem: async (key: string) => {
    return storage[key] ?? null;
  },
  removeItem: async (key: string) => {
    delete storage[key];
  },
};
