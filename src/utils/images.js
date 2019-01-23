import fetch from "cross-fetch";

export function generateImageUrl(coverIds) {
  return fetch("/covers", {
    mode: "no-cors",
    method: "post",
    body: "fields image_id; where id=(" + coverIds + ");",
    headers: {
      "user-key": process.env.REACT_APP_API_KEY
    }
  })
    .then(
      response => response.json(),

      error => console.log("An error occurred.", error)
    )
    .then(json => {
      return json;
    });
}
