import fetch from "cross-fetch";

export function generateImageUrl(coverIds) {
  return fetch("/covers", {
    mode: "no-cors",
    method: "post",
    body: "fields image_id; where id=(" + coverIds + ");",
    headers: {
      "user-key": "a1d21661c77bb5ba89f0797f186f968e"
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
