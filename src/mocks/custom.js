class CustomIdentityRequestWrapper {
  constructor(accessToken) {
    // Initialize the class
    this.accessToken = accessToken;
  }

  async request(args) {
    try {
      const response = await fetch(
        `https://api.us.nylas.com/v3/grants/me/${args.path}`,
        {
          method: args.method,
          body: JSON.stringify(args.body),
          headers: {
            ...args.headers,
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      // const response = await fetch(`http://localhost:3001/api/${args.path}`, {
      //   method: args.method,
      //   body: JSON.stringify(args.body),
      //   headers: {
      //     ...args.headers,
      //     Authorization: `Bearer ${this.accessToken}`,
      //     "Content-Type": "application/json",
      //   },
      // });

      // Check if the response is not okay (e.g., 404, 500)
      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return { error: `Error: ${response.status} ${response.statusText}` };
      }

      // Parse the response
      const data = await response.json();
      console.log(data);
      return [data, null];
    } catch (error) {
      console.error("Fetch error:", error);
      return { error: "Error" };
    }
  }

  /**
   * This method returns the current user's information.
   */
  async currentUser() {
    // IMPLEMENT: Get the logged in user's ID token and return the user information
    // ie. from browser cookies previously set
    return {
      id: "idToken.sub",
      email: "bob@example.com",
      name: "User Name",
      provider: "google",
    };
  }

  /**
   * This method sets the default authentication arguments to use when authenticating the user.
   */
  async setDefaultAuthArgs(authArgs) {
    // Set the default authentication arguments
    return authArgs;
  }

  /**
   * This method returns the URL to redirect the user to for authentication.
   */
  async authenticationUrl() {
    // IMPLEMENT: Return the URL to redirect the user to for authentication
    return "https://example.com/auth";
  }
}

export default CustomIdentityRequestWrapper;
