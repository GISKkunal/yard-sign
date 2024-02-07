export function sortAddress(add) {
  const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add?.length - 4)}`;
  return sortAdd;
}

export function sortAccount(add) {
  const sortAdd = `${add?.slice(0, 0)}...${add?.slice(add?.length - 4)}`;
  return sortAdd;
}

export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};

// base 64 converter function
export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
};