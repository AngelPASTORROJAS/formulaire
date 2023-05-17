import { useState, useEffect, useLayoutEffect } from "react";

function Effect() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    console.log("chargement");
  }, []);

  useEffect(() => {
    console.log("chargement + refaîchissement");
  });

  useEffect(() => {
    console.log("chargement + count + 1");
  }, [count1]);

  useLayoutEffect(() => {
    console.log("Code à exécuter avant le montage du composant");
  }, []);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>click1</button>
      <button onClick={() => setCount2(count2 + 1)}>click2</button>
    </>
  );
}

export default Effect;
