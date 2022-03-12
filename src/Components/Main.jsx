import React, { useEffect, useState } from "react";

const Main = () => {
  const [key, setKey] = useState();
  const [prevKeys, setPrevKeys] = useState([]);

  const handleKey = (e) => {
    setKey({ key: e.key, code: e.code });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (key) {
      let newPrevs = [key, ...prevKeys];
      if (newPrevs.length >= 21) newPrevs.pop();
      setPrevKeys(newPrevs);
    }
  }, [key]);

  return (
    <>
      {key ? (
        <div className="container flex center">
          <div className="main-key flex center">
            <h1>{key.key}</h1>
            <h2>{key.code}</h2>
          </div>
          <div className="prev-keys flex center">
            <div className="prev prev-head flex center">
              <h3>key:</h3>
              <h4>code:</h4>
            </div>
            <div className="prev-track flex">
              {prevKeys.length > 0
                ? prevKeys.map((k, i) => {
                    if (i === 0) return "";
                    return (
                      <div className="prev flex center" key={i}>
                        <h3>{k.key}</h3>
                        <h4>{k.code}</h4>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      ) : (
        "press key to get value"
      )}
    </>
  );
};

export default Main;
