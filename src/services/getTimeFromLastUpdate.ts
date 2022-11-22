const getTimeFromLastUpdate = (updatedAt: string) => {
  let currentDate = new Date().getTime();
  let updatedDate = new Date(updatedAt).getTime();
  console.log(updatedDate);
  let timeFromLastUpdate = Math.round(
    (currentDate - updatedDate) / (1000 * 60 * 60 * 24 * 365)
  );

  return timeFromLastUpdate;
};

export default getTimeFromLastUpdate;
