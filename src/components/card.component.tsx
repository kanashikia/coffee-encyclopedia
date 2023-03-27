import styles from "@/styles/Card.module.css";
import { Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

export function Card(props: { card: any }) {
  const { card } = props;
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isRecipeClicked, setIsRecipeClicked] = useState(false);

  if (isImageClicked) {
    return (
      <div className={`${styles.cardContainer}`}>
        <Image
          src={card.image}
          className="fade-in-image "
          alt={card.title}
          placeholder={card.title}
          width={500}
          height={500}
          style={{ width: "auto", height: "50%", borderRadius: "0.5rem" }}
          onClick={() => setIsImageClicked(false)}
        />
        <div className={styles.cardContent}>
          <Text as="b" fontSize="lg">
            {card.title}
          </Text>
          <Text fontSize="md">{card.description}</Text>
          <Button
            colorScheme="orange"
            size="xs"
            onClick={() => setIsRecipeClicked(true)}
          >
            Recipe
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${styles.cardContainer}`}
        onClick={() => setIsImageClicked(true)}
      >
        <Image
          src="/fast-food-drink-coffee-illustration-3d-png.png"
          className="fade-in-image"
          width={500}
          height={500}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: "100%", width: "auto" }} //The point is right there!
          alt={""}
        />
      </div>
    );
  }
}
