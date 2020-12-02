import axios from "axios";

const instance = axios.create({
  baseURL: "http://www.filltext.com/",
});

export const dataAPI = {
  async getData(size) {
    try {
      const data = await instance.get(
        `?rows=${size}&id={number|${size}}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};
