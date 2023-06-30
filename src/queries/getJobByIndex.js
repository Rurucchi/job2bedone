import { offers } from "../data/offers.json";

export default function getJobByIndex(index) {
  return offers[index];
}
