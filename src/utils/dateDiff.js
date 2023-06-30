// NOTE : not very clean, but simplest way I could have readable code

export default function dateDiff(createdAt) {
  let postDate;
  let diff = Date.now() - new Date(createdAt);
  if (diff < 86400000) {
    postDate = "Aujourd'hui";
  } else {
    if (diff < 2678400000) {
      let days = Math.floor(diff / 86400000);
      postDate = "Il y a " + days.toString() + " jours";
    } else {
      let month = Math.floor(diff / 2678400000);
      postDate = "Il y a " + month.toString() + " mois";
    }
  }
  return postDate;
}
