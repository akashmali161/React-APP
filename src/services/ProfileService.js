export const fetchProfiles = async () => {
    // Simulated API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "John Doe",
            photo: "https://example.com/john.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            address: "123 Main St, New York, NY",
            latitude: 40.7128,
            longitude: -74.006
          },
          // Add more profiles as needed
        ]);
      }, 1000);
    });
  };
  