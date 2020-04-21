const getResource = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiNjUxMjE2MTM0NmEwODQ4MWUwMTg4N2NmOTliM2ZlMzc0NTAyYjcxYzAxZTUxNGIyYzA5NzU3YWM4ZTczMmY2ZmZjYjgxMmFiOGQ2YzM2MTgiLCJpYXQiOjE1ODc0MzY2OTgsIm5iZiI6MTU4NzQzNjY5OCwiZXhwIjoxNjE4OTcyNjk4LCJzdWIiOiIxMCIsInNjb3BlcyI6W119.n76lcx4tlQJoI6VNAInXAyLAIvI-YpMgf4Gz8I_k-OJ83MZT-QOVd5AS6UB-Z08dwJ3Pa8pqokk0HbE7AHLofRb3HMNCYYCQBvHkpF58DtRizhb2NRXDxOdnL8KNJ5RBq9oujMHWoONI51DHv-cb5HU4UtOo1spwJazJoibEvDJXibh0tGLbqZWXSsoOFKU8qPFmBdiWWYYSyZyauPecTmX6RV0AqRR3NBbbVsnUAWM6Mp2OsJMYrM0bu3o787ypHUSbwt_vkGlRWNrO1nIgYECgpIGv9h9Lrper7a3HLUoComKqYkQ66QTxwtorrM5u_3dSNn1m3ovBkWS_Hhwm2Vb3OVY03HiMGbuwCjttiztiKXRDw4WjSSIlNEnEzjV7sO76lgMmwgF3AQl6_5rpbQe4A1N0ZZ-g47Tpljf6f5o6xf67v6EySPLTb06KBwaDaBORoTfeDoUKXZ8l0OebgBg9Hp3smAqSA4HiiO-saezHoasT-sp1izH6tNsLmwpnlTVlUY1pxTWneZeoxf4ndcbZ2gWeLlafm1ohq2WTY87IJWF2hXyfwK8XVFHJ0Db58Gx5hziN2AoyaChm2eitJCXK4r6riAPuBc7HxUHHBNl8Ei2T1Tc9ZEvMt2Ec7zpjPEb2YthXj_56WU_HNNtNytBMndjSifh9ycX6bsbwoEc",
    },
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
  }

  return await res.json();
};

let userData = {
  email: "nuba8184@gmail.com",
  name: "Oleg",
  password: "123456",
  c_password: "123456",
};

// let getData = getResource("http://nubo.skivi.ru/api/v1/login", userData);
let getData = getResource("http://nubo.skivi.ru/api/v1/getUser");

const servData = function (data) {
  console.log("--->", data);
  return data;
};

getData.then(servData);

// const newPromise = loginAction("http://nubo.skivi.ru/api/v1/login", userData);

// const a = newPromise;
// console.log("ffff", a);

// getData.then((data) => {
//   console.log(data.success);
// });
// console.log("Get Data", data);

// let getData = getResource("http://nubo.skivi.ru/api/v1/register", userData);
// token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMDM0MmRmYWNhMDBiZmQzYTI5N2RmNDlkOGY0Yzc5OGFlZTlmMzljNGE1MWNjMGFjZDBjNGNiN2Q2ZjUxOWU3ZjE5ZTJhZmYxYjIyNGE4MjQiLCJpYXQiOjE1ODcwOTMzODMsIm5iZiI6MTU4NzA5MzM4MywiZXhwIjoxNjE4NjI5MzgzLCJzdWIiOiIxMCIsInNjb3BlcyI6W119.tqOeBODLKLDnmsYMG7ZCvZIFerXmAiycJcXC47rMRaVTyKQJ9pSxRMxFmr3ixDfW-4FfRCRJFnvgDRRy4lPGZzTIG_OSZr2N0ZhyDtg5LEzjF25cDHMEzK1nwVLZJDr-sI5dKpYwjL9qUIAeNcCn4GstoZLta_Jr9F65TiuOUTatKUrgcLlbXkjIb9-pUJkAZK_akTLcZlhxhvjxnyMeElrAv3Aqsw_Q6G8wYuVMCzVSL_ysNjmga4x9vqHjW5en6pahXquKRzybVRAmGBuKcg-yIJoLTAatWINtSfmDEL0rUaESlhQs4Ew28Hl5c6nCc9823-zCS3GeVoRFOAbp_AbRnaWezLWRjpfC-1a17vovKwjbcds1KZR7WCc7JkAQFpLxVpWz2i5f6m0gZRt3xDOS1PUmZx_vU-4AGR6b908aPA3L35NZYLR0d4rNXJZLUSysqWVb4Ux2Y-ea7D0VnIZU34BXkYFSIEXD8HeMoeCZhnXWtAuq92PlEO2__2ofPwmHXjfwwnMpZ8Su0eK6X0SRXyAMhW4VT9c41y5LG_iEwcYQYyy7UfMAJi0yPeER0WrCOjz1xjK_Tp5GP2S1KdF-SOBfIXAQUs5Gro9dodE2G84Sw64WFiDzXrwUsR2LoOSVTMqRHurUqdI85L5aCwP1rMOnOQDHEycHZzzNYSY";
