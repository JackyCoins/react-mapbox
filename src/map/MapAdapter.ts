let mapboxgl: any;

export class MapAdapter {
  async init(element: HTMLElement) {
    if (!mapboxgl) {
      mapboxgl = await import("mapbox-gl");
    }

    const mapbox = new mapboxgl.Map({
      accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
      container: element,
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });

    return mapbox;
  }
}
