
import React, { createContext, useContext, useEffect, useState } from "react";

const GitHubUserContext = createContext();



export const useGitHubUserContext = () => useContext(GitHubUserContext);


const GitHubUserContextProvider = ({ children }) => {
  const [GitHubUserData, setGitHubUserData] = useState(false);

  async function fetchGitHubUserData() {
    const response = await fetch(`https://api.github.com/users/nefejames`);
    const data = await response.json();
    setGitHubUserData(data);
  }

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  const data = GitHubUserData;

  return (
    <GitHubUserContext.Provider value={data}>
      {children}
    </GitHubUserContext.Provider>
  );
}

export default GitHubUserContextProvider;