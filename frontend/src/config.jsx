let INITIAL_URL = "";

if (import.meta.env.VITE_APP_ENV == "production") {
  INITIAL_URL = import.meta.env.VITE_API_DEPLOYED_URL;
} else {
  INITIAL_URL = import.meta.env.VITE_API_LOCAL_URL;
}

export const IMG_URL = INITIAL_URL + "/images";
export const API_URL = INITIAL_URL + "/api";
