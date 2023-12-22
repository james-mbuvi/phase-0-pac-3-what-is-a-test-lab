describe("what-is-a-test", () => {
  describe("Name", () => {
    it("returns 'Susan'", () => {
      // Define the name
      var name = "Susan";
      expect(name).toBe("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      // Define the height
      var height = 35;
      expect(height).toBeLessThan(40);
    });

    it("is greater than 0", () => {
      // Define the height
      var height = 35;
      expect(height).toBeGreaterThan(0);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      // Define the name and height
      var name = "Susan";
      var height = 35;
      
      // Generate the message
      var message = `Name\n 2) returns "${name}"\nHeight\n 3) is less than 40 and greater than 0\nMessage\n 4) gives the name and height`;

      expect(message).toBeTruthy();
    });
  });
});
