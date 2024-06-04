export default function formatCreatedAt(createdAt) {
  const currentDate = new Date();
  const createdDate = new Date(createdAt);
  const timeDifference = currentDate.getTime() - createdDate.getTime();
  const followedDays = Math.floor(timeDifference / (24 * 3600 * 1000));
  const year = createdDate.getFullYear();
  const month = String(createdDate.getMonth() + 1).padStart(2, "0");
  const day = String(createdDate.getDate()).padStart(2, "0");
  const hours = String(createdDate.getHours()).padStart(2, "0");
  const minutes = String(createdDate.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  const formattedDateAndTime = `${year}/${month}/${day} ${hours}:${minutes}`;
  return {
    followedDays,
    formattedDateAndTime,
  };
}
