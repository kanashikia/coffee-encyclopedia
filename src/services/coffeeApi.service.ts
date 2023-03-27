import axios from "axios";
import { BehaviorSubject } from "rxjs";

export const hotCoffees: BehaviorSubject<[]> = new BehaviorSubject([]);

export const getHotCoffees = () => {
  axios.get("https://api.sampleapis.com/coffee/hot").then((res) => {
    hotCoffees.next(res.data);
  });
};
