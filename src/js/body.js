const defaultUserName = "yuki-tomioka";
const profileElement = document.getElementById("profile");
const profileGetButton = document.getElementById("gitHubUserNameButton");
const scrollTopButton = document.getElementById("scrollTop");

const getGitHubProfile = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const json = await response.json();
  return json;
};

const getUseName = () => {
  const targetElement = document.getElementById("gitHubUserName");
  return targetElement.value;
};

const buildGitHubProfile = async () => {
  const userName = getUseName();
  const profile = await getGitHubProfile(userName ?? defaultUserName);

  while (profileElement.firstChild) {
    profileElement.removeChild(profileElement.firstChild);
  }

  profileElement.append(JSON.stringify(profile));
};

profileGetButton.addEventListener("click", buildGitHubProfile);
buildGitHubProfile();

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
