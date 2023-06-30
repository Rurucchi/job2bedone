import { offers } from "../data/offers.json";

// NOTE : Because the data does not contain any id and is assumed to not be unique, one of the only ways (without generating more data props) of indexing it to an URL is using the index. This function returns a list made of two sub-lists to avoid running the query twice

export default function query(include, location, domain, contractType) {
  // base implementation :

  let elements = [];
  let indexes = [];
  include = include.toLowerCase();

  offers.forEach((element) => {
    if (
      (element.title.toLowerCase().includes(include) ||
        element.description.toLowerCase().includes(include)) &&
      element.location.toLowerCase().includes(location) &&
      element.domain.toLowerCase().includes(domain) &&
      element.contractType.toLowerCase().includes(contractType)
    ) {
      elements.push(element);
      indexes.push(offers.indexOf(element));
    }
  });

  return [elements, indexes];

  // possible implementation :
  // return offers.filter(
  //   (element) =>
  //     (element.title.toLowerCase().includes(include.toLowerCase()) ||
  //       element.description.toLowerCase().includes(include.toLowerCase())) &&
  //     element.location.toLowerCase().includes(location.toLowerCase()) &&
  //     element.domain.toLowerCase().includes(domain) &&
  //     element.contractType.toLowerCase().includes(contractType)
  // );
}
