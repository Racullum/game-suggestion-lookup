import fetch from "cross-fetch";

export function generateImageUrl(coverIds) {
  return fetch('/api/covers', {
    method: "post",
    body: "fields image_id; where id=(" + coverIds + ");",
    headers: {
      "Content-Type": "text/plain"
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
