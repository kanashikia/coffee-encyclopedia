import { hotCoffees } from "@/services/coffeeApi.service";
import styles from "@/styles/Card.module.css";
import { Card } from "./card.component";
import { useEffect, useState } from "react";

export function CardHandler() {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const subs$ = hotCoffees.subscribe((response) => setData(response));
    console.log(data);
  }, [data]);

  return (
    <div className={styles.cardHandlerContainer}>
      {data.map((item: any) => (
        <Card key={item.id} card={item} />
      ))}
    </div>
  );
}
