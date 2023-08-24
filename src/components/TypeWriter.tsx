import { useEffect, useState } from "react";

export type TypeWriterProps = {
  textList: string[];
  delay?: number;
  interval?: number;
  newLineInterval?: number;
};

export const TypeWriter = ({
  textList,
  delay = 0,
  interval = 30,
  newLineInterval = interval,
}: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= textList.length) return;
    const text = textList[currentIndex];
    let len = 0;

    const animate = () => {
      const intervalId = setInterval(() => {
        len++;
        if (len > text.length && currentIndex < textList.length - 1) {
          setTimeout(() => setCurrentIndex((i) => i + 1), newLineInterval);
          clearInterval(intervalId);
        } else {
          setCurrentText(text.slice(0, len));
        }
      }, interval);

      return () => {
        clearInterval(intervalId);
      };
    };

    if (currentIndex < 1) {
      const delayForAnimate = setTimeout(animate, delay);

      return () => clearTimeout(delayForAnimate);
    } else {
      animate();
    }
  }, [currentIndex, textList, interval, delay]);

  return (
    <>
      {textList.slice(0, currentIndex).map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <p>{currentText}</p>
    </>
  );
};
