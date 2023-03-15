export const ApiHelper = async (url, data = {}, method = "GET") => {
    try {
      const response = await fetch(url, {
        // Return promise
        method,
        ...(method !== "GET" && { body: JSON.stringify(data) }),
        withCredentials: true,
        // credentials: 'include',
        headers: {
          AuthToken: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const jsonFormData = await response.json();
      const responseToken = response.headers.get("Authtoken");
      if (responseToken) {
        localStorage.setItem("token", responseToken);
      }
      if (response.status === 200) {
        return jsonFormData;
      }
      throw new Error(jsonFormData.error || jsonFormData);
    } catch (e) {
      throw new Error(e.message);
    }
  };
  
  export const request = async (callback, url, data, method = "GET") => {
    try {
      const response = await ApiHelper(url, data, method);
      return callback(response, null);
    } catch (e) {
      return callback(null, e.message);
    }
  };
  