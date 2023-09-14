async function callApi() {
  const API_URL = "https://purple-impalas-return.loca.lt/";

  const response = await fetch(API_URL);
  const objects = await response.json();
  const strObjs = JSON.stringify(objects, null, 2);

  document.getElementById("#content").innerHTML = strObjs.replaceAll(" ", "&nbsp;").replaceAll("\n", "<br />");
  console.log(objects);
}
